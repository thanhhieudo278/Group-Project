import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Directions, TextInput} from 'react-native-gesture-handler';
import {Size} from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
//component = function
function HomeScreen(props) {
  return (
    <View
      style={{
        backgroundColor: '#F0F8FF',
        flex: 100,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 100,
          backgroundColor: 'skyblue',
          justifyContent: 'flex-start',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 23,
          }}>
          Home
        </Text>
        <View style={{flex: 1}} />
        <Image
          source={require('../assets/ic_menu.png')}
          style={{
            width: 30,
            height: 30,
            marginEnd: 10,
            tintColor: 'purple',
          }}
        />
      </View>
      <View style={{
          flex:15,
          color: 'green'
      }}/>
      <View style={{
          flex:15,
          color: 'green'
      }}/>
      <View style={{
          flex:15,
          color: 'green'
      }}/>
    </View>
  );
}

export default HomeScreen;
