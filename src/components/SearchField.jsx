import {Notification, SearchIcon} from '@assets/svg';
import React from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchField = ({onPress, ontouch}) => {
  const {width} = useWindowDimensions();

  const SCREEN_WIDTH = width - 32;
  return (
    <View style={styles.headerContainer}>
      <View style={[styles.searchContainer, {width: SCREEN_WIDTH - 40}]}>
        <SearchIcon />
        <Pressable style={styles.searchIndent} onPress={onPress}>
          <Text style={styles.searchText}>Search something...?</Text>
        </Pressable>
      </View>
      <View style={{width: SCREEN_WIDTH - (SCREEN_WIDTH + 40)}}>
        <TouchableOpacity onPress={ontouch}>
          <Icon
            name="notifications"
            color="grey"
            size={30}
            style={{paddingHorizontal: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  searchIndent: {
    paddingVertical: 12,
  },
  searchText: {
    fontSize: 12,
    marginLeft: 8,
    color: 'grey',
  },
  iconPosition: {
    // alignItems: 'center',
  },
});
