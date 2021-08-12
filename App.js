
import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity, Text,Image } from 'react-native';
import Axios from 'axios';


function App() {
    
   
        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
      
    const register = () => {
        Axios.post('http://localhost:3001/register',{ 
            username: username,
            password: password
        }).then((response) => {
            
            console.log(response);
            
        })

        
    }

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Username " 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={name => setName(name)}
                />
                <TextInput style={styles.input} placeholder="Password" 
                    placeholderTextColor = "grey"
                    selectionColor="grey"
                    onChangeText={employeeCode => setEmployeeCode(employeeCode)}
                />
                
                <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} onPress={register}>SIGN UP</Text>
                </TouchableOpacity> 
                <View style={styles.hyperLinkText}>
                    <Text >Already have account?</Text>
                    <TouchableOpacity >
                        <Text style={styles.hyperLink} onPress={() => navigation.navigate('Sales_Login')}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
      
        </View>
    );
}



const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginVertical:5,
      },
      input: {
        paddingLeft:15,
        paddingBottom:10,
        paddingTop:10,
        width:310,
        fontSize:16,
        color:'#000',
        marginVertical: 5,
        marginBottom: 5,
        borderBottomColor:'#dad9d9',
        borderBottomWidth: 1,
      },
      button: {
        width:310,
        backgroundColor:'#a40b0e',
        borderRadius: 25,
        marginVertical: 5,
        paddingVertical: 13
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      },
    hyperLinkText:{
        alignItems:'center',
        fontSize:16,
        marginVertical:16,
    },
    hyperLink:{
        color: '#a40b0e',
        fontWeight: 'bold',
    },
    infocisionLogoContainer:{
      marginTop:-17,
      alignItems:'center',
  
    },
    infocisionLogo:{
        width:130,
        height:40
    }
});

export default App;