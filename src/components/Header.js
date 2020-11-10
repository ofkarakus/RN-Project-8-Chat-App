import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {header} from './styles'

const Header = (props) => {
  return (
    <View style={header.container}>
      <Text  style={header.heading}>#{props.topic}</Text>
      <Icon
          name="hexagon-multiple"
          size={30}
          color="#00b2cc"
          style={{
            marginRight: 10
          }}
          onPress={()=> {props.onPressForTopics()}}
        />
        <Icon 
          name="login" 
          size={30} 
          color="#00b2cc"
          onPress={()=> {props.onPressToLogOut()}}
        />
    </View>
  )
}

export {Header}
