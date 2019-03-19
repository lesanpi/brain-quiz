import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from 'react-native'


function Header(props){
	return(
		<View>
			<SafeAreaView>
				<View 
					style={styles.container}
				>
					
					<Text>Header</Text>
				</View>
				
			</SafeAreaView>
		</View>

	);
}

const styles = StyleSheet.create({
	logo: {
		
		height: 60,
		resizeMode: 'contain',
	},
	container: {
		padding: 18,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 2,
		borderColor: '#eaeaea',
		backgroundColor: '#f7f7f7',
	},
	right: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
})

export default Header;