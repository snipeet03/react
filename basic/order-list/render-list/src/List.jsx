function List(props){

	const itemList = props.items;
	const categorie = props.categorie;


	const listItems = itemList.map( item => <li key = {item.id}>
								{item.name} : &nbsp;
								{item.calorie}</li> );

	return (
		<>
		<h3>{categorie}</h3> <h3>{listItems}</h3>
		</>
		
	);

}

export default List