import {StyleSheet, Dimensions} from 'react-native';

export const input = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    marginLeft: 10,
  },
});

export const button = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#00b2cc',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

export const noBorderButton = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#00b2cc',
  },
});

export const postInput = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  input: {
    flex: 1
  }
});

export const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#607d8b',
  },
});

export const modal = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 15,
    width: Dimensions.get('window').width * 0.93,
    alignSelf: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  topicWrap: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  topic: {
    color: '#607d8b',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export const postItem = StyleSheet.create({
  container: {
    marginVertical: 7,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#00b2cc",
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  username: {
    color: 'white',
    fontWeight: 'bold'
  },
  time: {
    color: 'white',
    fontStyle: 'italic'
  },
  post: {
    backgroundColor: '#fafafa',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  }
});

