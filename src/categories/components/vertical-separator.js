import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function VerticalSeparator(props){
	return(
		<View style={
			styles.separator
			}>
		</View>
	)
}

const styles = StyleSheet.create({
	separator:{
		borderTopWidth: 1,
	},
})

export default VerticalSeparator;