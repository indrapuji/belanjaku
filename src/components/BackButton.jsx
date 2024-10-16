import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const BackButton = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.marginPosition}>
      <TouchableOpacity
        style={styles.arrowPosition}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" color="gray" size={30} />
        <Text style={styles.textFormat}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  marginPosition: {
    marginVertical: 50,
  },
  arrowPosition: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 16,
  },
  textFormat: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 5,
    color: 'gray',
  },
});
