import { SKILLS_INFO } from '../../constants/skills';

const Skills = ({ text }) => {
	return (
		<div>
			<span>
				{text.feature}{' '}
				<span>
					{'/*'}
					{text.subfeature}
					{'*/'}
				</span>
			</span>
			<div>
				{SKILLS_INFO.map(item => (
					<img key={item.id} src={item.image} alt='logo' />
				))}
			</div>
		</div>
	);
};

export default Skills;
