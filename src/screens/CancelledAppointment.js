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
Reason for Cancellation
  </Text>
</View>
<View style={{marginTop:moderateScaleVertical(15)}}>
  <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis quia iure magnam cumque velit numquam libero. Ea dolorem magnam doloremque quia animi illum nobis eum voluptatem minima pariatur! Non, maiores.</Text>
</View>
</View>












      </View>

    </SafeAreaView>
    
  )
}

export default App