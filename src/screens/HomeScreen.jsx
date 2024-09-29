import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef} from 'react';
import SearchField from '@components/SearchField';
import {iphoneHasNotch} from '@utils/deviceinfo';
import HeadCarousel from '@components/HeadCarousel';
import categoriesData from '@data/categoriesData';
import Divider from '@components/Divider';

const HomeScreen = () => {
  const scroll = useRef(new Animated.Value(0)).current;
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  return (
    <View style={{backgroundColor: 'white'}}>
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
          {/* <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoriesData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={{}}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      marginLeft: 16,
                      width: (SCREEN_WIDTH - 16 * 5) / 4,
                      height: (SCREEN_WIDTH - 16 * 5) / 4,
                    }}
                  />
                </TouchableOpacity>
              );
            }}
          /> */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            {categoriesData.map(items => {
              return (
                <View style={{}}>
                  <TouchableOpacity style={{}}>
                    <View
                      key={items.id}
                      style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        marginLeft: 16,
                        width: (SCREEN_WIDTH - 16 * 5) / 4,
                        height: (SCREEN_WIDTH - 16 * 5) / 4,
                      }}>
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 6,
                          alignSelf: 'center',
                          fontWeight: 'bold',
                          fontSize: 12,
                        }}>
                        {items.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
        <Divider />
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
