import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import formatRupiah from '@utils/formatRupiah';

const FavProductCard = ({dataProduct}) => {
  const navigation = useNavigation();
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const [checked, setChecked] = useState(false);
  return (
    <View>
      {dataProduct.map((item, index) => {
        return (
          <View key={index}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 16,
                height: 150,
                width: SCREEN_WIDTH - 36,

                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Detail', {
                    data: item,
                  })
                }>
                <Image
                  source={item.image[0]}
                  style={{
                    height: 110,
                    width: 110,
                    borderRadius: 10,
                    marginLeft: 16,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: 16,
                  paddingRight: 120,
                  height: 110,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Detail', {
                        data: item,
                      })
                    }>
                    <Text
                      style={[
                        styles.PoppinsMedium,
                        {width: SCREEN_WIDTH - 180},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                  <Text>{item.category}</Text>
                  <Text>{formatRupiah(item.price)}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => setChecked(!checked)}
                  style={{
                    padding: 5,
                    backgroundColor: checked ? 'yellow' : 'white',
                    borderRadius: 50,
                    alignItems: 'center',
                    width: 120,
                    borderWidth: 1,
                  }}>
                  <Text style={styles.PoppinsMedium}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
            {dataProduct.length - 1 !== index && (
              <View
                style={{
                  backgroundColor: 'gray',
                  height: 0.5,
                  marginLeft: 16,
                  marginRight: 16,
                  marginVertical: 8,
                }}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default FavProductCard;

const styles = StyleSheet.create({});
