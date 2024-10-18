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
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="chevron-back" color="black" size={20} />
        </View>
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
    position: 'absolute',
    left: 16,
    alignItems: 'center',
  },
  textFormat: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
    color: 'gray',
  },
});
