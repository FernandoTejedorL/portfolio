import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledSkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 1rem;
	font-size: ${FONT_SIZE.l};
	font-weight: ${FONT_WEIGHT.bold};
	margin-bottom: 2rem;
`;

const StyledComment = styled.span`
	font-weight: ${FONT_WEIGHT.regular};
	opacity: 50%;
`;

const StyledIconsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	align-items: center;
	justify-content: center;
`;

export { StyledComment, StyledIconsContainer, StyledSkillsContainer };
