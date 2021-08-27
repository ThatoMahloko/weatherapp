import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Searchbar, Card, Title, Paragraph } from 'react-native-paper';
// import { IconName } from "react-icons/wi";

const Home = () => {
    const [getText, setText] = useState('')
    return (
        <View>
            <View>
                <Searchbar
                    style={styles.searchBar}
                    placeholder="Search"
                    onChangeText={(getText) => setText(getText)}
                    value={getText}
                />
            </View>
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Title style={styles.cardTitle}>City</Title>
                </Card>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    searchBar: {
        width: "350px",
        margin: 'auto',
        marginTop: 10,
    }
    ,
    cardContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
        ,
        height: 350,
        width: 350
        ,
        
    }
    ,
    cardTitle:{
        textAlign: 'center'
    }
})

export default Home

