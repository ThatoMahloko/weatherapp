import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Title } from 'react-native-paper';

const Home = ({ data }) => {

    console.log(data)
    const iconurl = "http://openweathermap.org/img/wn/" + `${data.cod !== 404 ? data.weather[0].icon : null}` + ".png";

    return (
        
        <View style={styles.outputContainer}>
            <ImageBackground />
            {data.cod != 404 ? (
                <React.Fragment style={styles.outputContainer}>
                    <Title style={styles.text}>{data.name} , {data.sys.country}. Weather</Title>
                    <Text style={styles.text}>As of {new Date().toLocaleTimeString()}</Text>
                    <Title style={styles.text}>
                        {" "}
                        {Math.floor(data.main.temp - 273.15)}
                        <sup>o</sup>
                    </Title>
                    <Title style={styles.text}>{data.weather[0].description}</Title>
                    <Image source={iconurl} alt="" />
                    <View>
                        <table>
                            <tr>
                                <td>
                                    <h4>High/Low</h4>
                                </td>
                                <td>
                                    <span>
                                        {Math.floor(data.main.temp_max - 273.15)}/
                                        {Math.floor(data.main.temp_min - 273.15)}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Humidity</h4>
                                </td>
                                <td>
                                    <span>{data.main.humidity} %</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Pressure</h4>
                                </td>
                                <td>
                                    <span>{data.main.pressure} hPa</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Visibility</h4>
                                </td>
                                <td>
                                    <span>{data.visibility / 1000} Km</span>
                                </td>
                            </tr>
                        </table>
                    </View>

                </React.Fragment>
            ) : (
                <View className="maincard">
                    <h2>{data.message}</h2>
                </View>
            )}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    outputContainer: {
        justifyContent: 'center',
        textAlign: 'center',
    }
    ,
    text: {
        textAlign: 'center'
    }
    ,
    sideBySide: {
        display: 'flex',
        flexDirection: 'row'
    },
    table: {
        borderColor: "#000",
        borderWidth: 1
    }

})


