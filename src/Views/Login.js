import { View, Text, Image,TextInput, TouchableOpacity } from "react-native"
import { LoginStyle } from "../Styles/Views/Login"
import Logo from "../medias/mark.png"

export default Login = ()=>{
    return(
        <View style={LoginStyle.mainContainer}>
            <Image source={Logo} style={LoginStyle.logo}/>
            <Text>Sign in your account</Text>

            <View>
                <Text>Email Adress</Text>
                <TextInput onChange={()=>{}}/> 

                <View>
                    <Text>Password</Text>
                    <Text>Forget Password</Text>
                </View>
                
                <TextInput onChange={()=>{}}/> 
                <TouchableOpacity>
                    <Text>Sign in</Text>
                </TouchableOpacity>
                <Text>Not a member? try 14 days trial</Text>
            </View>
        </View>
    )
}