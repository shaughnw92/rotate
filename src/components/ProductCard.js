import { useEffect, useState } from 'react'
import { PRODUCT_INFO, PRODUCT_INTRO, SIZES_OPTIONS, SIZES } from '../config'
import Bodykit from '../img/classic_skin_care_kit.svg'
import CardTop from './CardTop'
import ProductInfo from './ProductInfo'
import ProductSizes from './ProductSizes'
import AdditionalProductInfo from './AdditionalProductInfo'
import classnames from 'classnames'
import { useCustomBreakpoint } from '../hooks/useBreakpoint'

const ProductCard = ({
	productTitle = PRODUCT_INTRO.title,
	productDescription = PRODUCT_INTRO.blurb,
	productInfo = PRODUCT_INFO,
	checked,
	onChecked,
	onClick,
	numberOfCartItems,
}) => {
	const [stateOfCart, setStateOfCart] = useState('default')
	const { isCustom: isUnder768 } = useCustomBreakpoint({ max: 769 })
	const { isCustom: isUnder1024 } = useCustomBreakpoint({ max: 1025 })

	const checkedIx = SIZES_OPTIONS.findIndex(size => size.includes(checked))

	const handleClick = () => {
		setStateOfCart('loading')
		onClick()
	}

	useEffect(() => {
		let interval

		if (stateOfCart === 'loading' && numberOfCartItems < 5)
			interval = setInterval(() => setStateOfCart('added'), 4500)
		else if (stateOfCart === 'loading' && numberOfCartItems === 5)
			interval = setInterval(() => setStateOfCart('default'), 500)
		return () => clearInterval(interval)
	}, [stateOfCart, numberOfCartItems])

	useEffect(() => {
		let interval

		if (stateOfCart === 'added') {
			interval = setInterval(() => setStateOfCart('default'), 1500)
		}

		return () => clearInterval(interval)
	}, [stateOfCart])

	return (
		<div
			className={classnames(
				'product-card__container',
				isUnder1024 && 'flex',
				isUnder1024 && 'flex__container',
				isUnder1024 && 'flex--space-evenly'
			)}
		>
			<div
				className={classnames('product-card__top', isUnder1024 && 'flex--2')}
			>
				<CardTop
					productTitle={productTitle}
					productDescription={productDescription}
				/>
			</div>
			<div
				className={classnames(
					'product-card__info--container',
					isUnder1024 && 'flex--2'
				)}
			>
				<ProductInfo productInfo={productInfo} />
				<ProductSizes
					options={SIZES_OPTIONS}
					checked={checked}
					onChecked={onChecked}
					onClick={handleClick}
					sizeInfo={SIZES[checkedIx]}
					cartState={stateOfCart}
				/>
				<AdditionalProductInfo
					title='Discover the kit'
					description='Balance: Classic Skin Care Kit'
					imageSrc={Bodykit}
				/>
			</div>
		</div>
	)
}

export default ProductCard
