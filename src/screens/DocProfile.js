import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical, verticalScale } from './src/styles/responsiveSize';
import { AirbnbRating } from 'react-native-ratings';

const App = () => {

  const bookAppointment1 = () => {
    console.log('Button pressed');
  };
  return (
  
    <SafeAreaView>

<View style={{flexDirection:'row' , gap:moderateScale(40) , top:moderateScaleVertical(20)}}>
<Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-arrow-left.png'}} style={{width:moderateScale(35), height:moderateScaleVertical(30) , left:20}}/>

<Text style={{fontFamily:'Roboto' , fontWeight:500 , fontSize:16 , lineHeight:20 , top:5 }}>
Dietician Details
</Text>
</View>

<View style={{flexDirection:'row'}}>

<View style={{top:moderateScaleVertical(70) , left:moderateScale(16) , borderRadius:12 , marginLeft:moderateScale(20)}}>
  <Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/Rectangle 1325.png'}} style={{width:moderateScale(124) , height:moderateScaleVertical(124)}}/>
</View>

<View style={{ marginTop:moderateScaleVertical(80) , marginLeft:moderateScale(30) , gap:10}}> 
<View>
<Text style={{fontWeight:600 , fontSize:16}}>Lorem  health Specialist</Text>
</View>
<View>
  <Text style={{fontWeight:400 , fontSize:14 }}> Key Achievement 1</Text>
</View>
<View>
  <Text style={{fontWeight:400  , fontSize:14}}> Key Achievement 2</Text>
</View>

<View>
  <AirbnbRating showRating={false} size={30}/>
</View>
</View>

</View>



<View style={{flexDirection:'column' , gap:20}}>
  <View style={{marginTop:moderateScaleVertical(50)}}>
<Text style={{fontWeight:400 , fontSize:16 , marginLeft:verticalScale(25) , lineHeight:20.85 }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, in laboriosam. Numquam dolorum necessitatibus error architecto possimus ex amet rem eum! Veritatis cupiditate velit esse quibusdam quo, eligendi architecto dolore.</Text>
  </View>

  <View >
<Text style={{fontWeight:400 , fontSize:16 , marginLeft:verticalScale(25) , lineHeight:20.85 }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, in laboriosam. Numquam </Text>
  </View>
</View>

<View style={{
            flex: 1,
          top:moderateScaleVertical(280),
          alignSelf:'center'

          }}>
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
                paddingVertical: moderateScaleVertical(8),
                paddingHorizontal: moderateScale(24),
                marginBottom: moderateScaleVertical(20),
              }}
              onPress={bookAppointment1}
            >
              <Text style={{
                color: '#ffffff',
                fontSize: moderateScale(16),
                fontWeight: '500',
                lineHeight: moderateScaleVertical(21),
                width: moderateScale(190), // Adjust text width if necessary
                textAlign: 'center', // Align text horizontally centered
              }}>
                Book New Appointment
              </Text>
            </TouchableOpacity>
          </View>

    </SafeAreaView>
  )
}

export default App