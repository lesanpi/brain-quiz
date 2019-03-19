
import React, { Component } from 'react';
import Header from '../../../sections/components/header'
import Category from '../../../categories/components/category'
import { View } from 'react-native';

class Paises extends Component {
	render(){
		return(
			<View>
				<Header />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
			</View>
		)
	}
}

export default Paises;