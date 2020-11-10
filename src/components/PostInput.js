import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {postInput} from './styles';

const PostInput = (props) => {
  return (
    <View style={postInput.container}>
      <TextInput
        style={postInput.input}
        placeholder="Type something.."
        onChangeText={(value) => {
          props.onType(value);
        }}
      />
      <Icon
        name="telegram"
        size={27}
        color="#00b2cc"
        onPress={() => {
          props.onSend();
        }}
      />
    </View>
  );
};

export {PostInput};
