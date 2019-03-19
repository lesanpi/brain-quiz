import React, {Component} from 'react';
import {StyleSheet, Text, View, PersistGate, Image } from 'react-native';
import Loading from './src/sections/components/loading';
import Principal from './src/screens/principal';
import Categories from './src/screens/categoriesSelection';
import { createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import MusicaScreen from './src/screens/musica/containers/musica'
import MatematicasScreen from './src/screens/matematicas/containers/matematicas'
import DeportesScreen from './src/screens/deportes/containers/deportes'
import PaisesScreen from './src/screens/paises/containers/paises'
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {};

class App extends Component<Props> {
  render() {
    return (

      <View >
          <Header />
          <Category />
          <Text style={styles.welcome}>Welcome to React Native, Luis!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}


const Main = createBottomTabNavigator({
  Musica: {
    screen: MusicaScreen,
    navigationOptions: {
      
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        if(focused)
          return (<View
                      style={
                        {
                          
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                      }>
                      <Image 
                        source={require('./assets/music-active.png')}
                        style={ {
                          width: 50,
                          height: 50,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>)
        else {
          return (<View
                      style={
                        {
                          
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                      }>
                      <Image 
                        source={require('./assets/music.png')}
                        style={ {
                          width: 50,
                          height: 50,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>)
        }

      }
      , 

    }
  },
  Matematicas: {
    screen: MatematicasScreen,
    navigationOptions: {
      
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        if(focused)
          return (<View
                      style={
                        {
                          
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                      }>
                      <Image 
                        source={require('./assets/category-active.png')}
                        style={ {
                          width: 50,
                          height: 50,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>)
        else {
          return (<View
                      style={
                        {
                          
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                      }>
                      <Image 
                        source={require('./assets/category.png')}
                        style={ {
                          width: 50,
                          height: 50,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>)
        }

      }
      , 

    }
  },
  Deportes: {
    screen: DeportesScreen,
    navigationOptions: {
      
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        if(focused)
          return (<View
                      style={
                        {
                          
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                      }>
                      <Image 
                        source={require('./assets/fitness-active.png')}
                        style={ {
                          width: 50,
                          height: 50,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>)
        else {
          return (<View
                      style={
                        {
                          
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                      }>
                      <Image 
                        source={require('./assets/fitness.png')}
                        style={ {
                          width: 50,
                          height: 50,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>)
        }

      }

    }
  },
  Paises: {
    screen: PaisesScreen,
    navigationOptions: {
      
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        if(focused)
          return (<View
                      style={
                        {
                          
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                      }>
                      <Image 
                        source={require('./assets/bank-active.png')}
                        style={ {
                          width: 50,
                          height: 50,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>)
        else {
          return (<View
                      style={
                        {
                          
                          justifyContent: 'center',
                          alignItems: 'center',
                        }
                      }>
                      <Image 
                        source={require('./assets/bank.png')}
                        style={ {
                          width: 50,
                          height: 50,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>)
        }

      }
      , 

    }
  },

},
{
  tabBarOptions:{
    style:{
      height: 90,
      backgroundColor: '#f7f7f7',

    },
    showLabel: false,
  }
}

)

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logo: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
});

export default createAppContainer(Main);