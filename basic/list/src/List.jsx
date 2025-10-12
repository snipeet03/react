function List(props){


	const itemArray = props.items;
	const categorie = props.categorie;

	const listFruits = itemArray.map(item => <li key = {item.id}>
								{item.name} : &nbsp;
								<b>{item.calorie}</b>
						
	</li> )

return ( <ul> <b>{categorie}</b>{listFruits}</ul>  )



}

export default List;