const Contact = ({ text }) => {
	return (
		<div>
			<span>{text.contact}</span>
			<div>
				<a
					href='mailto:fernandotejedorlopez@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src='/assets/images/logos/mail.svg' alt='mail' />
					<span>fernandotejedorlopez@gmail.com</span>
				</a>
				<a
					href='https://www.linkedin.com/in/fernando-tejedor-65483b6b/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src='/assets/images/logos/linkedin.svg' alt='linkedin' />
					<span>LinkedIn: Fernando Tejedor</span>
				</a>
				<a
					href='https://github.com/FernandoTejedorL'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src='/assets/images/logos/github.svg' alt='github' />
					<span>GitHub: FernandoTejedorL</span>
				</a>
			</div>
		</div>
	);
};

export default Contact;
