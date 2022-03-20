import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SIZES_OPTIONS } from '../config'

const Radio = ({ checked, onChecked, options = SIZES_OPTIONS }) => (
	<div className='radio__container'>
		{options.map((option, ix) => (
			<div className='radio__item' key={ix}>
				<input
					type='radio'
					className={classnames(
						'radio__button',
						checked === option && 'radio__button--active'
					)}
					name={`${option}${ix}`}
					onChange={checked => onChecked(checked)}
					checked={checked === option}
					value={option}
					key={ix}
				/>
				<label className='radio__label' htmlFor={`${option}${ix}`}>
					{option}
				</label>
			</div>
		))}
	</div>
)

Radio.propTypes = {
	checked: PropTypes.string,
	options: PropTypes.array,
	onChecked: PropTypes.func,
}

Radio.defaultProps = {
	options: SIZES_OPTIONS,
}

export default Radio
