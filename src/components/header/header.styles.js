import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 1.4375rem;

	@media screen and (width>=768px) {
		padding: 1.4375rem 2.875rem;
	}
`;

const StyledIcon = styled.img`
	height: 3.125rem;
	width: 3.125rem;
`;

const StyledSVG = styled.img`
	@media (hover: hover) {
		&:hover {
			filter: brightness(0) saturate(100%) invert(82%) sepia(49%) saturate(371%)
				brightness(100%) contrast(101%);
			transition: transform 0.3s ease;
			transform: rotate(35deg);
		}
	}
`;

const StyledSocialContainer = styled.div`
	display: flex;
	gap: 1rem;

	@media screen and (width>=768px) {
		gap: 2.125rem;
	}
`;

export { StyledHeader, StyledIcon, StyledSocialContainer, StyledSVG };
