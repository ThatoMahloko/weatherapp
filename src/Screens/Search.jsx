import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import Home from './Home';
const Search = () => {
    const APIKEY = "ad5413a59fc9e0b4ccf7645a50e15a64";
    const [getCountry, setCountry] = useState('');
    const [getCity, setCity] = useState('');
    const [getWeather, setWeather] = useState([]);

    async function weatherData(e) {
        if (getCountry === "" || getCity === "") {
            alert("Add Values")
            console.log(getCity, getCountry)
        } else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getCity},${getCountry}&appid=${APIKEY}`)
                .then((res) => res.json())
                .then((data) => data);

            setWeather({ data: data });
        }
    }

    return (
        <View>
            <form>
                <View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} label="City" mode="outlined" placeholder="City" onChangeText={(e) => setCity(e)} />
                        <TextInput style={styles.input} label="Country" mode="outlined" placeholder="Country" onChangeText={(e) => setCountry(e)} />
                        <Button style={styles.button} icon="find" mode="contained" onPress={e => weatherData(e)}>SEARCH</Button>
                    </View>
                    
                </View>
            </form>
            {
                getWeather.data != undefined ?
                    <View>
                        <Home data={getWeather.data} />
                    </View>
                    : null
            }
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignContent: 'center',
        margin: 'auto',
    }
    ,
    input: {
        width: 300,
        margin: 10,
    }
    ,
    button: {
        height: 55,
        marginTop: 25,
        width: 300,
        padding: 5,
        fontStyle: 'bolder',
        fontWeight: '800',
        margin: "auto",
        marginBottom: 20

    }
})