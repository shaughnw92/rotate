import classnames from 'classnames'
import React, { forwardRef } from 'react'
import '../App.scss'

const Button = (
	{
		onClick,
		children,
		color: backgroundColor,
		fontColor: color,
		naked = false,
		className,
		textAlign = 'center',
		fullWidth = true,
	},
	ref
) => (
	<button
		ref={ref}
		onClick={onClick}
		className={classnames('button', naked && 'button--naked', className)}
		style={{ backgroundColor, color, textAlign, width: fullWidth && '100%' }}
	>
		{children}
	</button>
)

export default forwardRef(Button)
