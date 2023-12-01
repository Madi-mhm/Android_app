import { View, Text, Image,TextInput, TouchableOpacity } from "react-native"
import { LoginStyle } from "../Styles/Views/Login"
import Logo from "../medias/mark.png"
import { useState } from "react"
import { checkEmail, checkPassword } from "../Utils/Regex"
import { login } from "../Services/Login"

export default Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function handleLogin(){
        setEmailError('')
        setPasswordError('')

        if(checkEmail(email) === false){
            setEmailError("Incorrect email format!")
        }else if(checkPassword(password) === false){
            setPasswordError("Incorrect password format!")
        }else{
            login(email, password)
        }

    }


    return(
        <View style={LoginStyle.mainContainer}>
            <Image source={Logo} style={LoginStyle.logo}/>
            <Text style={LoginStyle.mainTitle}>Sign in your account</Text>

            <View style={LoginStyle.form}>
                <Text>Email Adress</Text>
                <TextInput 
                style={LoginStyle.input} 
                onChangeText={setEmail}
                inputMode="email"
                /> 
                <Text style={LoginStyle.errorMessage}>
                    {emailError && emailError}
                </Text>

                <View style={LoginStyle.passwordLabelsContainer}>
                    <Text>Password</Text>
                    <Text style={LoginStyle.forgetPassword}>Forget Password</Text>
                </View>
                <TextInput 
                style={LoginStyle.input} 
                onChangeText={setPassword} 
                secureTextEntry
                /> 
                <Text  style={LoginStyle.errorMessage}>
                    {passwordError && passwordError}
                </Text>

                <TouchableOpacity style={LoginStyle.signinButton} onPress={handleLogin} >
                    <Text style={LoginStyle.signinText} >Sign in</Text>
                </TouchableOpacity>

                <View  style={LoginStyle.trialContainer}>
                    <Text>Not a member?</Text>
                    <Text style={LoginStyle.trialSpan}>Start a 14 days trial</Text>
                </View>
                
            </View>
        </View>
    )
}