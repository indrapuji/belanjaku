import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LargeButton from '@components/LargeButton';
import InputBox from '@components/InputBox';

const LoginScreen = ({navigation}) => {
  const {width: SCREENWIDTH, height: SCREENHEIGHT} = useWindowDimensions();
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
    navigation.navigate('Explore');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', flex: 1}}>
        <Image
          source={require('@assets/image/bk.png')}
          resizeMode="contain"
          style={{
            width: SCREENWIDTH / 2,
            height: SCREENWIDTH / 1.5,
            marginTop: SCREENWIDTH / 2.5,
          }}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
          <InputBox
            title={'Username'}
            onChangeText={text => setValue({...value, username: text})}
            value={value.username}
            placeholder="Enter Your Username"
            autoCapitalize="none"
          />
          <InputBox
            title={'Password'}
            onChangeText={text => setValue({...value, password: text})}
            value={value.password}
            placeholder="Enter Your Password"
            autoCapitalize="none"
            secureTextEntry={!show}
            onPress={changeShow}
            onShow={'eye'}
            onHide={'eye-off'}
            show={show}
            icon
          />

          <LargeButton
            actionButton={() => loginHanddle(value.username, value.password)}
            buttonText={'Login'}
            style={{marginBottom: 20}}
          />
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{marginLeft: 5, color: '#6439FF'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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
