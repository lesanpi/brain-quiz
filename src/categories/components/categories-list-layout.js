import React from 'React';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

function CategoriesListLayout(props){
	return(
		
		<SafeAreaView style={styles.container}>
			
			<Text style={styles.welcome}>Lista de Categorias </Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default CategoriesListLayout;