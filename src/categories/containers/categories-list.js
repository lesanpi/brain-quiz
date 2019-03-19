import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import Layout from '../components/categories-list-layout';
//import Empty from '../components/empty'
//import EmptyCategories from '../components/EmptyCategories';
import Separator from '../components/vertical-separator'
import Category from '../components/category';
	

	list = [
			{
				
				name:'Cultura General',
				id: 1,
			},
		 	{	
		 		
		 		name: 'Musica',
		 		id: 2,
		 	}, 
			{
				
				name:'Cultura General',
				id: 3,
			},
		 	{	
		 		
		 		name: 'Musica',
		 		id: 4,
		 	},


		]

class SuggestionList extends Component {





	itemSeparator = () => <Separator />
//<Category {...item} />
	renderItem = ({item}) => {
		return ( 
			<Category {...item} />
			
		)
	}

	keyExtractor = (item) => item.id.toString()
	
	render(){
		console.log(list);
		return(

			<Layout>

			</Layout>
		);
	}
}

export default SuggestionList;