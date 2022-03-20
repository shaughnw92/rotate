const Table = ({ tableData, tableTitle }) => (
	<div className='table'>
		<h4 className='table__title title--h4'>{tableTitle}</h4>
		<div className='table__container'>
			{tableData.map(({ heading, body }, ix) => (
				<div className='table__row' key={ix}>
					<p className='table__heading'>{heading}</p>
					<p className='table__body'>{body}</p>
				</div>
			))}
		</div>
	</div>
)

export default Table
