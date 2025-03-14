import { v4 } from 'uuid';

const ENGLISH_INFO = {
	id: v4(),
	cheer: 'Hi there!',
	subject: `I'm`,
	role: 'Full Stack Developer',
	presentation: `Having spent years on the customer facing and product side, I'm now fully immersing myself in development bringing a deep understanding of both worlds.`,
	as: 'As a',
	person: {
		human: {
			type: 'human',
			icon: '/assets/images/logos/data_array.png',
			description: `I’m a creative thinker, always driven by curiosity and a restless desire to explore new challenges. Whether it’s building innovative solutions, diving into the world of music — both as a listener and a creator — or simply enjoying time with my dog, I find inspiration in every experience. Passionate about learning and evolving, I embrace new aspirations with an open mind, always looking for ways to push boundaries and grow.`
		},
		developer: {
			type: 'developer',
			icon: '/assets/images/logos/data_object.png',
			description: `I'm specialized in JavaScript, leveraging React to build dynamic and efficient web applications. My approach is always mobile-first, ensuring seamless user experiences across all devices while maintaining a strong focus on accessibility. I believe that great development is not just about writing code—it’s about creating inclusive, user-friendly, and high-performing applications that make a difference. With every project, I strive to combine clean code, responsive design, and accessibility best practices to deliver outstanding results.`
		}
	},
	feature: 'Code',
	subfeature: '& beyond',
	portfolio: {
		type: 'Code',
		in: 'in Action'
	},
	contact: 'CONTACT'
};

const SPANISH_INFO = {
	id: v4(),
	cheer: '¡Hola!',
	subject: `Soy`,
	role: 'Dessarrollador Full Stack',
	presentation:
		'Tras años trabajando de cara al cliente y en el lado del producto, ahora me estoy sumergiendo de lleno en el desarrollo, aportando un profundo conocimiento de ambos mundos.',
	as: 'Como',
	person: {
		human: {
			type: 'humano',
			icon: '/assets/images/logos/data_array.png',
			description:
				'Soy una persona creativa, siempre impulsado por la curiosidad y el deseo de explorar nuevos retos. Ya sea creando soluciones innovadoras, perdiéndome en el mundo de la música (tanto como oyente como creador) o simplemente disfrutando del tiempo con mi perro, encuentro inspiración en cada experiencia. Apasionado por aprender y evolucionar, me lanzo a nuevas aspiraciones con una mente abierta, buscando siempre formas de superar los límites y crecer.'
		},
		developer: {
			type: 'desarrollador',
			icon: '/assets/images/logos/data_object.png',
			description:
				'Me especializo en JavaScript, aprovechando React para construir aplicaciones web dinámicas y eficientes. Mi enfoque es siempre mobile-first, asegurando experiencias de usuario sin fisuras en todos los dispositivos y manteniendo un fuerte enfoque en la accesibilidad. Creo que un gran desarrollo no se trata solo de escribir código, sino de crear aplicaciones inclusivas, fáciles de usar y de alto rendimiento que marquen la diferencia. Con cada proyecto, me esfuerzo por combinar código limpio, diseño responsive y las mejores prácticas de accesibilidad para ofrecer grandes resultados.'
		}
	},
	feature: 'Código',
	subfeature: 'y más',
	portfolio: {
		type: 'Código',
		in: 'en Acción'
	},
	contact: 'CONTACTO'
};

export const TEXT_INFO = {
	EN: ENGLISH_INFO,
	ES: SPANISH_INFO
};
