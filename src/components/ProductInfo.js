import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import { PRODUCT_INFO } from '../config'
import useModal from '../hooks/useModal'
import ComponentWrapper from './ComponentWrapper'
import IngredientsModal from './ModalContent/IngredientsModal'

const ProductInfo = ({ productInfo = PRODUCT_INFO }) => {
	const { modalIsOpen, setModal } = useModal()
	return productInfo.map(({ title, blurb, modal }, ix) => (
		<ComponentWrapper
			key={ix}
			direction='vertical'
			color='#D5D4C9'
			thickness={1}
		>
			<div className='product-card__info'>
				<h4 className='product-card__title title--h4'>
					{title}
					{modal && (
						<span
							onClick={() => {
								setModal(<IngredientsModal />)
							}}
							className={classnames(
								'product-card__link',
								'info__link',
								'info__link--circle',
								modalIsOpen && 'info__link--rotated'
							)}
						>
							<FontAwesomeIcon icon={faPlus} />
						</span>
					)}
				</h4>
				<p className='product-card__description description--clear'>{blurb}</p>
			</div>
		</ComponentWrapper>
	))
}

export default ProductInfo
