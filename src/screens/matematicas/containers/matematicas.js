
import React, { Component } from 'react';
import Header from '../../../sections/components/header'
import Category from '../../../categories/components/category'
import { View } from 'react-native';

class Matematicas extends Component {
	render(){
		return(
			<View>
				<Header />
				<Category />
				<Category />
				
			</View>
		)
	}
}

export default Matematicas;