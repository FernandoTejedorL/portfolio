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

const StyledHeader = styled.span`
	align-self: ${({ $reverse }) => ($reverse ? 'flex-end' : null)};
`;

const StyledObjectKey = styled.span`
	color: ${COLORS.turquoise};
	font-weight: ${FONT_WEIGHT.bold};
`;
const StyledName = styled.span`
	color: ${COLORS.coral};
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledTextAndIcon = styled.div`
	display: flex;
	flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
	align-items: center;
	gap: 3rem;
`;

const StyledIcon = styled.img`
	display: none;

	@media screen and (width>=1024px) {
		display: block;
	}
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
	StyledHeader,
	StyledIcon,
	StyledName,
	StyledObjectKey,
	StyledPerson,
	StyledTag,
	StyledText,
	StyledTextAndIcon,
	StyledTextContainer
};
