import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

// Import moderateScale and moderateScaleVertical from your responsiveSize module
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';

const App = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  // Function to toggle the visibility of the Picker
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <SafeAreaView>
      <View>
        <View style={{ flexDirection: 'row', top: moderateScaleVertical(32), justifyContent: 'space-between', paddingTop: moderateScaleVertical(8), paddingRight: moderateScale(16), paddingBottom: moderateScaleVertical(8), paddingLeft: moderateScale(16), height: moderateScaleVertical(46) }}>
          <View style={{ flexDirection: 'row', gap: moderateScale(8), width: moderateScale(92), height: moderateScaleVertical(30) }}>
            <Image source={require('/Users/varunsankhe/Desktop/DemoProject/assests/Ellipse 7.png')} style={{ width: moderateScale(30), height: moderateScaleVertical(30) }} />
            <Text style={{ fontWeight: '400', fontSize: moderateScale(16), lineHeight: moderateScaleVertical(21), color: '#000000' }}>
              Hi Sam!
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={togglePicker}>
              <Image source={require('/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-menu-dots-vertical.png')} style={{ width: moderateScale(16), height: moderateScaleVertical(20.01), gap: moderateScale(3), right: moderateScale(7) }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming Appointment View */}
        <View style={{ width: moderateScale(344), height: moderateScaleVertical(133), top: moderateScaleVertical(66), left: moderateScale(8), backgroundColor: '#FFF7ED', borderRadius: moderateScale(6), alignSelf: 'center' }}>
          <View style={{ width: moderateScale(169), height: moderateScaleVertical(18), left: moderateScale(24), top: moderateScaleVertical(12) }}>
            <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '600', fontSize: moderateScale(14), lineHeight: moderateScaleVertical(18.24), color: '#000000' }}>Upcoming Appointment</Text>
          </View>
          <View style={{ flexDirection: 'row', top: moderateScaleVertical(40), left: moderateScale(20), gap: moderateScale(20) }}>
            <View style={{ flexDirection: 'column', width: moderateScale(86.81), height: moderateScaleVertical(33.93), gap: moderateScaleVertical(5) }}>
              <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: moderateScale(13), lineHeight: moderateScaleVertical(16.24) }}>12:00 - 12:40</Text>
              <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: moderateScale(13), lineHeight: moderateScaleVertical(16.24) }}>Today</Text>
            </View>
            <View style={{ transform: [{ rotate: '-90deg' }], borderWidth: 1, borderColor: '#BEBEBE', height: moderateScaleVertical(51.65), left: moderateScale(20) }} />
            <View style={{ flexDirection: 'column', width: moderateScale(189), height: moderateScaleVertical(40), gap: moderateScaleVertical(4) }}>
              <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '600', fontSize: moderateScale(14), lineHeight: moderateScaleVertical(18.24), letterSpacing: moderateScale(0.1) }}>Dr. Arjun Yasdh</Text>
              <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '600', fontSize: moderateScale(10), lineHeight: moderateScaleVertical(18.24), letterSpacing: moderateScale(0.1) }}>Lorem Ipsum dolor sit lorema</Text>
            </View>
          </View>
          <View>
            <Image source={require('/Users/varunsankhe/Desktop/DemoProject/assests/desk calendar.png')} style={{ width: moderateScale(100), height: moderateScaleVertical(61), left: moderateScale(214) }} />
          </View>
          <View style={{ backgroundColor: '#FCB44B', width: moderateScale(344), height: moderateScaleVertical(33), borderBottomLeftRadius: moderateScale(6), borderBottomRightRadius: moderateScale(6) }}>
            <Text style={{ fontSize: moderateScale(12), alignSelf: 'center', top: moderateScaleVertical(7) }}>https:/loipsuraweklnmeetingumakji.googlemeet.com</Text>
          </View>
        </View>

        {/* Next and Previous Appointment Sections */}
        <View style={{ gap: moderateScaleVertical(16), top: moderateScaleVertical(145) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: moderateScale(18), lineHeight: moderateScaleVertical(20.85), left: moderateScale(30) }}>Next Appointment</Text>
            <Image source={require('/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-angle-small-down.png')} style={{ width: moderateScale(30.41), height: moderateScaleVertical(30.29), left: moderateScale(200) }} />
          </View>
          <View style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: 1, width: '100%', marginVertical: 0 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: moderateScale(18), lineHeight: moderateScaleVertical(20.85), left: moderateScale(30) }}>Previous Appointment</Text>
            <TouchableOpacity>
              <Image source={require('/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-angle-small-down.png')} style={{ width: moderateScale(30.41), height: moderateScaleVertical(30.29), left: moderateScale(170) }} />
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: '#CCCCCC', borderBottomWidth: 1, width: '100%', marginVertical: 0 }} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default App;
