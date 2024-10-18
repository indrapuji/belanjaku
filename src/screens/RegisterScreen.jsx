import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Component List
import InputBox from '@components/InputBox';
import LargeButton from '@components/LargeButton';

const RegisterScreen = ({navigation}) => {
  const {width: SCREENWIDTH, height: SCREENHEIGHT} = useWindowDimensions();
  const [value, setValue] = useState({
    name: '',
    gender: '',
    dob: '',
    phone: 0,
    username: '',
    password: '',
  });

  const [validate, setValidate] = useState('');
  const [date, setDate] = useState(new Date('2021-11-10'));
  const [open, setOpen] = useState(false);

  const gender = [{title: 'Male'}, {title: 'Female'}];

  const regHanddle = async (pass, val) => {
    // console.log(pass, val);
    console.log(value.gender);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('@assets/image/bk.png')}
            resizeMode="contain"
            style={{
              width: SCREENWIDTH / 2,
              height: SCREENWIDTH / 1.5,
              marginVertical: 30,
            }}
          />
        </View>
        <InputBox
          title={'Fullname'}
          placeholder={'Enter Your Name'}
          autoCapitalize={'words'}
          onChangeText={text => setValue({...value, name: text})}
          value={value.name}
        />
        <View style={{marginBottom: 5, marginLeft: 5}}>
          <Text>Gender</Text>
        </View>
        <SelectDropdown
          data={gender}
          onSelect={selectedItem => {
            console.log(selectedItem);
            setValue({...value, gender: selectedItem.title});
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || 'Select your gender'}
                </Text>
                <Icon
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  style={styles.dropdownButtonArrowStyle}
                />
              </View>
            );
          }}
          renderItem={(item, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {backgroundColor: '#D2D9DF'}),
                }}>
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
        <View style={{marginBottom: 5, marginLeft: 5}}>
          <Text>Date Of Birth</Text>
        </View>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <View style={styles.inputSize}>
            <Text style={{color: '#6439FF'}}>
              {moment(new Date(date)).format('DD-MMM-YYYY')}
            </Text>
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
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
        <InputBox
          title={'Phone'}
          placeholder={'Enter Your Phone'}
          onChangeText={text => setValue({...value, phone: text})}
          value={value.phone}
          keyboardType={'phone-pad'}
        />
        <InputBox
          title={'Password'}
          placeholder={'Enter Your Password'}
          onChangeText={text => setValue({...value, password: text})}
          value={value.password}
        />
        <InputBox
          title={'Repeat Password'}
          placeholder={'Enter Your Password Again'}
          onChangeText={text => setValidate(text)}
          value={validate}
        />

        <LargeButton
          actionButton={() => regHanddle(value.password, validate)}
          buttonText={'Register'}
          style={{marginBottom: 20}}
        />
        <View style={styles.loginContainer}>
          <Text>have an account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.loginArea}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    justifyContent: 'center',
  },
  dropdownButtonStyle: {
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 15,
    color: '#6439FF',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  loginContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 50,
  },
  loginArea: {
    marginLeft: 5,
    color: '#6439FF',
  },
});
