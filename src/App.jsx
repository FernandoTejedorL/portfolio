import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import Header from './components/header/Header';
import Main from './components/main/Main';
import { TEXT_INFO } from './constants/texts';

const App = () => {
	const [language, setLanguage] = useState('EN');

	const text = TEXT_INFO[language];

	return (
		<>
			<GlobalStyles />
			<Header language={language} setLanguage={setLanguage} />
			<Main text={text} />
		</>
	);
};

export default App;
