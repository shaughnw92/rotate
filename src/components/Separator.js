import classnames from 'classnames'
import applyBEMClassName from '../helpers/applyBEMClassName'

const Separator = ({
	direction = 'vertical',
	color = 'black',
	thickness = 2,
}) => {
	const HTMLTag = direction === 'vertical' ? 'div' : 'hr'

	const thicknessPx = `${thickness}px`
	const style =
		direction === 'vertical'
			? {
					borderTopWidth: thicknessPx,
					borderTopColor: color,
					borderTopStyle: 'solid',
			  }
			: { width: thicknessPx }

	const type = ['modifier', 'block']
	const classNames = [direction, color]
	const classes = classnames(applyBEMClassName(type, 'separator', classNames))

	return (
		<HTMLTag className={classes} style={style}>
			&nbsp;
		</HTMLTag>
	)
}

export default Separator
