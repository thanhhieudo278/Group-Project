import React from 'react';
import{
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Size } from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

//component = function
function SelectWorkout(props)
{
    return <View style=
    {{
        backgroundColor: '#F0F8FF',
        flex: 1
        
    }}>
        
       <View style={{        
            alignItems: 'center',   
            marginHorizontal:100,
            flexDirection: 'row',
            flex : 1,
            
        }}>
            
            <Text style={{
                marginVertical:30,
                color: "black",
                fontSize: 26,
                

            }}> Select Workout</Text>

        </View>

        

        <View style={{
            flex: 5,
            backgroundColor: 'red',
        }}></View>

       <View style={{
            
            flex: 1,
            
        }}>
            <TouchableOpacity style={{
                
                backgroundColor: '#6666FF',
                borderRadius:20,
                height: 55,
                marginHorizontal: 50,
                marginVertical:20,
                justifycontent: 'center',
                alignItems: 'center',
                
                
            }}>
                <Text style={{
                    color: 'white',
                    fontSize:23,
                    marginVertical: 10,
                

                }}>Next
                </Text>

            </TouchableOpacity>

        </View>
    </View>    
}

export default SelectWorkout