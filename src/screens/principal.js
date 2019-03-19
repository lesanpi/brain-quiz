import React, {Component} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
class Principal extends Component{
	render(){
		return(
			<SafeAreaView >
				<View style={styles.container}>
					<Image 
						source={require('../../assets/logo3.png')}
						style={styles.logo}
					/>
					<Text style={styles.start}> 
						PRESS TO START
					</Text>
				</View>
			</SafeAreaView>
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

export default Principal;