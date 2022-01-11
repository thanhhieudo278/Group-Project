import React from 'react';
import{
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Size } from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
//component = function
function MainScreen(props)
{
    return <View style=
    {{
        backgroundColor: '#FFFFFF',
        flex: 1
        
    }}>
        <View style={{        
            alignItems: 'center',
            marginTop: 130,
            marginHorizontal:100,
            flex : 3,
            backgroundColor: "red"
        }}>
            <Text style={{
                
                color: "black",
                fontSize: 26,
                

            }}> Tell me more about yourself</Text>
        </View>
        <View style={{
            backgroundColor: 'purple',
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
                

                }}>Start
                </Text>

            </TouchableOpacity>

        </View>
       
    </View>    
}

export default MainScreen