import {
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
} from './presentation.styles';

const Presentation = ({ text }) => {
	return (
		<StyledPresentation>
			<StyledTextContainer>
				<span>{text.cheer}</span>
				<span>
					{text.subject} <StyledObjectKey>{'{'}</StyledObjectKey>
					<StyledName>Fernando</StyledName>
					<StyledObjectKey>{'}'}</StyledObjectKey>
				</span>
				<StyledRole>{text.role}</StyledRole>
				<StyledStory>{text.presentation}</StyledStory>
			</StyledTextContainer>
			<StyledPortraitContainer>
				<span>{'<div>'}</span>
				<StyledSubPortrait>
					<StyledRedTag>{'<StyledPortrait/>'}</StyledRedTag>
					<StyledImage $image='/assets/images/portrait.jpg'></StyledImage>
					<span>{'</div>'}</span>
				</StyledSubPortrait>
			</StyledPortraitContainer>
		</StyledPresentation>
	);
};

export default Presentation;
