import React, {Component} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import Home from '../sections/containers/home'
import Header from '../sections/components/header'
import CategoryList from '../categories/containers/categories-list'
class categoriesSelection extends Component{
	render(){
		return(
			<Home>
				
				<CategoryList />
			</Home>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	    height: '100%',
	    justifyContent: 'center',
	    alignItems: 'center',
		backgroundColor: 'white',
		
	},
	logo: {
		width: '100%',
		height: 80,
		resizeMode: 'contain',
	},
	start:{
		fontSize: 20,
	}
})

export default categoriesSelection;