import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = () => (

    <View style={styles.container}>

        <Text style={styles.title}>Alunos.com</Text>

    </View>

);

const styles = StyleSheet.create({

    container:{

        marginTop:30,
        backgroundColor:'#0C6260',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10

    },
    title: {
        fontSize: 30,
        color: '#fff'
    },

});

export default Header;