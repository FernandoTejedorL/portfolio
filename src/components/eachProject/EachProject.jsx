import {
	StyledDot,
	StyledDotsContainer,
	StyledEachProject,
	StyledTitle
} from './eachProject.styles';

const EachProject = ({ item }) => {
	return (
		<div>
			<StyledEachProject
				href={item.link}
				target='_blank'
				rel='noopener noreferrer'
				$background={item.image}
			>
				<StyledDotsContainer>
					<StyledDot $color={'red'}></StyledDot>
					<StyledDot $color={'yellow'}></StyledDot>
					<StyledDot $color={'turquoise'}></StyledDot>
				</StyledDotsContainer>
			</StyledEachProject>
			<StyledTitle>{item.name}</StyledTitle>
		</div>
	);
};

export default EachProject;
