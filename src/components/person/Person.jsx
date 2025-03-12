const Person = ({ text, persona }) => {
	return (
		<div>
			<span>
				{text.as} <span>{'{'}</span>
				<span>{text.person[persona].type}</span>
				<span>{'}'}</span>
			</span>
			<div>
				<img src={text.person[persona].icon} alt='icon' />
				<div>
					<span>{'<p>'}</span>
					<p>{text.person[persona].description}</p>
					<span>{'</p>'}</span>
				</div>
			</div>
		</div>
	);
};

export default Person;
