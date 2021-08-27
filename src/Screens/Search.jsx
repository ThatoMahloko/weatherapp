import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper';

const Search = () => {
    const [getSearch, setSearch] = useState('');

    return (
        <View>
            <Searchbar 
            placeholder="Search"
            // onChangeText={}
            value
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})



