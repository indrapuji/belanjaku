import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = () => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const [fav, setFav] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={[styles.marginPosition, {width: SCREEN_WIDTH - 30}]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="chevron-back" color="black" size={20} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
          }}>
          <Icon name="share-social" color="black" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFav(!fav)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={fav ? 'heart-sharp' : 'heart-outline'}
            color="black"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  marginPosition: {
    position: 'absolute',
    top: 50,
    left: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textFormat: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
    color: 'gray',
  },
});
