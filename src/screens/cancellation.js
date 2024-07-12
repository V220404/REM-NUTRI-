import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Alert, TextInput, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

import { RadioGroup } from 'react-native-radio-buttons-group';

const App = () => {

  const onPressButton = () => {
    console.log('Button pressed');
  };
  const [selectedId, setSelectedId] = useState();
  const [text, setText] = useState('');
  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'lorem is msaasda',
        value: 'option1'
    },
    {
        id: '2',
        label: 'lorem is msaasd',
        value: 'option2'
    },
    {
      id: '3',
      label: 'lorem is msaasd',
      value: 'option2'
  },
  {
    id: '4',
    label: 'lorem is msaasd',
    value: 'option2'
},
{
  id: '5',
  label: 'lorem is msaasd',
  value: 'option2'
}
]), []);


const handlePress = () => {
  // Display an alert when the button is pressed
  Alert.alert('Reason Selected', 'You response is Acknowleged', [
    { text: 'OK', onPress: () => console.log('OK Pressed') }
  ]);
};


  return (
<SafeAreaView>
  <View>


  <View style={{flexDirection:'row' , gap:moderateScale(40) , top:moderateScaleVertical(20)}}>
<Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-arrow-left.png'}} style={{width:moderateScale(35), height:moderateScaleVertical(30) , left:20}}/>

<Text style={{fontFamily:'Roboto' , fontWeight:500 , fontSize:16 , lineHeight:20 , top:5 }}> Cancel
Appointment 
</Text>
</View>

<View style={{marginLeft:moderateScale(55) , marginTop:moderateScaleVertical(100)}}>
  <Text style={{fontWeight:500  ,fontSize:16}}> Reason Of Cancellation ?</Text>
</View>

<View style={{marginRight:moderateScale(150) , marginTop:moderateScaleVertical
  (30)
  }}>
<RadioGroup 
            radioButtons={radioButtons} 
            selectedId={selectedId}
            onPress={handlePress}
           

        />
</View>



<View style={{ 

      justifyContent: 'center', 
      alignItems: 'center', 
      paddingHorizontal: 20 
    }}>
      <TextInput
        style={{ 
          height: 100, 
          width: '90%',
          borderColor: 'gray', 
          borderWidth: 1, 
          padding: 10, 
          marginTop: moderateScaleVertical(20)
        }}
        placeholder="Other Reason"
        onChangeText={setText}
        value={text}
        multiline={true} 
      />
   
    </View>



<View>
    <TouchableOpacity
              style={{
                width: moderateScale(224),
                height: moderateScaleVertical(55),
                borderRadius: moderateScale(6),
                backgroundColor: '#5A3A89',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: moderateScale(4),
                elevation: 5,
                alignSelf:'center',
                marginTop:moderateScaleVertical(230)

             
              }}
              onPress={onPressButton}
            >
              <Text style={{
                color: '#ffffff',
                fontSize: moderateScale(16),
                fontWeight: '500',
                lineHeight: moderateScaleVertical(21),
                width: moderateScale(190), // Adjust text width if necessary
                textAlign: 'center', // Align text horizontally centered
              }}>
       Submit
              </Text>
            </TouchableOpacity>
    </View>





  </View>
</SafeAreaView>

  )
}


export default App;