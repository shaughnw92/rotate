import React from 'react'

const AdditionalProductInfo = ({ title, description, imageSrc }) => (
	<div className='product-card__additional flex flex__container flex--space-evenly'>
		<div className='flex--2 flex__body'>
			<h4 className='product-card__title title--h4'>{title}</h4>
			<p className='product-card__description'>{description}</p>
		</div>
		<div className='flex--2 flex__body text--right'>
			<img
				src={imageSrc}
				alt='classic skin care kit'
				loading='lazy'
				className='product-card__image'
			/>
		</div>
	</div>
)

export default AdditionalProductInfo
