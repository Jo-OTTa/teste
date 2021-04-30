import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Alert, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import InputForm from '../inputForm';

const AddFormaPagamento = () => {

    const initialFormState = {
        nomeCartao: "",
        titular: "",
        numeroCartao: "",
        vencimento: "",
        codSeguranca: "",
        bandeira: "",
        cep: "",
        endereco: "",
        cidade: "",
        estado: "",
        bairro: "",
        numero: "",
        complemento: ""
      
    }

  const [form, setForm] = useState(initialFormState)

  const handleChange = (value, name) => {
    setForm({...form, [name]: value})
  }

  const checkData = () => {
    if((form.nome, form.idade, form.email) === ""){
      return Alert.alert("Favor Preencher todos os campos!")
    }else{
      return Alert.alert(JSON.stringify(form))
    }
  }

  return (
    <ScrollView style = {styles.ScrollView}>
      <View style = {styles.container}>
        <StatusBar styll = "auto" />
        <InputForm 
          nomeDoCampo = {"Nome do cartão: "} 
          evento = {(text) => handleChange(text, "nomeCartao")}
        />

        <InputForm 
          nomeDoCampo = {"Titular: "} 
          evento = {(text) => handleChange(text, "titular")}
          numeric = {true}
        />

        <InputForm 
          nomeDoCampo = {"Número do cartao: "} 
          evento = {(text) => handleChange(text, "numeroCartao")}
          numeric = {true}
        />

        <InputForm 
          nomeDoCampo = {"Vencimento: "} 
          evento = {(text) => handleChange(text, "vencimento")}
        />

        <InputForm 
          nomeDoCampo = {"Código de segurança: "} 
          evento = {(text) => handleChange(text, "codSeguranca")}
          numeric = {true}
        />
        
        <InputForm 
          nomeDoCampo = {"Bandeira: "} 
          evento = {(text) => handleChange(text, "bandeira")}
          numeric = {true}
        />

        <InputForm 
          nomeDoCampo = {"CEP: "} 
          evento = {(text) => handleChange(text, "cep")}
        />

        <InputForm 
          nomeDoCampo = {"Endereço: "} 
          evento = {(text) => handleChange(text, "endereco")}
        />

        <InputForm 
          nomeDoCampo = {"Cidade: "} 
          evento = {(text) => handleChange(text, "cidade")}
          numeric = {true}
        />
        
        <InputForm 
          nomeDoCampo = {"Estado: "} 
          evento = {(text) => handleChange(text, "estado")}
          numeric = {true}
        />

        <InputForm 
          nomeDoCampo = {"Bairro: "} 
          evento = {(text) => handleChange(text, "bairro")}
          numeric = {true}
        />

        <InputForm 
          nomeDoCampo = {"Número: "} 
          evento = {(text) => handleChange(text, "numero")}
          numeric = {true}
        />

        <InputForm 
          nomeDoCampo = {"Complemento: "} 
          evento = {(text) => handleChange(text, "complemento")}
          numeric = {true}
        />

        <TouchableOpacity
          style = {styles.button}
          onPress = {() => checkData()}
        >
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#dddd",
    padding: 10
  },
  ScrollView:{
    marginVertical: 60,
    marginHorizontal: 20
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1  
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom:20
  }
});

export default AddFormaPagamento