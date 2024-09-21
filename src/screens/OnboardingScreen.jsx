import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7695FF',
  },
});
