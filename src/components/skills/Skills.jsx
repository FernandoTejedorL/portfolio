import { SKILLS_INFO } from '../../constants/skills';
import {
	StyledComment,
	StyledIconsContainer,
	StyledSkillsContainer
} from './skills.styles';

const Skills = ({ text }) => {
	return (
		<StyledSkillsContainer>
			<span>
				{text.feature}{' '}
				<StyledComment>
					{'/*'}
					{text.subfeature}
					{'*/'}
				</StyledComment>
			</span>
			<StyledIconsContainer>
				{SKILLS_INFO.map(item => (
					<img key={item.id} src={item.image} alt='logo' />
				))}
			</StyledIconsContainer>
		</StyledSkillsContainer>
	);
};

export default Skills;
