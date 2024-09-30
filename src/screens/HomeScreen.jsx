import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import SearchField from '@components/SearchField';
import {iphoneHasNotch} from '@utils/deviceinfo';
import HeadCarousel from '@components/HeadCarousel';
import categoriesData from '@data/categoriesData';
import FastImage from 'react-native-fast-image';

const HomeScreen = () => {
  const scroll = useRef(new Animated.Value(0)).current;
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  return (
    <View>
      <Animated.View
        style={[
          styles.searchContainer,
          {
            opacity: scroll.interpolate({
              inputRange: [0, 10, 200],
              outputRange: [0, 0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
      <View style={styles.searchPosition}>
        <View style={styles.SearchSize}>
          <SearchField
            onPress={() => console.log('search')}
            ontouch={() => console.log('Notif')}
          />
        </View>
      </View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <HeadCarousel />
        <View
          style={{
            marginLeft: 16,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Categories</Text>
        </View>
        <View style={{marginVertical: 16}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {categoriesData.map(items => {
              return (
                <View key={items.id}>
                  <TouchableOpacity style={{}}>
                    <View
                      style={{
                        width: SCREEN_WIDTH / 4,
                        alignItems: 'center',
                      }}>
                      <Image source={items.image} />
                      <View
                        style={{
                          width: (SCREEN_WIDTH - 16 * 5) / 4,
                          height: 30,
                          justifyContent: 'center',
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
                </View>
              );
            })}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    height: 116,
    backgroundColor: '#FFF',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  SearchSize: {
    flex: 1,
  },
  searchPosition: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: iphoneHasNotch ? 32 : 18,
    backgroundColor: 'transparent',
    top: 20,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
