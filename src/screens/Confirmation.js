import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

import Icon from 'react-native-vector-icons/Zocial';
import Checkbox from 'expo-checkbox';


const App = () => {



  const [isChecked, setIsChecked] = useState(false);
  const [isnotify, setIsnotify] = useState(false);
 

  const confirm = () => {
    console.log('Button pressed');
  };

  return (
    <SafeAreaView>
  <View>

  <View style={{flexDirection:'row' , gap:moderateScale(40)}}>
<Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-arrow-left.png'}} style={{width:moderateScale(35), height:moderateScaleVertical(30) , left:20}}/>

<Text style={{fontFamily:'Roboto' , fontWeight:500 , fontSize:16 , lineHeight:20 , top:5 }}>
Appointment Details
</Text>
</View>


<View style={{width:moderateScale(317) , height:moderateScaleVertical(243), top:moderateScaleVertical(70) , alignSelf:'center', borderWidth:0.8  ,gap:22 , flexDirection:'column'}}>
  <View style={{alignSelf:'center' , marginTop:moderateScaleVertical(20)}}>
    <Text style={{fontWeight:600 , fontSize:16 , lineHeight:20.85}}>You booked a 1:1 Session (45 Min)</Text>
  </View>


<View style={{flexDirection:'row' , gap:10 , alignSelf:'center'}}>

<View>
  <Image style={{width:moderateScale(16.45) , height:moderateScaleVertical(16.42)}} source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-bs-clock.png'}}/>
</View>
<View>
  <Text>09:00 AM - 09:45 AM</Text>
</View>
</View>



<View style={{flexDirection:'row' , gap:10 , alignSelf:'center'}}>

<View>
  <Image style={{width:moderateScale(16.45) , height:moderateScaleVertical(16.42)}} source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/Vector.png'}}/>
</View>
<View>
  <Text>Thursday, 21 April, 2024</Text>
</View>
</View>

<View style={{flexDirection:'row' , gap:10 , alignSelf:'center'}}>

<View>
  <Image style={{width:moderateScale(16.45) , height:moderateScaleVertical(18.42)}} source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/Vector copy.png'}}/>
</View>
<View>
  <Text style={{fontWeight:500}}> Google meet</Text>
</View>
</View>


{/* CheckBox View */}
<View style={{gap:10}}>
<View style={{flexDirection:'row' , alignSelf:'center' , gap:10}}>

<Checkbox value={isChecked}  onValueChange={setIsChecked} style={{width:moderateScale(18) , height:moderateScaleVertical(18)}} />

<Text style={{fontSize:14}}>Add to Google Calender</Text>

</View>

<View style={{flexDirection:'row' , alignSelf:'center' , gap:10}}>

<Checkbox value={isnotify}  onValueChange={setIsnotify} style={{width:moderateScale(18) , height:moderateScaleVertical(18)}} />

<Text style={{fontSize:14}}>Add to Google Calender</Text>

</View>
</View>

</View>

<View style={{marginLeft:moderateScale(20) , marginTop:moderateScaleVertical(100)}}>
  <Text style={{fontWeight:600 , fontSize:18}}>Notes before Session</Text>
  <View style={{marginTop:moderateScaleVertical(15)}}>
    <Text style={{fontSize:18 , fontWeight:400 , lineHeight:18}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas beatae aut architecto dolorem culpa modi, ullam dolor cum ex a reiciendis, rem debitis repellendus deserunt assumenda amet illum laudantium magni.</Text>
  </View>
</View>


<View style={{
            flex: 1,
          top:moderateScaleVertical(120),
          alignSelf:'center'

          }}>
            <TouchableOpacity
              style={{
                width: moderateScale(211),
                height: moderateScaleVertical(47),
                borderRadius: moderateScale(6),
                backgroundColor: '#5A3A89',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: moderateScale(4),
                elevation: 5,
                paddingVertical: moderateScaleVertical(8),
                paddingHorizontal: moderateScale(24),
                marginBottom: moderateScaleVertical(20),
              }}
              onPress={confirm}
            >
              <Text style={{
                color: '#ffffff',
                fontSize: moderateScale(16),
                fontWeight: '500',
                lineHeight: moderateScaleVertical(21),
                width: moderateScale(190), // Adjust text width if necessary
                textAlign: 'center', // Align text horizontally centered
              }}>
               Done
              </Text>
            </TouchableOpacity>
          </View>







  </View>
    </SafeAreaView>
   
  )
}

export default App