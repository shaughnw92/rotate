import React from 'react'
import { PRODUCT_INTRO } from '../config'
import ComponentWrapper from './ComponentWrapper'

const CardTop = ({
	productTitle = PRODUCT_INTRO.title,
	productDescription = PRODUCT_INTRO.blurb,
}) => (
	<ComponentWrapper direction='vertical' color='#4A4A4A' thickness={2}>
		<div className='product-card__links'>
			<a href='_' className='product-card__link link__animation'>
				Skin
			</a>{' '}
			<span className='product-card__span'>•</span>{' '}
			<a href='_' className='product-card__link link__animation'>
				Cleanse
			</a>
		</div>
		<div className='product-card__body'>
			<div className='product-card__intro'>
				<h1 className='product-card__title title--h1'>{productTitle}</h1>
				<p className='product-card__description'>{productDescription}</p>
			</div>
		</div>
	</ComponentWrapper>
)

export default CardTop
