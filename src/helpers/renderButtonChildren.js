import { Fragment } from 'react'

const renderButtonChildren = (cartState, price) => {
	switch (cartState) {
		case 'added':
			return (
				<span className='loading loading__animation'>
					<span className='loading__animation--flip-up'>Added to cart</span>
				</span>
			)
		case 'default':
			return (
				<span className='loading loading__animation'>
					<span className='loading__animation--flip-up'>
						Add to your cart - {price}
					</span>
				</span>
			)
		case 'loading':
			return (
				<Fragment>
					<span className='loading loading__dot loading__dot--one'>•</span>
					<span className='loading loading__dot loading__dot--two'>•</span>
					<span className='loading loading__dot loading__dot--three'>•</span>
				</Fragment>
			)
		default:
			return 'Add to your cart'
	}
}

export default renderButtonChildren
