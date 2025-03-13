import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledProject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 100%;
	padding-inline: 1rem;
	font-size: ${FONT_SIZE.l};
	margin-top: 3rem;
`;

const StyledHeader = styled.span`
	align-self: flex-start;
`;

const StyledInAction = styled.span`
	font-weight: ${FONT_WEIGHT.bold};
	color: ${COLORS.coral};
`;

const StyledProjectsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 100%;
`;

export { StyledHeader, StyledInAction, StyledProject, StyledProjectsContainer };
