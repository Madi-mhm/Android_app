import { Navigate } from "react-router-dom"
import { ProfileStyle } from "../Styles/Views/Profile"
import { View, Image, Text, TouchableOpacity } from 'react-native'

const Profile =  ({navigation})=>{
    return (
      <View style={ProfileStyle.mainContainer}>
        <Text style={ProfileStyle.mainTitle}>Profile Page</Text>
        <Image
        source={{uri:"https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"}} 
        style={ProfileStyle.image}
        />
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Home')
          }}
          style={ProfileStyle.profileBtn}
        >
          <Text style={ProfileStyle.profilBtnText}>Home</Text>
        </TouchableOpacity>
      </View>

    )

}

export default Profile