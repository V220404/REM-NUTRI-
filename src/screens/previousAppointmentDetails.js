

import { View, Text, SafeAreaView , Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';
const App = () => {
  return (
    <SafeAreaView>
    <View>

<View style={{flexDirection:'row' , gap:moderateScale(40)}}>
<Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-arrow-left.png'}} style={{width:moderateScale(35), height:moderateScaleVertical(30) , left:20}}/>

<Text style={{fontFamily:'Roboto' , fontWeight:500 , fontSize:16 , lineHeight:20 , top:5 }}>
Appointment Details
</Text>
</View>

<View style ={{flexDirection:'column' , left:moderateScale(16) ,top :40 , marginLeft:20}}>

<View >
<View style={{gap:moderateScale(8) , flexDirection:'row'}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
    Doctor : 
  </Text>
  <Text style={{fontWeight:400 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>Raghu Nanda</Text>
</View>

{/* View Chnage */}

<View style={{marginTop:30}}>
<View style={{gap:moderateScale(8) , flexDirection:'row'}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
  Date :  
  </Text>
  <Text style={{fontWeight:400 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>12 July</Text>
</View>
</View>



{/* View Change */}



 
<View style={{marginTop:30}}>
<View style={{gap:moderateScale(8) , flexDirection:'row'}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
 Time : 
  </Text>
  <Text style={{fontWeight:400 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>12 12:30 PM - 01:30 PM</Text>
</View>
</View>



{/* View Change */}


<View style={{marginTop:30}}>
<View style={{gap:moderateScale(8) , flexDirection:'row'}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
 Type : 
  </Text>
  <Text style={{fontWeight:400 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>Mental health</Text>
</View>
</View>

{/* View Change */}



<View style={{marginTop:30}}>
<View style={{gap:moderateScale(8) , flexDirection:'row'}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>
 Notes : 
  </Text></View>
  <Text style={{fontWeight:400 , fontSize:14 , lineHeight:18.24 , fontFamily:'Hanken Grotesk' , textAlign:'center' , marginRight:30}}>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisil dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </Text>

</View>

<View >
  <View style={{top:35}}>
  <Text style={{fontWeight:600 , fontSize:18 , lineHeight:18.24 , fontFamily:'Hanken Grotesk'}}>Medication</Text>
  </View>


  <View style={{flexDirection:'row' , top:30}}>
<View>
  <Text style={{fontSize:40}}> .</Text>
</View>
<View style={{top:moderateScaleVertical(25) , left:10}}>
  <Text>ABCCDEFGH
    </Text>
</View>
  </View>


  <View style={{flexDirection:'row' , top:15}}>
<View>
  <Text style={{fontSize:40}}> .</Text>
</View>
<View style={{top:moderateScaleVertical(25) , left:10}}>
  <Text>ABCCDEFGH
    </Text>
</View>
  </View>


  <View style={{flexDirection:'row' }}>
<View>
  <Text style={{fontSize:40}}> .</Text>
</View>
<View style={{top:moderateScaleVertical(25) , left:10}}>
  <Text>ABCCDEFGH
    </Text>
</View>
  </View>


  
</View>


</View>








</View>

      
    </View>
    </SafeAreaView>
  )
}

export default App
