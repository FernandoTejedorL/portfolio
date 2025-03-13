import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledPresentation = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	font-size: ${FONT_SIZE.xl};

	@media screen and (width>=1024px) {
		flex-direction: row;
		align-items: center;
	}
`;

const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledObjectKey = styled.span`
	color: ${COLORS.turquoise};
	font-weight: ${FONT_WEIGHT.bold};
`;
const StyledName = styled.span`
	color: ${COLORS.coral};
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledRole = styled.span`
	color: ${COLORS.yellow};
`;

const StyledStory = styled.p`
	font-size: ${FONT_SIZE.p};

	@media screen and (width>=1024px) {
		width: 90%;
	}
`;

const StyledPortraitContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	font-size: ${FONT_SIZE.xs};

	@media screen and (width>=768px) {
		align-self: center;
		width: 50%;
	}
`;

const StyledSubPortrait = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding-block: 0.8rem;
	gap: 0.8rem;
`;

const StyledRedTag = styled.span`
	align-self: flex-start;
	color: ${COLORS.coral};
	margin-left: 0.8rem;
`;

const StyledImage = styled.div`
	align-self: center;
	height: 13.875rem;
	width: 13.875rem;
	border-radius: 50%;
	border: 5px solid ${COLORS.text};
	background-image: url(${({ $image }) => $image});
	background-repeat: no-repeat;
	background-position: top -3.125rem center;
	background-size: cover;

	@media screen and (width>=1024px) {
		width: 17.0625rem;
		height: 23.5625rem;
		border-radius: 5.625rem;
		background-position: center;
	}
`;

export {
	StyledImage,
	StyledName,
	StyledObjectKey,
	StyledPortraitContainer,
	StyledPresentation,
	StyledRedTag,
	StyledRole,
	StyledStory,
	StyledSubPortrait,
	StyledTextContainer
};
