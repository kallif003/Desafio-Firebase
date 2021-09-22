import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { EvilIcons } from '@expo/vector-icons';
import firebase from '../Connection/firebaseConnection';


export default function Home() {

const [modal, setModal] = useState(false);
const navigator = useNavigation();

async function logout(){
    await firebase.auth().signOut();
    navigator.goBack('Login')
    alert('Obrigado, volte sempre')
}

 return (
   <View style={styles.container}>
       <View style={styles.icon}>
       <EvilIcons name="user" size={150} color="#fff" />
       <Text style={styles.titulo}>Olá, login realizado com sucesso</Text>
       <Text style={styles.subtitulo}>Clique no botão abaixo e conheça mais sobre Autenticação com Firebase</Text>

       <TouchableOpacity style={styles.areaBtn} onPress={() => setModal(true)}>
           <Text style={styles.textBtn} >Saiba Mais</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{marginTop:10}} onPress={logout}>
           <Text style={{color:'#fff'}} >Sair</Text>
       </TouchableOpacity>
       </View>

    <Modal 
    animationType="slide"
    transparent={true}
    visible={modal}>
        <View style={styles.modalInterno}>
        <Text style={styles.textModal}>A autenticação Firebase é um recurso de autenticação do usuário fornecido 
            pelo Firebase a partir de seus serviços de back-end. 
            Este é um sistema de autenticação baseado em tokens que fornece integração 
            fácil com a maioria das plataformas.
            A melhor parte é que é um sistema baseado em funções, 
            o que significa que você pode criar funções diferentes para usuários diferentes. 
            Outro ótimo recurso aqui é que essa autenticação é 
            fácil de se integrar com a API do Firebase</Text>

        <TouchableOpacity style={[styles.areaBtn, {backgroundColor:'#b2c'}]} onPress={() => setModal(false)}>
           <Text style={[styles.textBtn, {color:'#fff'}]} >Fechar</Text>
       </TouchableOpacity>
        </View>
    </Modal>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 30,
        backgroundColor:'#b2c',
    },
    titulo:{
        color: '#fff', 
        fontWeight:'bold',
        fontSize: 17,
        marginLeft: 20
    },
    subtitulo:{
        textAlign:'center',
        color: '#fff', 
        fontWeight:'bold',
        fontSize: 17,
        marginTop:5
    },
    icon:{
        marginVertical:30, 
        justifyContent:'center', 
        alignItems:'center'
    },
    view:{
        backgroundColor:'#fff',
        width: '100%',
        height: 800,
        marginVertical:30,
        borderRadius: 30,
        alignItems:'center', 
    }, 
    areaBtn:{
        marginTop:20,
        backgroundColor:'#fff',
        width:'90%',
        height: 45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7
    }, 
    textBtn:{
        color:'#000',
        fontSize: 17,
        fontWeight: 'bold',
    }, 
    modalInterno:{
        backgroundColor: '#fff', 
        width: '100%',
        height: 500, 
        marginTop:300,
        borderRadius: 30,
        alignItems: 'center'
    },
    textModal:{
        textAlign:'center',
        marginTop: 25,
        fontSize: 20,
        margin:5
    }
});