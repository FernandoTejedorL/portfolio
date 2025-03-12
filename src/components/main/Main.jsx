import Contact from '../contact/Contact';
import Person from '../person/Person';
import Presentation from '../presentation/Presentation';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import { StyledMain } from './main.styles';

const Main = ({ text }) => {
	return (
		<StyledMain>
			<Presentation text={text} />
			<Person text={text} persona={'human'} />
			<Person text={text} persona={'developer'} />
			<Skills text={text} />
			<Projects text={text} />
			<Contact text={text} />
		</StyledMain>
	);
};

export default Main;
