import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {timeline} from './styles';
import {PostInput, Header, TopicSelectModal, PostItem} from '../components';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import moment from 'moment';

const username = auth().currentUser
  ? auth().currentUser.email.split('@')[0]
  : 'unknown user';

const Timeline = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [topicModalFlag, setTopicModalFlag] = useState(true);
  const [post, setPost] = useState('');
  const [postList, setPostList] = useState([]);

  const sendPost = () => {
    // const postObject = {
    //   userName: userName,
    //   post: post,
    //   time: JSON.stringify(new Date)
    // }
    // database().ref(`/${selectedTopic}`).push(postObject);

    const newReference = database().ref(`/${selectedTopic}`).push();

    newReference.set({
      username: username,
      post: post,
      time: moment().toISOString(),
    });
  };

  const selectTopic = (topic) => {
    setTopicModalFlag(false);
    setSelectedTopic(topic);

    database()
      .ref(`/${topic}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        data
          ? setPostList(
              Object.values(data).sort((a, b) => {
                return new Date(b.time) - new Date(a.time);
              }),
            )
          : setPostList([]);
      });

    // database()
    //     .ref(`/${selectedTopic}/`)
    //     .off('value');
  };

  const renderPosts = ({item}) => <PostItem post={item} />;

  return (
    <SafeAreaView style={timeline.container}>
      <Header
        topic={selectedTopic}
        onPressForTopics={() => {
          setTopicModalFlag(true);
        }}
        onPressToLogOut={() => {
          auth().signOut();
        }}
      />

      <FlatList
        keyExtractor={(item, _) => item.time}
        data={postList}
        renderItem={renderPosts}
        style={{paddingTop: 5}}
      />

      {/* <PostInput onType={setPost} onSend={()=> {console.log(username)}} /> */}


      <PostInput onType={setPost} onSend={sendPost} />
      <TopicSelectModal
        isVisible={topicModalFlag}
        onClose={() => {
          selectedTopic ? setTopicModalFlag(false) : setTopicModalFlag(true);
        }}
        onSelectTopic={selectTopic}
      />
    </SafeAreaView>
  );
};

export {Timeline};
