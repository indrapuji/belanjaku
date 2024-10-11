import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import InputBox from '@components/InputBox';
import DatePicker from 'react-native-date-picker';

const RegisterScreen = () => {
  const [value, setValue] = useState({
    name: '',
    gender: '',
    dob: '',
    phone: 0,
    username: '',
    password: '',
  });
  const [date, setDate] = useState(new Date('2021-11-10'));
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <InputBox
            placeholder={'Enter Your Name'}
            autoCapitalize={'words'}
            onChangeText={text => setValue({...value, name: text})}
            value={value.name}
          />

          <InputBox
            placeholder={'Enter Your Phone'}
            autoCapitalize={'words'}
            onChangeText={text => setValue({...value, name: text})}
            value={value.name}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <View style={styles.inputSize}>
              <Text>{date.toString()}</Text>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
