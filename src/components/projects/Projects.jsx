import { PROJECTS_INFO } from '../../constants/projects';
import EachProject from '../eachProject/EachProject';
import {
	StyledHeader,
	StyledInAction,
	StyledProject,
	StyledProjectsContainer
} from './projects.styles';

const Projects = ({ text }) => {
	return (
		<StyledProject>
			<StyledHeader>
				{text.portfolio.type}{' '}
				<StyledInAction>{text.portfolio.in}</StyledInAction>
			</StyledHeader>
			<StyledProjectsContainer>
				{PROJECTS_INFO.map(item => (
					<EachProject key={item.id} item={item} />
				))}
			</StyledProjectsContainer>
		</StyledProject>
	);
};

export default Projects;
