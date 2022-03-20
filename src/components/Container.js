import Header from './Header'
import Logo from '../img/aesop.svg'
import ML100 from '../img/facial_cleanser_100mL.svg'
import ML200 from '../img/facial_cleanser_200mL.svg'
import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'
import '../App.scss'
import { useCustomBreakpoint } from '../hooks/useBreakpoint'
import classnames from 'classnames'

const Container = () => {
	const [checkedOption, setCheckedOption] = useState('100 mL')
	const [numberOfCartItems, setNumberOfCartItems] = useState(0)
	const [itemAddedToCart, setItemAddedToCart] = useState('n/a')
	const { isCustom: isUnder768 } = useCustomBreakpoint({ max: 769 })

	const handleChecked = e => setCheckedOption(e.target.value)

	const handleClick = () => {
		setNumberOfCartItems(prevNumberOfCartItems =>
			prevNumberOfCartItems < 5 ? prevNumberOfCartItems + 1 : 5
		)
		if (numberOfCartItems === 5) return setItemAddedToCart('error')
		setItemAddedToCart('success')
	}

	const resetCartItemsOnClick = () =>
		numberOfCartItems > 0 && setNumberOfCartItems(0)

	useEffect(() => {
		let interval

		if (itemAddedToCart === 'success')
			interval = setInterval(() => setItemAddedToCart('n/a'), 3000)
		return () => clearInterval(interval)
	}, [itemAddedToCart])

	return (
		<div className='container'>
			<Header
				itemAddedToCart={itemAddedToCart}
				cartItems={numberOfCartItems}
				onClick={resetCartItemsOnClick}
			/>
			<div className='body flex flex__container'>
				<div
					className={classnames(
						'flex--3',
						'flex__body',
						isUnder768 && 'flex--hide'
					)}
				>
					<img src={Logo} alt='aesop logo' className='body__image body__logo' />
				</div>
				<div className='flex--3 flex__body'>
					<img
						src={checkedOption === '100 mL' ? ML100 : ML200}
						alt={`Facial cleanser ${checkedOption}`}
						className='body__image body__product'
					/>
				</div>
				<div className='flex--3 flex__body'>
					<ProductCard
						checked={checkedOption}
						onChecked={handleChecked}
						onClick={handleClick}
						numberOfCartItems={numberOfCartItems}
					/>
				</div>
			</div>
		</div>
	)
}

export default Container
