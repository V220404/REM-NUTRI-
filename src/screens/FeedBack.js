import { View, Text, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize'
import { AirbnbRating } from 'react-native-ratings'

const App = () => {
  const [textInputValue, setTextInputValue] = useState('');
  



  const submit = () => {
    console.log('Button pressed');
  };


 
  return (
    <SafeAreaView>
    <View style={{marginTop:20}}>
<View style={{alignItems:'center' , top:moderateScaleVertical(30)}}>
  <Text style={{fontWeight:500 , fontSize:20 , fontFamily:'Hanken Grotesk', lineHeight:26.06}}>Rate Your Experience </Text>
<View style={{marginTop:moderateScaleVertical(10)}}>
<AirbnbRating showRating={false}/>
</View>
</View>


{/* View Chnages */}


<View style={{alignItems:'center' , top:moderateScaleVertical(30) , marginTop:moderateScaleVertical(20)}}>
  <Text style={{fontWeight:400 , fontSize:18 , fontFamily:'Hanken Grotesk', lineHeight:26.06}}>lorem ipsum iluma? </Text>
<View style={{marginTop:moderateScaleVertical(10)}}>
<AirbnbRating showRating={false} size={30}/>
</View>
</View>
      
{/* View Change */}


<View style={{alignItems:'center' , top:moderateScaleVertical(30) , marginTop:moderateScaleVertical(40)}}>
  <Text style={{fontWeight:400 , fontSize:18 , fontFamily:'Hanken Grotesk', lineHeight:26.06}}>lorem ipsum iluma ?</Text>
<View style={{marginTop:moderateScaleVertical(10)}}>
<AirbnbRating showRating={false} size={30}/>
</View>
</View>


{/* View Change */}


<View style={{alignItems:'center' , top:moderateScaleVertical(30) , marginTop:moderateScaleVertical(40)}}>
  <Text style={{fontWeight:400 , fontSize:18 , fontFamily:'Hanken Grotesk', lineHeight:26.06}}>lorem ipsum iluma? </Text>
<View style={{marginTop:moderateScaleVertical(10)}}>
<AirbnbRating showRating={false} size={30}/>
</View>
</View>

{/* 
Type Space  */}
 <View style={{  justifyContent: 'center', alignItems: 'center' , marginTop:moderateScaleVertical(100) }}>
      <TextInput
        style={{
          height: moderateScaleVertical(82),
          width: moderateScale(288),
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 10,
          marginBottom: 20,
        textAlign:'center'
        }}
        placeholder="Tell Us More"
        value={textInputValue}
  
      />
      
    </View>

    <View>
    <TouchableOpacity
              style={{
                width: moderateScale(221),
                height: moderateScaleVertical(57),
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
                marginTop:moderateScaleVertical(40)

             
              }}
              onPress={submit}
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

export default App
