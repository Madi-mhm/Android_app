import { StyleSheet } from 'react-native'

export const ProfileStyle = (StyleSheet.createstyle = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FCA311',
  },

  mainTitle: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: '20%',
  },

  image: {
    width:"75%",
    height:"40%",
    marginHorizontal:"12.5%",
    marginTop:40,
    borderRadius:9,
  },

  profileBtn: {
    height:44,
    width:"50%",
    marginHorizontal:"25%",
    backgroundColor:"#14213D",
    marginVertical:30,
    borderRadius:25,
    
  },
  profilBtnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 9,
  },
}))