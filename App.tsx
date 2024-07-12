import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import DropDownPicker from 'react-native-dropdown-picker';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

const App = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [showPicker, setShowPicker] = useState(false);


// const item [

//   {label : "Dr. Raghu Nanda" , value :"raghu nanda"}
// ]

  return (
    <SafeAreaView>
    <View>


    <View style={{flexDirection:'row' ,top:32 , justifyContent:'space-between' , paddingTop:8 , paddingRight:16 , paddingBottom:8 , paddingLeft:16 , height:46  }}>
  <View style={{gap:8 ,flexDirection:'row', width:moderateScale(92) , height:moderateScaleVertical(30)}}>
  <Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/Ellipse 7.png'}} style={{width:moderateScale(30), height:moderateScaleVertical(30)}}/>
<Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 21, color: '#000000' ,  }}>
Hi Sam!
          </Text>
  </View>
<View>
<TouchableOpacity>
            <Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-menu-dots-vertical.png'}} style={{width: moderateScale(16) , height:moderateScaleVertical(20.01) , gap:3 , right: 7}}/>
          </TouchableOpacity>
</View>    
 </View>

{/* View Change */}


<View style={{width:moderateScale(344) , height:moderateScaleVertical(133) , top:66 , left:8 , backgroundColor:'#FFF7ED' , borderRadius:6 , alignSelf:'center' }}>
  <View style={{ width:moderateScale(169) , height:moderateScaleVertical(18) , left:24, top:12}}>
  <Text style={{fontFamily: 'Hanken Grotesk',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 18.24, color:'#000000'  }} >Upcoming Appointment</Text>

  </View>
  <View style={{flexDirection:'row', top:40 , left:20 , gap:20 }}>
<View style={{flexDirection:'column' , width:86.81 , height:33.93 ,gap:5 }}>
<Text style={{fontFamily: 'Hanken Grotesk',
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 16.24,}}>12:00 - 12:40</Text>
        <Text style={{fontFamily: 'Hanken Grotesk',
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 16.24}}>
        Today
        </Text>
</View>
<View style={{ rotation:-90 , borderWidth:1 , borderColor:'#BEBEBE' , height:51.65 , left:'20%'}}>
</View>

<View style={{flexDirection:'column' , width:189 , height:40 , gap:4}}>
<Text style={{fontFamily:'Hanken Grotesk' , fontWeight:600 , fontSize:14 ,lineHeight:18.24 , letterSpacing:0.1}}>Dr. Arjun Yasdh </Text>
<Text style={{fontFamily:'Hanken Grotesk' , fontWeight:600 , fontSize:10 ,lineHeight:18.24 , letterSpacing:0.1}}>Lorem Ipsum dolor sit lorema</Text>
</View>
  </View>
  <View style={{}}>
    <Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/desk calendar.png'}} style={{width:100 , height:61  , left:214}}/>
  </View>
  <View style={{backgroundColor:'#FCB44B' , width:344 , height:33 , borderBottomLeftRadius:6 , borderBottomRightRadius:6}}>
    <Text style={{fontSize:12 , alignContent:'center' , justifyContent:'center' , alignSelf:'center' , top:7 }}>https:/loipsuraweklnmeetingumakji.googlemeet.com</Text>


  </View>
</View>


{/* View Change */}

<View style={{gap:16 , top:145}}>
  <View style={{flexDirection:'row'}}>
    <Text style={{fontFamily:'Hanken Grotesk' , fontWeight:500 , fontSize:18, lineHeight:20.85 , left:30}}>Next Appointment</Text>
    <View><Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-angle-small-down.png'}} style={{width:30.41 , height:30.29 , left:200}}/></View>
    
  </View>

<View style={{borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 0,}}>

</View>


<View style={{flexDirection:'row'}}>
    <Text style={{fontFamily:'Hanken Grotesk' , fontWeight:500 , fontSize:18, lineHeight:20.85 , left:30}}>Previous Appointment</Text>
    <View>
      
      
      <TouchableOpacity>

      <Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-angle-small-down.png'}} style={{width:30.41 , height:30.29 , left:170}}/>

      </TouchableOpacity>
      {/* <DropDownPicker/> */}
   
      </View>


    
  </View>


<View>

</View>




  <View style={{borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 0,}}>

</View>




</View>


    </View>
    </SafeAreaView>
  )
}




export default App
