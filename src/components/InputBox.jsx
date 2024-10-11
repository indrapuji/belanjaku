import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const InputBox = ({
  onChangeText,
  value,
  placeholder,
  autoCapitalize,
  secureTextEntry,
  keyboardType,
  onPress,
  onShow,
  onHide,
  icon,
  show,
}) => {
  const {width: SCREENWIDTH, height: SCREENHEIGHT} = useWindowDimensions();
  return (
    <View style={{position: 'relative'}}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.inputSize, {width: SCREENWIDTH - 50}]}
      />
      {icon && (
        <TouchableOpacity
          style={{position: 'absolute', top: 15, right: 15}}
          onPress={onPress}>
          <Icon name={!show ? onHide : onShow} size={20} color={'#6439FF'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputSize: {
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 50,
    color: '#6439FF',
    borderWidth: 1,
    borderColor: 'gray',
  },
});
