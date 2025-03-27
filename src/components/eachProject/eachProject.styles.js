import styled from 'styled-components';
import { FONT_SIZE } from '../../styles/fonts';

const StyledContainer = styled.div`
	width: 20.3125rem;
`;

const StyledEachProject = styled.a`
	display: flex;
	width: 20.3125rem;
	height: 13.1875rem;
	border-radius: 0.4rem;
	background-image: url(${({ $background }) => $background});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

const StyledDotsContainer = styled.div`
	display: flex;
	gap: 0.3125rem;
	margin: 0.5rem 0.5rem;
`;

const StyledDot = styled.div`
	height: 0.4rem;
	width: 0.4rem;
	border-radius: 50%;
	background-color: ${({ $color }) => $color};
`;

const StyledTitle = styled.span`
	font-size: ${FONT_SIZE.p};
`;

const StyledToGit = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 0.5rem;
	align-items: center;
`;

const StyledGitContainer = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${FONT_SIZE.xs};
`;

const StyledToGitIcon = styled.img`
	height: 1.5rem;
	width: 1.5rem;

	@media (hover: hover) {
		&:hover {
			filter: brightness(0) saturate(100%) invert(82%) sepia(49%) saturate(371%)
				brightness(100%) contrast(101%);
			transition: transform 0.3s ease;
			transform: rotate(35deg);
		}
	}
`;

export {
	StyledDot,
	StyledDotsContainer,
	StyledEachProject,
	StyledTitle,
	StyledContainer,
	StyledGitContainer,
	StyledToGit,
	StyledToGitIcon
};
