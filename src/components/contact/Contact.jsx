import {
	StyledContactContainer,
	StyledIcon,
	StyledIconsContainer,
	StyledLink,
	StyledTexts
} from './contact.styles';

const Contact = ({ text }) => {
	return (
		<StyledContactContainer>
			<span>{text.contact}</span>
			<StyledIconsContainer>
				<StyledLink
					href='mailto:fernandotejedorlopez@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<StyledIcon src='/assets/images/logos/mail.svg' alt='mail' />
					<StyledTexts>fernandotejedorlopez@gmail.com</StyledTexts>
				</StyledLink>
				<StyledLink
					href='https://www.linkedin.com/in/fernando-tejedor-65483b6b/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<StyledIcon src='/assets/images/logos/linkedin.svg' alt='linkedin' />
					<StyledTexts>LinkedIn: Fernando Tejedor</StyledTexts>
				</StyledLink>
				<StyledLink
					href='https://github.com/FernandoTejedorL'
					target='_blank'
					rel='noopener noreferrer'
				>
					<StyledIcon src='/assets/images/logos/github.svg' alt='github' />
					<StyledTexts>GitHub: FernandoTejedorL</StyledTexts>
				</StyledLink>
			</StyledIconsContainer>
		</StyledContactContainer>
	);
};

export default Contact;
