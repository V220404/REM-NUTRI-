import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';
const App = () => {


  const cancel = () => {
    console.log('Button pressed');
  };

  return (

    <SafeAreaView>
      <View>
      <View style={{flexDirection:'row' , gap:moderateScale(40) , top:moderateScaleVertical(20)}}>
<Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-arrow-left.png'}} style={{width:moderateScale(35), height:moderateScaleVertical(30) , left:20}}/>

<Text style={{fontFamily:'Roboto' , fontWeight:500 , fontSize:16 , lineHeight:20 , top:5 }}>
Appointment Details
</Text>
</View>

<View style={{gap:moderateScale(8) , flexDirection:'row' , marginTop:moderateScaleVertical(70) , marginLeft:moderateScale(20)}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
    Doctor : 
  </Text>
  <Text style={{fontWeight:400 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>Raghu Nanda</Text>
</View>



<View style={{marginTop:30 , marginLeft:moderateScale(20)} }>
<View style={{gap:moderateScale(8) , flexDirection:'row'}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
  Date :  
  </Text>
  <Text style={{fontWeight:400 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>12 July</Text>
</View>
</View>


<View style={{marginTop:30 , marginLeft:moderateScale(20)}}>
<View style={{gap:moderateScale(8) , flexDirection:'row'}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
 Time : 
  </Text>
  <Text style={{fontWeight:400 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>12 12:30 PM - 01:30 PM</Text>
</View>
</View>


<View style={{marginTop:30 ,  marginLeft:moderateScale(20)}}>
<View style={{gap:moderateScale(8) , flexDirection:'row'}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
 Type : 
  </Text>
  <Text style={{fontWeight:400 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>Mental health</Text>
</View>
</View>


<View style={{marginTop:30 ,  marginLeft:moderateScale(20)}}>
<View style={{gap:moderateScale(8) , flexDirection:'row'}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
Session Link : 
  </Text>
  <Text style={{fontWeight:400 , fontSize:14 , lineHeight:18.24 , fontFamily:'Hanken Grotesk', color:'blue'}}>https:/losumakji.googlemeet.com </Text>
</View>
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
                marginTop:moderateScaleVertical(400)

             
              }}
              onPress={cancel}
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