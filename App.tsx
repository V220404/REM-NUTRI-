import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

const App = () => {

  const bookAppointment1 = () => {
    console.log('Button pressed');
  };

  return (
    <SafeAreaView>
      <View>
        <View style={{ flexDirection: 'row', top: moderateScaleVertical(32), justifyContent: 'space-between', paddingTop: moderateScaleVertical(8), paddingRight: moderateScale(16), paddingBottom: moderateScaleVertical(8), paddingLeft: moderateScale(16) }}>
          <View style={{ gap: moderateScale(8), flexDirection: 'row', width: moderateScale(92), height: moderateScaleVertical(30) }}>
            <Image source={{ uri: '/Users/varunsankhe/Desktop/DemoProject/assests/Ellipse 7.png' }} style={{ width: moderateScale(30), height: moderateScaleVertical(30) }} />
            <Text style={{ fontWeight: '400', fontSize: moderateScale(16), lineHeight: moderateScaleVertical(21), color: '#000000' }}>
              Hi Sam!
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={{ uri: '/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-menu-dots-vertical.png' }} style={{ width: moderateScale(16), height: moderateScaleVertical(20.01), gap: moderateScale(3), right: moderateScale(7) }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* View Change */}
        <View style={{ width: moderateScale(344), height: moderateScaleVertical(133), top: moderateScaleVertical(66), left: moderateScale(8), backgroundColor: '#FFF7ED', borderRadius: moderateScale(6), alignSelf: 'center' }}>
          <View style={{ width: moderateScale(169), height: moderateScaleVertical(18), left: moderateScale(24), top: moderateScaleVertical(12) }}>
            <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '600', fontSize: moderateScale(14), lineHeight: moderateScaleVertical(18.24), color: '#000000' }}>Upcoming Appointment</Text>
          </View>
          <View style={{ flexDirection: 'row', top: moderateScaleVertical(40), left: moderateScale(20), gap: moderateScale(20) }}>
            <View style={{ flexDirection: 'column', width: moderateScale(86.81), height: moderateScaleVertical(33.93), gap: moderateScaleVertical(5) }}>
              <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: moderateScale(13), lineHeight: moderateScaleVertical(16.24) }}>12:00 - 12:40</Text>
              <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: moderateScale(13), lineHeight: moderateScaleVertical(16.24) }}>Today</Text>
            </View>
            <View style={{ rotation: -90, borderWidth: 1, borderColor: '#BEBEBE', height: moderateScaleVertical(51.65) }}></View>
            <View style={{ flexDirection: 'column', width: moderateScale(189), height: moderateScaleVertical(40), gap: moderateScaleVertical(4) }}>
              <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '600', fontSize: moderateScale(14), lineHeight: moderateScaleVertical(18.24), letterSpacing: moderateScale(0.1) }}>Dr. Arjun Yasdh </Text>
              <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '600', fontSize: moderateScale(10), lineHeight: moderateScaleVertical(18.24), letterSpacing: moderateScale(0.1) }}>Lorem Ipsum dolor sit lorema</Text>
            </View>
          </View>
          <View style={{}}>
            <Image source={{ uri: '/Users/varunsankhe/Desktop/DemoProject/assests/desk calendar.png' }} style={{ width: moderateScale(100), height: moderateScaleVertical(61), left: moderateScale(214) }} />
          </View>
          <View style={{ backgroundColor: '#FCB44B', width: moderateScale(344), height: moderateScaleVertical(33), borderBottomLeftRadius: moderateScale(6), borderBottomRightRadius: moderateScale(6) }}>
            <Text style={{ fontSize: moderateScale(12), alignContent: 'center', justifyContent: 'center', alignSelf: 'center', top: moderateScaleVertical(7) }}>https:/loipsuraweklnmeetingumakji.googlemeet.com</Text>
          </View>
        </View>

        {/* View Change */}
        <View style={{ gap: moderateScaleVertical(16), top: moderateScaleVertical(145) }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: moderateScale(18), lineHeight: moderateScaleVertical(20.85), left: moderateScale(30) }}>Next Appointment</Text>
            <View><Image source={{ uri: '/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-angle-small-down.png' }} style={{ width: moderateScale(30.41), height: moderateScaleVertical(30.29), left: moderateScale(200) }} /></View>
          </View>

          <View style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: moderateScale(1), width: '100%', marginVertical: 0 }}></View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: moderateScale(18), lineHeight: moderateScaleVertical(20.85), left: moderateScale(30) }}>Previous Appointment</Text>
            <View>
              <TouchableOpacity>
                <Image source={{ uri: '/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-angle-small-down.png' }} style={{ width: moderateScale(30.41), height: moderateScaleVertical(30.29), left: moderateScale(170) }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: moderateScale(1), width: '100%', marginVertical: 0 }}></View>
        </View>


        <View style={{
        
          top:moderateScaleVertical(420),
          left:moderateScale(80)

         
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


        
      </View>



    </SafeAreaView>
  );
};

export default App;
