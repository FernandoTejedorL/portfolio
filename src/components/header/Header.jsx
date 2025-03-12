import {
	StyledHeader,
	StyledIcon,
	StyledLogo,
	StyledSocialContainer,
	StyledSVG
} from './header.styles';

const Header = ({ language, setLanguage }) => {
	return (
		<StyledHeader>
			{language === 'ES' && (
				<StyledIcon
					onClick={() => setLanguage('EN')}
					src='/assets/images/logos/uk.svg'
					alt='english'
				/>
			)}
			{language === 'EN' && (
				<StyledIcon
					onClick={() => setLanguage('ES')}
					src='/assets/images/logos/spain.svg'
					alt='spanish'
				/>
			)}
			<StyledLogo src='/assets/images/logos/logo.png' alt='logo' />
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
