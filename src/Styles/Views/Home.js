import { StyleSheet } from 'react-native'

export const HomeStyle = (StyleSheet.createstyle = StyleSheet.create({
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
    height:"30%",
    marginHorizontal:"12.5%",
    marginTop:40,
    borderRadius:9,
  },

  spinner:{
    marginTop: '25%',
  },

  profileBtn: {
    height:44,
    width:"50%",
    marginHorizontal:"25%",
    backgroundColor:"#14213D",
    marginVertical:30,
    borderRadius:25,
    marginTop: 'auto',
  },

  profilBtnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 9,
  },

  gpsCoordinates: {
    textAlign: 'center',
    marginVertical: 5,
  },

  location: {
    textAlign: 'center',
    marginTop: 10,
  },

  dataContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: '40%',
    marginHorizontal: '10%',
    marginBottom: 50,
    marginTop: 30,
    borderRadius: 9,
  },

  scrollItems: {
    marginTop: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  scrollItemsItem: {
    marginBottom: 10,

  },
}))