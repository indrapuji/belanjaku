import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import productData from '@data/productData';
import colors from 'src/themes/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CartProductCard from '@components/CartProductCard';
import {iphoneHasNotch} from '@utils/deviceinfo';

const CartScreen = ({}) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const [checked, setChecked] = useState(false);

  const renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          width: SCREEN_WIDTH,
          marginTop: 10,
          paddingBottom: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View
          style={{
            marginTop: 20,
            marginLeft: 16,
            flexDirection: 'row',
          }}>
          <BouncyCheckbox
            size={25}
            isChecked={checked}
            fillColor={colors.SECONDARY}
            unFillColor="#FFFFFF"
            innerIconStyle={{borderWidth: 2}}
            onPress={isChecked => {
              setChecked(isChecked);
            }}
          />
          <Text style={styles.PoppinsMedium}>Select all</Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            marginBottom: 10,
            backgroundColor: colors.SECONDARY,
            height: 45,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            width: SCREEN_WIDTH - 32,
          }}>
          <Text style={styles.PoppinsBold}>Checkout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: iphoneHasNotch ? 50 : 20,
          paddingBottom: 20,
          width: SCREEN_WIDTH,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text style={[styles.PoppinsBold, {fontSize: 20}]}>My Cart</Text>
      </View>

      <FlatList
        data={productData}
        keyExtractor={(key, i) => i.toString()}
        renderItem={({item}) => (
          <CartProductCard dataProduct={item} onChecked={checked} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  PoppinsBold: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  PoppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});
