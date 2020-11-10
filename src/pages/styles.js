import { StyleSheet, Dimensions } from 'react-native'

export const signin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center'

  },

  logo: {
    resizeMode: 'contain',
    height: Dimensions.get('window').height / 3.5,
  },
  heading: {
    fontWeight: 'bold',
    color : '#00b686',
    fontSize: 30
  }
})

export const signup = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center'

  },

  logo: {
    resizeMode: 'contain',
    height: Dimensions.get('window').height / 3.5,
  },
  heading: {
    fontWeight: 'bold',
    color : '#00b686',
    fontSize: 30
  }
})

export const timeline = StyleSheet.create({
  container: {
    backgroundColor: '#e0f2f1',
    flex: 1,
  }
})