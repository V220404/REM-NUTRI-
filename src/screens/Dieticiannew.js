import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity , Picker } from 'react-native';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

const App = () => {

  const bookAppointment = () => {
    console.log('Button pressed');
  };

  return (
    <SafeAreaView>
      <View>
        <View style={{ flexDirection: 'row', top: moderateScaleVertical(32), justifyContent: 'space-between', paddingTop: moderateScaleVertical(8), paddingRight: moderateScale(16), paddingBottom: moderateScaleVertical(8), paddingLeft: moderateScale(16) }}>
          <View style={{ gap: moderateScale(8), flexDirection: 'row', width: moderateScale(92), height: moderateScaleVertical(30) }}>
            <Image source={require('/Users/varunsankhe/Desktop/DemoProject/assests/Ellipse 7.png')} style={{ width: moderateScale(30), height: moderateScaleVertical(30) }} />
            <Text style={{ fontWeight: '400', fontSize: moderateScale(16), lineHeight: moderateScaleVertical(21), color: '#000000' }}>
              Hi Sam!
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={require('/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-menu-dots-vertical.png')} style={{ width: moderateScale(16), height: moderateScaleVertical(20.01), gap: moderateScale(3), right: moderateScale(7) }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: moderateScale(295), height: moderateScaleVertical(390), top: moderateScaleVertical(205), left: moderateScale(82), gap: moderateScaleVertical(24) }}>
          <View style={{ width: moderateScale(262), height: moderateScaleVertical(63) }}>
            <Text style={{
              fontFamily: 'Hanken Grotesk',
              fontWeight: '500',
              fontSize: moderateScale(16),
              lineHeight: moderateScaleVertical(20.85),
              letterSpacing: moderateScale(1),
              color: '#3D3D3D',
              textAlign: 'center',
            }}>
              There are no appointments for registered number, Book a new appointment to continue
            </Text>
          </View>
          <View>
            <Image source={require('/Users/varunsankhe/Desktop/DemoProject/assests/Online doctor consultation.png')} style={{ width: moderateScale(295), height: moderateScaleVertical(242) }} />
          </View>

          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: moderateScale(20),
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
              onPress={bookAppointment}
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
      </View>
    </SafeAreaView>
  );
};

export default App;
