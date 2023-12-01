import { StyleSheet } from 'react-native'

export const LoginStyle = (StyleSheet.createstyle = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent:'center',
  },

  logo: {
    width:"10%",
    height:"5%",
  },

  mainTitle: {marginVertical: 30, fontSize: 22},

  form: {width:  '70%'},

  input: {
    width:  '100%',
    borderWidth:  1,
    height:  '44',
    borderColor:  '#e5e5e5',
    marginVertical:  10,
    borderRadius:  9,
  },

  passwordLabelsContainer: {
    display:  'flex',
    flexDirection:  'row',
    justifyContent:  'space-between',
  },

  passwordLabel: {},

  forgetPassword: {color:  '#4F46E5'},

  signinButton: {
    backgroundColor:  '#4F46E5',
    height:  44,
    borderRadius:  9,
    display:  'flex',
    flexDirection:  'column',
    justifyContent:  'center',
    alignItems:  'center',
  },

  signinText: {color:  'white'},

  trialContainer: {
    display:  'flex',
    flexDirection:  'row',
    justifyContent:  'center',
    marginTop:  30,
  },
  
  trialSpan: {
    color: '#4F46E5',
    marginLeft: 5,
  },
  errorMessage: {
    fontSize: 12,
    marginBottom: 20,
    color: 'red',
  },



}))