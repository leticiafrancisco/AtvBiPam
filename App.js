import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import HEADER from './scr/components/Header';
import Aluno from './scr/components/Aluno';

export default class App extends React.Component{
   
  render(){
    return(
          
      <ScrollView>
        <HEADER/>
        
        {[
            'leticiafrancisco',
            'pedrofranceschi',
            'juliajessica',
            'JorgeCastilloPrz',
          ].map((githubUser)=> <Aluno  key={{githubUser}} githubUser = {githubUser}/>)
       }
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
