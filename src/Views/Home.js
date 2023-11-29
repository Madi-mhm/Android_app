import { HomeStyle } from "../Styles/Views/Home"
import { View, Image, Text, TouchableOpacity } from 'react-native'


const Home =  ({ navigation })=>{
    return (
        <View style={HomeStyle.mainContainer}>
      <Text style={HomeStyle.mainTitle}>Hello world</Text>
      <Image
      source={{uri:"https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
      style={HomeStyle.image}
      />
        <TouchableOpacity
            onPress={()=>{
                navigation.navigate('Profile')
            }}
        >
            <Text>Naviguer vers profil</Text>
        </TouchableOpacity> 
    </View>
    )

}

export default Home