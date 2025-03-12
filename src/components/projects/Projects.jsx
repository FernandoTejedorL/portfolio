import { PROJECTS_INFO } from '../../constants/projects';
import EachProject from '../eachProject/EachProject';

const Projects = ({ text }) => {
	return (
		<div>
			<span>
				{text.portfolio.type} <span>{text.portfolio.in}</span>
			</span>
			{PROJECTS_INFO.map(item => (
				<EachProject key={item.id} item={item} />
			))}
		</div>
	);
};

export default Projects;
