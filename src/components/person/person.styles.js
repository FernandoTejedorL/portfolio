import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledPerson = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	font-size: ${FONT_SIZE.l};
	margin-bottom: 1rem;
`;

const StyledObjectKey = styled.span`
	color: ${COLORS.turquoise};
	font-weight: ${FONT_WEIGHT.bold};
`;
const StyledName = styled.span`
	color: ${COLORS.coral};
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledIcon = styled.img`
	display: none;
`;

const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: ${FONT_SIZE.xs};
	margin-top: 1rem;
`;

const StyledText = styled.p`
	font-size: ${FONT_SIZE.p};
	margin-block: 0.5rem;
	line-height: 130%;
`;

const StyledTag = styled.span`
	align-self: flex-end;
`;

export {
	StyledIcon,
	StyledName,
	StyledObjectKey,
	StyledPerson,
	StyledTag,
	StyledText,
	StyledTextContainer
};
