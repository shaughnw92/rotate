import classnames from 'classnames'

const applyBEMClassName = (
	type,
	classNames,
	endClassName,
	includeBlockClass = true
) => {
	const flags = type.map(flagType => (flagType === 'modifier' ? '--' : '__'))
	const endClasses = endClassName.map(
		(endClass, ix) => `${classNames}${flags[ix]}${endClass}`
	)
	return classnames(includeBlockClass && classNames, endClasses)
}

export default applyBEMClassName
