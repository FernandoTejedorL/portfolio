const EachProject = ({ item }) => {
	return (
		<div>
			<img src={item.image} alt='' />
			<span>{item.name}</span>
		</div>
	);
};

export default EachProject;
