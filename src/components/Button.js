import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {button, noBorderButton} from './styles'

const Button = (props) => {

  const style = props.noBorder ? noBorderButton : button

  return (
    <TouchableOpacity style={style.container} onPress={() => {props.onPress()}} >
      <Text style={style.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export {Button}
