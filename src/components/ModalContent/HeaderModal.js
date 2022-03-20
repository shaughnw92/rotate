import React, { Fragment } from 'react'
import { EXPRESS_TABLE, STANDARD_TABLE } from '../../config'
import ComponentWrapper from '../ComponentWrapper'
import Separator from '../Separator'
import Table from '../Table'

const HeaderModal = () => {
	const separatorProps = {
		direction: 'vertical',
		color: '#D5D4C9',
		thickness: 1,
	}

	return (
		<div className='modal--header'>
			<h4 className='modal__title modal__title--main title--h4'>
				Shipping fees and delivery times
			</h4>
			<Separator {...separatorProps} />
			<ComponentWrapper {...separatorProps}>
				<Table tableTitle='Standard' tableData={STANDARD_TABLE} />
			</ComponentWrapper>
			<ComponentWrapper {...separatorProps}>
				<Table tableTitle='Express' tableData={EXPRESS_TABLE} />
			</ComponentWrapper>
			<ComponentWrapper {...separatorProps}>
				<h4 className='modal__title title--h4'>Returns</h4>
				<p className='modal__description'>
					Online purchases may be returned free of charge within thirty days.
				</p>
			</ComponentWrapper>
			<ComponentWrapper {...separatorProps}>
				<h4 className='modal__title title--h4 title--underlined'>
					Click and Collect
				</h4>
				<p className='modal__description'>
					Simply choose in-store collection at checkout, then pick up your order
					at your preferred location. Available at select stores only.
				</p>
				<p className='modal__description'>
					For general enquiries regarding Click and Collect, we welcome you to
					phone us on{' '}
					<a href='callto:442036374577' className='modal__link link--clear'>
						+44 203 637 4577
					</a>{' '}
					instead of contacting your local store.
				</p>
			</ComponentWrapper>
			<Fragment>
				<h4 className='modal__title title--h4'>Carbon neutral shipping</h4>
				<p className='modal__description'>
					We offset operational emissions to ensure the delivery of every order
					is carbon neutral.
				</p>
			</Fragment>
		</div>
	)
}

export default HeaderModal
