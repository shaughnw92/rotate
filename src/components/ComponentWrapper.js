import React, { Fragment } from 'react'
import Separator from './Separator'

const ComponentWrapper = ({ children, direction, color, thickness }) => (
	<Fragment>
		{children}
		<Separator direction={direction} color={color} thickness={thickness} />
	</Fragment>
)

export default ComponentWrapper
