import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {modal} from './styles';

const topics = ['fullstack', 'data-science', 'gaming', 'mobile', 'random'];

const TopicSelectModal = (props) => {
  return (
    <Modal
      isVisible={props.isVisible}
      style={modal.modal}
      onBackdropPress={() => {
        props.onClose();
      }}>
      <View style={modal.container}>
        {topics.map((topic, index) => (
          <TouchableOpacity
            style={modal.topicWrap}
            key={index}
            onPress={() => {
              props.onSelectTopic(topic);
            }}>
            <Text style={modal.topic}>#{topic}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

export {TopicSelectModal};
