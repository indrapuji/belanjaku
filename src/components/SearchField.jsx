import {Notification, SearchIcon} from '@assets/svg';
import React from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchField = ({onPress, ontouch}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <Pressable style={styles.searchIndent} onPress={onPress}>
          <Text style={styles.searchText}>Search something...?</Text>
        </Pressable>
      </View>
      <View style={styles.iconPosition}>
        <TouchableOpacity onPress={ontouch}>
          <Icon name="notifications" color="grey" size={30} />
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
    flex: 5,
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
    flex: 1,
    alignItems: 'center',
  },
});
