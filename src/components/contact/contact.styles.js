import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 1rem;
	margin-block: 2rem;
	font-size: ${FONT_SIZE.xl};
	font-weight: ${FONT_WEIGHT.bold};

	@media screen and (width>=1024px) {
		font-size: ${FONT_SIZE.xxl};
	}
`;

const StyledIconsContainer = styled.div`
	display: flex;
	justify-content: space-around;

	@media screen and (width>=768px) {
		flex-direction: column;
		gap: 2rem;
		margin-left: 1.5rem;
	}
`;

const StyledLink = styled.a`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

const StyledTexts = styled.span`
	display: none;

	@media screen and (width>=768px) {
		display: block;
		font-size: ${FONT_SIZE.m};
		font-weight: ${FONT_WEIGHT.regular};
	}

	@media screen and (width>=1024px) {
		font-size: ${FONT_SIZE.xl};
	}
`;

const StyledIcon = styled.img`
	height: 3rem;
	width: 3rem;
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
	StyledContactContainer,
	StyledIcon,
	StyledIconsContainer,
	StyledLink,
	StyledTexts
};
