import { View, Text, SafeAreaView , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

const App = () => {
  return (
    <SafeAreaView>
<View>

<View style={{flexDirection:'row' , gap:moderateScale(40)}}>

  <TouchableOpacity>
    
      <Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-arrow-left.png'}} style={{width:moderateScale(30), height:moderateScaleVertical(30) , left:20}}/>
    </TouchableOpacity>

<Text style={{fontFamily:'Roboto' , fontWeight:500 , fontSize:16 , lineHeight:20 , top:5 }}>
Book Appointment 
</Text>
</View>

{/* View Change  */}


<View style={{flexDirection:'column' , top:moderateScaleVertical(54) , left: moderateScale(16) , gap:10}}>

<View style={{flexDirection:'row' , gap:100 }}>
<View style={{marginLeft:moderateScale(18)}}>
  <Text style={{fontWeight:'300' , fontSize:16}}>Program Name </Text>
</View>

<View style={{alignSelf:'flex-end'}}>
  <Text >Health Recovery</Text>
</View>
</View>
<View style={{ borderBottomWidth: 0.4, borderBottomColor: 'black' , marginTop:moderateScaleVertical(12) , width:moderateScale(350) }} />




<View style={{flexDirection:'row' , gap:moderateScale(100) }}>
<View style={{marginLeft:moderateScale(20)}}>
  <Text style={{fontWeight:'300' , fontSize:16}}>Price </Text>
</View>

<View style={{alignSelf:'flex-end' , marginLeft:moderateScale(100)}}>
  <Text >299$</Text>
</View>
</View>

<View style={{ borderBottomWidth: 0.4, borderBottomColor: 'black' , marginTop:moderateScaleVertical(12) , width:moderateScale(350) }} />



<View style={{flexDirection:'row' , gap:moderateScale(110) }}>
<View style={{marginLeft:moderateScale(20)}}>
  <Text style={{fontWeight:'300' , fontSize:16}}>GST </Text>
</View>

<View style={{alignSelf:'flex-end' , marginLeft:moderateScale(100)}}>
  <Text >10$</Text>
</View>
</View>
<View style={{ borderBottomWidth: 0.4, borderBottomColor: 'black' , marginTop:moderateScaleVertical(12) , width:moderateScale(350) }} />





<View style={{flexDirection:'row' , gap:moderateScale(100) }}>
<View style={{marginLeft:moderateScale(20)}}>
  <Text style={{fontWeight:'600' , fontSize:20}}>Total </Text>
</View>

<View style={{alignSelf:'flex-end' , marginLeft:moderateScale(90)}}>
  <Text >308$</Text>
</View>
</View>
<View style={{ borderBottomWidth: 0.4, borderBottomColor: 'black' , marginTop:moderateScaleVertical(12) , width:moderateScale(350) }} />


</View>

{/* View Change */}




</View>
    </SafeAreaView>
   
  )
}

export default App