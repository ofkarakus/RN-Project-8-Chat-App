import React from 'react';
import {View, TextInput} from 'react-native';
import {input} from './styles';

const Input = (props) => {
  return (
    <View style={input.container}>
      <TextInput
        style={input.input}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        onChangeText={value => {props.onChangeText(value)}}
      />
    </View>
  );
};

export {Input};
