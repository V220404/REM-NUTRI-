import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { moderateScale, moderateScaleVertical } from './src/styles/responsiveSize';
import { AirbnbRating } from 'react-native-ratings';

const MyComponent = () => {
  
  // Define the renderDieticianProfile function
  const renderDieticianProfile = (name, specialization) => {
    return (
      <View style={{ flexDirection: 'row', width: moderateScale(328), height: moderateScaleVertical(132), borderWidth: 0.8, borderRadius: 12, alignSelf: 'center', marginTop: moderateScaleVertical(20) }}>
        <View>
          <Image
            source={{ uri: '/Users/varunsankhe/Desktop/DemoProject/assests/Rectangle 1325.png' }}
            style={{ width: moderateScale(100), height: moderateScaleVertical(100), borderRadius: 12, borderWidth: 0.4, marginTop: moderateScaleVertical(15), marginLeft: moderateScale(20) }}
          />
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: moderateScale(15) }}>
          <Text>{name}</Text>
          <Text>{specialization}</Text>
          <AirbnbRating showRating={false} size={20} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Fixed header with back button and search */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: moderateScale(20) }}>
        <Image
          source={{ uri: '/Users/varunsankhe/Desktop/DemoProject/assests/fi-ss-arrow-left.png' }}
          style={{ width: moderateScale(35), height: moderateScaleVertical(30) }}
        />
        <Text style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: moderateScale(16), lineHeight: moderateScaleVertical(20), marginLeft: moderateScale(10) }}>
          Booking Appointment
        </Text>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Image
            source={{ uri: '/Users/varunsankhe/Desktop/DemoProject/assests/Magnifierglass.png' }}
            style={{ width: moderateScale(20.02), height: moderateScaleVertical(20.93), marginLeft: moderateScale(10) }}
          />
        </TouchableOpacity>
      </View>

      {/* ScrollView for the scrollable content */}
      <ScrollView contentContainerStyle={{ padding: moderateScale(20) }}>
        {/* Select a Dietician */}
        <View style={{ marginTop: moderateScaleVertical(20) }}>
          <Text style={{ fontWeight: '400', fontSize: moderateScale(16), lineHeight: moderateScaleVertical(20.85), fontFamily: 'Hanken Grotesk' }}>
            Select a Dietician to book Appointment
          </Text>
        </View>

        {/* Dietician profiles */}
        {renderDieticianProfile('Dr. Maya Lorem', 'Lorem Health Specialist')}
        {renderDieticianProfile('Dr. John Doe', 'Lorem Health Specialist')}
        {renderDieticianProfile('Dr. Anna Smith', 'Lorem Health Specialist')}
        {renderDieticianProfile('Dr. Michael Brown', 'Lorem Health Specialist')}
        {renderDieticianProfile('Dr. Emily Wilson', 'Lorem Health Specialist')}
        {renderDieticianProfile('Dr. Robert Johnson', 'Lorem Health Specialisth')}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyComponent;
