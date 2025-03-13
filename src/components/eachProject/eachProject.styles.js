import styled from 'styled-components';
import { FONT_SIZE } from '../../styles/fonts';

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

export { StyledDot, StyledDotsContainer, StyledEachProject, StyledTitle };
