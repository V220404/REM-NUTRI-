import { View, Text, Image, SafeAreaView  , FlatList, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateScaleVertical, verticalScale } from './src/styles/responsiveSize';
import { Calendar } from 'react-native-calendars';


const App = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const bookAppointment1 = () => {
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


<View style={{flexDirection:'column' }}>
<View style={{top:moderateScaleVertical(60) , left:moderateScale(16) }}>
  <Text style={{fontWeight:500 , lineHeight:20.85  }}>Select Time to Schedule Appointment </Text>
</View>

<View style={{ marginTop:moderateScaleVertical(70)}}>

<Calendar
      style={{ backgroundColor: '#FCB44B33', elevation: 5, margin: 25 }}
      hideExtraDays={true}
      onDayPress={date =>
        console.log(date)
       }
      markedDates={{
        [selectedDate]: {
          selected: true,
          selectedColor: 'blue',
          selectedTextColor: 'orange', 
        },
      }}
    />
</View>
</View>


<View style={{flexDirection:'row'}}>



<View style={{flexDirection:'column'}}>
<TouchableOpacity onPress={() => console.log('Confirm')}>
<View style={{width:moderateScale(151) , height:moderateScaleVertical(32) , borderWidth:1 , borderRadius:12 , marginLeft:moderateScale(25) , marginTop:moderateScale(15) , justifyContent:'center'}}>
<Text style={{textAlign:'center' , fontWeight:400 , fontSize:12  }}> 9:00 AM - 9:50 AM</Text>
</View></TouchableOpacity>



<TouchableOpacity onPress={() => console.log('Confirm')}>
<View style={{width:moderateScale(151) , height:moderateScaleVertical(32) , borderWidth:1 , borderRadius:12 , marginLeft:moderateScale(25) , marginTop:moderateScale(15) , justifyContent:'center'}}>
<Text style={{textAlign:'center' , fontWeight:400 , fontSize:12  }}> 10:00 AM - 10:50 AM</Text>
</View></TouchableOpacity>

<TouchableOpacity onPress={() => console.log('Confirm')}>
<View style={{width:moderateScale(151) , height:moderateScaleVertical(32) , borderWidth:1 , borderRadius:12 , marginLeft:moderateScale(25) , marginTop:moderateScale(15) , justifyContent:'center'}}>
<Text style={{textAlign:'center' , fontWeight:400 , fontSize:12  }}> 11:00 AM - 11:50 AM</Text>
</View></TouchableOpacity>



<TouchableOpacity onPress={() => console.log('Confirm')}>
<View style={{width:moderateScale(151) , height:moderateScaleVertical(32) , borderWidth:1 , borderRadius:12 , marginLeft:moderateScale(25) , marginTop:moderateScale(15) , justifyContent:'center'}}>
<Text style={{textAlign:'center' , fontWeight:400 , fontSize:12  }}> 12:00 PM- 12:50 PM</Text>
</View></TouchableOpacity>

</View>


<View style={{flexDirection:'column'}}>
<TouchableOpacity onPress={() => console.log('Confirm')}>
<View style={{width:moderateScale(151) , height:moderateScaleVertical(32) , borderWidth:1 , borderRadius:12 , marginLeft:moderateScale(25) , marginTop:moderateScale(15) , justifyContent:'center'}}>
<Text style={{textAlign:'center' , fontWeight:400 , fontSize:12  }}> 9:00 AM - 9:50 AM</Text>
</View></TouchableOpacity>



<TouchableOpacity onPress={() => console.log('Confirm')}>
<View style={{width:moderateScale(151) , height:moderateScaleVertical(32) , borderWidth:1 , borderRadius:12 , marginLeft:moderateScale(25) , marginTop:moderateScale(15) , justifyContent:'center'}}>
<Text style={{textAlign:'center' , fontWeight:400 , fontSize:12  }}> 10:00 AM - 10:50 AM</Text>
</View></TouchableOpacity>

<TouchableOpacity onPress={() => console.log('Confirm')}>
<View style={{width:moderateScale(151) , height:moderateScaleVertical(32) , borderWidth:1 , borderRadius:12 , marginLeft:moderateScale(25) , marginTop:moderateScale(15) , justifyContent:'center'}}>
<Text style={{textAlign:'center' , fontWeight:400 , fontSize:12  }}> 11:00 AM - 11:50 AM</Text>
</View></TouchableOpacity>



<TouchableOpacity onPress={() => console.log('Confirm')}>
<View style={{width:moderateScale(151) , height:moderateScaleVertical(32) , borderWidth:1 , borderRadius:12 , marginLeft:moderateScale(25) , marginTop:moderateScale(15) , justifyContent:'center'}}>
<Text style={{textAlign:'center' , fontWeight:400 , fontSize:12  }}> 12:00 PM- 12:50 PM</Text>
</View></TouchableOpacity>

</View>

</View>



<View style={{
            flex: 1,
          top:moderateScaleVertical(60),
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
               Confirm
              </Text>
            </TouchableOpacity>
          </View>






    </View>
    </SafeAreaView>
  
  )
}

export default App