const Presentation = ({ text }) => {
	return (
		<div>
			<div>
				<span>{text.cheer}</span>
				<span>
					{text.subject} <span>{'{'}</span>
					<span>Fernando</span>
					<span>{'}'}</span>
				</span>
				<span>{text.role}</span>
				<p>{text.presentation}</p>
			</div>
			<div>
				<span>{'<div>'}</span>
				<div>
					<span>{'<StyledPortrait/>'}</span>
					<img src='/assets/images/portrait.jpg' alt='portrait' />
					<span>{'</div>'}</span>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
