
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {


  const bookAppointment = () => {

    console.log('Button pressed');
  };


  return (
    <SafeAreaView>
    <View >
 <View style={{flexDirection:'row' ,top:32 , justifyContent:'space-between' , paddingTop:8 , paddingRight:16 , paddingBottom:8 , paddingLeft:16 }}>
  <View style={{gap:8 ,flexDirection:'row', width:92 , height:30}}>
  <Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/Ellipse 7.png'}} style={{width:30, height:30}}/>
<Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 21, color: '#000000' ,  }}>
Hi Sam!
          </Text>
  </View>
<View>
<TouchableOpacity>
            <Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-menu-dots-vertical.png'}} style={{width: 16 , height:20.01 , gap:3 , right: 7}}/>
          </TouchableOpacity>
</View>    
 </View>


<View style={{width:295 , height:390 , top:205 , left:82 , gap:24}}>
<View style={{width:262 , height:63 ,}}>

  <Text style={{ 
        fontFamily: 'Hanken Grotesk',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20.85,
        letterSpacing: 1,
        color: '#3D3D3D',
        textAlign: 'center', 
      }}>
        There are no appointments for registered number, Book a new appointment to continue
      </Text>
</View>
<View>
  <Image source={{uri:'/Users/varunsankhe/Desktop/DemoProject/assests/Online doctor consultation.png'}} style={{width:295 , height:242}}/>
</View>


<View style={{ 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    }}>
      <TouchableOpacity
        style={{
          width: 221,
          height: 57,
          borderRadius: 6,
          backgroundColor: '#5A3A89',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
          elevation: 5, 
          paddingVertical: 8,
          paddingHorizontal: 24,
          marginBottom: 20,
        }}
        onPress={bookAppointment}
      >
        <Text style={{
          color: '#ffffff',
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 21,
          width: 190, // Adjust text width if necessary
          textAlign: 'center', // Align text horizontally centered
        }}>
          Book New Appointment
        </Text>
      </TouchableOpacity>
    </View>
</View>





    </View>
    </SafeAreaView>
  )
}

export default App