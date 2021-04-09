import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { AntDesign, Entypo, FontAwesome} from '@expo/vector-icons';


const Aluno = ({githubUser}) =>{

    return(
        <View style={styles.container}>
          <View style={styles.boxPerfil}>
                <Image style={styles.fotoPerfil}source = {{
                    uri:`https://github.com/${githubUser}.png`
                    }}
                />
                
                <Text style={styles.Texto}>{githubUser}</Text>
                <Text style={styles.Texto}>Tecnologia</Text>

                <View style={styles.boxMenu}>
                    <Entypo name="menu" size={24} color="black" />
                    <AntDesign name="phone" size={24} color="black" />
                    <FontAwesome name="envelope" size={24} color="black" />
                </View>  
          </View>
         
        </View>     
    )
}

const styles = StyleSheet.create({


    container:{
        backgroundColor: '#ffff',
        marginTop: 20,
        marginLeft: 50,
    
    },

    boxPerfil:{
        backgroundColor: '#D3D3D3',
        width: 300,
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        
    },
    
    fotoPerfil:{
        aspectRatio:1,
        width:100,
        height: 100,
        borderRadius: 50,
        

    },
     
    Texto:{
        marginTop:10,
        fontSize: 20,
        paddingLeft: 15,
        
    },

    boxMenu:{
        marginTop: 10,
        flexDirection: 'row',
    }


});

export default Aluno;