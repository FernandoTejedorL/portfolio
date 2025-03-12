import Contact from '../contact/Contact';
import Person from '../person/Person';
import Presentation from '../presentation/Presentation';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';

const Main = ({ text }) => {
	return (
		<main>
			<Presentation text={text} />
			<Person text={text} persona={'human'} />
			<Person text={text} persona={'developer'} />
			<Skills text={text} />
			<Projects text={text} />
			<Contact text={text} />
		</main>
	);
};

export default Main;
