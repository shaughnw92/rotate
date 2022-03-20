import classnames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import renderButtonChildren from '../helpers/renderButtonChildren'
import Button from './Button'
import ComponentWrapper from './ComponentWrapper'
import Radio from './Radio'

const ProductSizes = ({
	options,
	checked,
	onChecked,
	onClick,
	sizeInfo: { price, currency, blurb },
	cartState,
}) => {
	const [activeDotIx, setActiveDotIx] = useState(0)
	const buttonRef = useRef()

	useEffect(() => {
		let interval
		if (
			cartState === 'loading' &&
			buttonRef.current !== undefined &&
			buttonRef.current.children.length > 0
		) {
			buttonRef.current.children[activeDotIx].classList.toggle(
				'loading__dot--active'
			)
			interval = setInterval(
				() =>
					setActiveDotIx(prevActiveDotIx =>
						prevActiveDotIx === 2 ? 0 : prevActiveDotIx + 1
					),
				125
			)
		}
		return () => clearInterval(interval)
	}, [cartState, buttonRef, activeDotIx])

	return (
		<ComponentWrapper direction='vertical' color='#D5D4C9' thickness={1}>
			<div className='product-card__info'>
				<h4 className='product-card__title product-card__title--size title--h4'>
					Sizes
				</h4>
				<Radio options={options} checked={checked} onChecked={onChecked} />
				<Button
					onClick={onClick}
					color='#252525'
					fontColor='#FFFEF2'
					ref={buttonRef}
					className={classnames(
						'button--animation',
						cartState !== 'default' && 'button--loading'
					)}
				>
					{renderButtonChildren(cartState, `${currency}${price}`)}
				</Button>
				<p className='product-card__description'>
					{blurb} <span className='logo logo--klarna'>Klarna</span>. No fees.{' '}
					<a href='_' className='link'>
						Learn more
					</a>
				</p>
			</div>
		</ComponentWrapper>
	)
}

export default ProductSizes
