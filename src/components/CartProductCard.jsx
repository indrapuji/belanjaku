import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import formatRupiah from '@utils/formatRupiah';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CartProductCard = ({dataProduct, onChecked, index, length}) => {
  const navigation = useNavigation();
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const [checked, setChecked] = useState(false);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    getChecked();
  }, [onChecked]);

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const minAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const getChecked = () => {
    setChecked(onChecked);
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 120,
        width: SCREEN_WIDTH,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={{marginLeft: 16, marginRight: -16}}>
        <BouncyCheckbox
          size={25}
          fillColor={colors.SECONDARY}
          isChecked={checked}
          unFillColor="#FFFFFF"
          innerIconStyle={{borderWidth: 2}}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            data: dataProduct,
          })
        }>
        <Image
          source={dataProduct.image[0]}
          style={{
            height: 90,
            width: 90,
            borderRadius: 10,
            marginLeft: 16,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          marginLeft: 16,
          height: 90,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{}}
          onPress={() =>
            navigation.navigate('Detail', {
              data: dataProduct,
            })
          }>
          <Text
            style={[styles.PoppinsMedium, {width: SCREEN_WIDTH - 180}]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {dataProduct.title}
          </Text>

          <Text>{dataProduct.category}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: SCREEN_WIDTH - 180,
            alignItems: 'center',
          }}>
          <Text>{formatRupiah(dataProduct.price)}</Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#def',
              width: 75,
              height: 25,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{width: 25, alignItems: 'center'}}
              onPress={() => minAmount()}>
              <Text>-</Text>
            </TouchableOpacity>
            <View style={{width: 25, alignItems: 'center'}}>
              <Text>{amount}</Text>
            </View>
            <TouchableOpacity
              style={{width: 25, alignItems: 'center'}}
              onPress={() => addAmount()}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartProductCard;

const styles = StyleSheet.create({});
