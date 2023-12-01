import { HomeStyle } from "../Styles/Views/Home"
import { View, Image, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from "react";
import { scrollViewData } from "../Services/Login";


const Home =  ({ navigation })=>{
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [data, setData] = useState()
    const [activityIndicator, setActivityIndicator] = useState(true)

    useEffect(()=>{
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(info => {
            setLatitude(info.coords.latitude)
            setLongitude(info.coords.longitude)
        })
    }, [])

    useEffect(() => {
        async function fetchData() {
          try {
            setTimeout(async()=>{
                const fetchedData = await scrollViewData(setData);
                setActivityIndicator(false)
            }, 3000)

          }catch (error) {
            console.log("Error fetching scrollViewData");
            setActivityIndicator(false)
          }
        }
    
        fetchData();
    }, []);

    return (
        <View style={HomeStyle.mainContainer}>
            <Text style={HomeStyle.mainTitle}>Hello world</Text>


            <Image
            source={{uri:"https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
            style={HomeStyle.image}
            />

            <Text style={HomeStyle.location}>Latitude: ${latitude} Longitude: ${longitude}</Text>

            <ScrollView style={HomeStyle.dataContainer}>
                {activityIndicator === true ? (
                  <ActivityIndicator style={HomeStyle.spinner} color={'red'} size={'large'} />
                ) : (
                  data &&
                  data.map((item, index) => (
                    <View style={HomeStyle.scrollItems} key={index}>
                      <Text>{item.name}</Text>
                      <Text style={HomeStyle.scrollItemsItem}>{item.email}</Text>
                    </View>
                  ))
                )}
            </ScrollView>

            <TouchableOpacity
                onPress={()=>navigation.navigate('Login')}
                style={HomeStyle.profileBtn}
            >
                <Text style={HomeStyle.profilBtnText}>Se Connecter</Text>
            </TouchableOpacity> 

    </View>
    )

}

export default Home