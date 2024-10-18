import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';

// Component List
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
        <View style={styles.inputContainer}>
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
          />
          <View style={styles.registerContainer}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerArea}>Register</Text>
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
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  PoppinsBold: {
    fontFamily: 'Poppins-Medium',
  },
  registerContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  registerArea: {
    marginLeft: 5,
    color: '#6439FF',
  },
});
