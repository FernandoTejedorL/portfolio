import {
	StyledHeader,
	StyledIcon,
	StyledName,
	StyledObjectKey,
	StyledPerson,
	StyledTag,
	StyledText,
	StyledTextAndIcon,
	StyledTextContainer
} from './person.styles';

const Person = ({ text, persona, reverse }) => {
	return (
		<StyledPerson>
			<StyledHeader $reverse={reverse}>
				{text.as} <StyledObjectKey>{'{'}</StyledObjectKey>
				<StyledName>{text.person[persona].type}</StyledName>
				<StyledObjectKey>{'}'}</StyledObjectKey>
			</StyledHeader>
			<StyledTextAndIcon $reverse={reverse}>
				<StyledIcon src={text.person[persona].icon} alt='icon' />
				<StyledTextContainer>
					<span>{'<p>'}</span>
					<StyledText>{text.person[persona].description}</StyledText>
					<StyledTag>{'</p>'}</StyledTag>
				</StyledTextContainer>
			</StyledTextAndIcon>
		</StyledPerson>
	);
};

export default Person;
