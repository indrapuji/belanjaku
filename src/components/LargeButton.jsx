import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const LargeButton = ({actionButton, buttonText, disabled}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.bottonSize,
        backgroundColor: disabled ? 'grey' : '#6439FF',
      }}
      onPress={actionButton}>
      <Text style={styles.textButton}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default LargeButton;

const styles = StyleSheet.create({
  bottonSize: {
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
});
