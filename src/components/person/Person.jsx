import {
	StyledIcon,
	StyledName,
	StyledObjectKey,
	StyledPerson,
	StyledTag,
	StyledText,
	StyledTextContainer
} from './person.styles';

const Person = ({ text, persona }) => {
	return (
		<StyledPerson>
			<span>
				{text.as} <StyledObjectKey>{'{'}</StyledObjectKey>
				<StyledName>{text.person[persona].type}</StyledName>
				<StyledObjectKey>{'}'}</StyledObjectKey>
			</span>
			<div>
				<StyledIcon src={text.person[persona].icon} alt='icon' />
				<StyledTextContainer>
					<span>{'<p>'}</span>
					<StyledText>{text.person[persona].description}</StyledText>
					<StyledTag>{'</p>'}</StyledTag>
				</StyledTextContainer>
			</div>
		</StyledPerson>
	);
};

export default Person;
