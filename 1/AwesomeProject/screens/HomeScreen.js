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
          flex: 15,
          justifyContent: 'flex-start',
          marginTop: 25,
        }}>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 20,
            fontWeight: 'bold',
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
        </Text>
        <View style={{flex: 1}} />
        <Image
          source={require('../assets/ic_menu.png')}
          style={{
            width: 30,
            height: 30,
            marginEnd: 20,
            marginEnd: 10,
            tintColor: 'purple',
          }}
        />
      </View>
      <View
        style={{
          flex: 70,
          backgroundColor: 'green',
          width: '100%',
        }}>
        <Text></Text>
      </View>
      <View
        style={{
          flex: 30,
          backgroundColor: 'yellow',
          width: '100%',
        }}>
        <Text></Text>
      </View>
      <View
        style={{
          flex: 50,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#6666FF',
              borderRadius: 20,
              height: 50,
              marginHorizontal: 20,
              marginVertical: 20,
              justifycontent: 'center',
              alignItems: 'center',
              width: 150,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 23,
                marginVertical: 7,
              }}>
              Workouts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ef7171',
              borderRadius: 20,
              height: 50,
              marginHorizontal: 35,
              marginVertical: 20,
              justifycontent: 'center',
              alignItems: 'center',
              width: 150,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 23,
                marginVertical: 7,
              }}>
              Doctors
            </Text>
          </TouchableOpacity>
        </View>
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