import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import SearchField from '@components/SearchField';
import {iphoneHasNotch} from '@utils/deviceinfo';

const HomeScreen = () => {
  const scroll = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Animated.View
        style={[
          styles.searchContainer,
          {
            opacity: scroll.interpolate({
              inputRange: [0, 100, 200],
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
        {/* View */}
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
