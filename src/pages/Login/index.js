import { useNavigation } from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, Animated} from 'react-native';
import firebase from '../Connection/firebaseConnection';
import { MaterialCommunityIcons } from '@expo/vector-icons';


console.disableYellowBox=true
export default function Login() {
const navigator = useNavigation();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, password).then((valeu) => {
        navigator.navigate('Home')
    }).catch((error) =>{
        if(error.code === 'auth/invalid-email'){
        alert('Email invalido ou não cadastrado');
        return;
        }
        else{
            alert('Ops, algo deu errado')
        }
    })
    Keyboard.dismiss();
    setEmail('');
    setPassword('');
}

 return (
   <View style={styles.container}>
       <View style={styles.icon}>
       <MaterialCommunityIcons name="login" size={120} color="#fff" />
       <Text style={styles.titulo}>Bem Vindo</Text>
       </View>

    <View style={styles.view}>
        <TextInput
        placeholder="Email:"
        style={styles.input}
        onChangeText={(texto) => setEmail(texto)}
        value={email}
        autoCompleteType='off'
     
        />
        <TextInput
        placeholder="Senha:"
        style={styles.input}
        onChangeText={(texto) => setPassword(texto)}
        value={password}
        secureTextEntry={true}
        />
        
        <TouchableOpacity style={styles.areaBtn} onPress={logar}>
            <Text style={styles.textBtn}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{color:'#000', marginTop:10}}>Criar Conta Gratuita</Text>
        </TouchableOpacity>
        
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 30,
        backgroundColor:'#b2c'
    },
    view:{
        backgroundColor:'#fff',
        width: '100%',
        height: 800,
        marginVertical:10,
        borderRadius: 30,
        alignItems:'center', 
    },
    icon:{
        marginVertical:30, 
        justifyContent:'center', 
        alignItems:'center'
    },
    input:{
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        width: '90%', 
        marginTop: 70,
        marginBottom: -50,
    }, 
    areaBtn:{
        marginTop:70,
        backgroundColor:'#b2c',
        width:'90%',
        height: 45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7
    }, 
    textBtn:{
        color:'#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }, 
    titulo:{
        color: '#fff', 
        fontWeight:'bold',
        fontSize: 30,
        marginLeft: 20
    }
    });