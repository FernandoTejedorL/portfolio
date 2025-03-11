import {
	StyledHeader,
	StyledIcon,
	StyledSocialContainer,
	StyledSVG
} from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledIcon src='/assets/images/logos/logo.png' alt='logo' />
			<StyledSocialContainer>
				<a
					href='mailto:fernandotejedorlopez@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<StyledSVG src='/assets/images/logos/mail.svg' alt='mail' />
				</a>
				<a
					href='https://www.linkedin.com/in/fernando-tejedor-65483b6b/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<StyledSVG src='/assets/images/logos/linkedin.svg' alt='linkedin' />
				</a>
				<a
					href='https://github.com/FernandoTejedorL'
					target='_blank'
					rel='noopener noreferrer'
				>
					<StyledSVG src='/assets/images/logos/github.svg' alt='github' />
				</a>
			</StyledSocialContainer>
		</StyledHeader>
	);
};

export default Header;
