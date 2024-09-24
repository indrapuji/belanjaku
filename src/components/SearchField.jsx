import {Notification, SearchIcon} from '@assets/svg';
import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchField = ({onPress, ontouch}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#FFF',
          borderRadius: 10,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'grey',
          flex: 5,
        }}>
        <SearchIcon />

        <Pressable style={{paddingVertical: 12}} onPress={onPress}>
          <Text
            style={{
              fontSize: 12,
              marginLeft: 8,
              color: 'grey',
            }}>
            Search for a movie, tv show...
          </Text>
        </Pressable>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity onPress={ontouch}>
          <Icon name="notifications" color="grey" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchField;
