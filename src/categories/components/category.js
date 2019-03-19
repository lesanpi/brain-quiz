import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Category(props){
	return(
		<View 
			style={styles.wrapper}>	
			<View 
				style={styles.wrapper2}>	
				<View 
					style={styles.wrapper3}>
					<Text style={styles.inside}>1</Text>						
				</View>					
									
			</View>						
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper:{
		width: 110,
		height: 110,
		borderRadius: 100,
		overflow: 'hidden',
		alignItems: 'center',	
		justifyContent: 'center',
		marginHorizontal: 5,
		backgroundColor: '#eaeaea',
		marginVertical: 5,
		
	},
	wrapper2:{
		width: 90,
		height: 90,
		borderRadius: 100,
		overflow: 'hidden',
		alignItems: 'center',	
		justifyContent: 'center',
		marginHorizontal: 5,
		backgroundColor: 'white',
		marginVertical: 5,
	},
	wrapper3:{
		width: 65,
		height: 65,
		borderRadius: 100,
		overflow: 'hidden',
		alignItems: 'center',	
		justifyContent: 'center',
		marginHorizontal: 5,
		backgroundColor: '#eaeaea',
		marginVertical: 5,
	},
	inside:{
		fontSize: 35,
		color: '#bcbcbc',
		fontWeight: 'bold',
		textAlign: 'center',
		elevation: 10,
	}

})
export default Category;