import {
	StyledContainer,
	StyledDot,
	StyledDotsContainer,
	StyledEachProject,
	StyledGitContainer,
	StyledTitle,
	StyledToGit,
	StyledToGitIcon
} from './eachProject.styles';

const EachProject = ({ item }) => {
	return (
		<StyledContainer>
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
			<StyledToGit>
				<StyledTitle>{item.name}</StyledTitle>
				<StyledGitContainer
					href={item.git}
					target='_blank'
					rel='noopener noreferrer'
				>
					<span>{'</'}</span>
					<StyledToGitIcon src='/assets/images/logos/github.svg' alt='github' />
					<span>{'>'}</span>
				</StyledGitContainer>
			</StyledToGit>
		</StyledContainer>
	);
};

export default EachProject;
