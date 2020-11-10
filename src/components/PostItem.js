import React from 'react'
import { View, Text } from 'react-native'
import {postItem} from './styles'
import moment from 'moment';

const PostItem = ({post}) => {
  return (
    <View style={postItem.container}>
      <View style={postItem.header}>
        <Text style={postItem.username}>{post.username}</Text>
        <Text style={postItem.time}>{moment(post.time).fromNow()}</Text>
      </View>
      <Text style={postItem.post}>{post.post}</Text>
    </View>
  )
}

export {PostItem}
