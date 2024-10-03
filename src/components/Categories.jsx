import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import categoriesData from '@data/categoriesData';

const Categories = () => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  return (
    <View style={{marginVertical: 16, marginHorizontal: 8}}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {categoriesData.map(items => {
          return (
            <TouchableOpacity key={items.id}>
              <View
                style={{
                  width: (SCREEN_WIDTH - 16) / 4,
                  alignItems: 'center',
                }}>
                <Image
                  source={items.image}
                  style={{
                    width: (SCREEN_WIDTH - 16 * 5) / 4,
                    height: (SCREEN_WIDTH - 16 * 5) / 4,
                    borderWidth: 0.2,
                    borderRadius: 16,
                  }}
                />
                <View
                  style={{
                    width: (SCREEN_WIDTH - 20 * 5) / 4,
                    height: 15,
                    justifyContent: 'center',
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontWeight: 'bold',
                      fontSize: 12,
                    }}>
                    {items.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
