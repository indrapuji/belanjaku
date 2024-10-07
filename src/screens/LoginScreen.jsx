import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LargeButton from '@components/LargeButton';

const LoginScreen = () => {
  const {width: SCREENWIDTH} = useWindowDimensions();
  const [value, setValue] = useState({
    username: '',
    password: '',
  });
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };

  const loginHanddle = async (username, password) => {
    console.log(username, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, marginBottom: 50}}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Image
            source={require('@assets/image/bk.png')}
            resizeMode="contain"
            style={{width: SCREENWIDTH / 2}}
          />
        </View>
        <TextInput
          onChangeText={text => setValue({...value, username: text})}
          value={value.username}
          placeholder="Enter Your username"
          autoCapitalize="none"
          style={[styles.inputSize, {width: SCREENWIDTH - 50}]}
        />
        <View style={{position: 'relative'}}>
          <TextInput
            onChangeText={text => setValue({...value, password: text})}
            value={value.password}
            placeholder="Enter Your password"
            autoCapitalize="none"
            secureTextEntry={!show}
            style={[styles.inputSize, {width: SCREENWIDTH - 50}]}
          />
          <TouchableOpacity
            style={{position: 'absolute', top: 15, right: 15}}
            onPress={changeShow}>
            <Icon
              name={!show ? 'eye-off' : 'eye'}
              size={20}
              color={'#6439FF'}
            />
          </TouchableOpacity>
        </View>
        <LargeButton
          actionButton={() => loginHanddle(value.username, value.password)}
          buttonText={'Login'}
          style={{marginBottom: 20}}
        />
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={{marginLeft: 5, color: '#6439FF'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PoppinsBold: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
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
