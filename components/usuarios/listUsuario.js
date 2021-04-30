import React from 'react';
import { useState } from 'react';
import { Avatar, IconButton, Appbar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import AddProduto from './addUsuario';
import DeleteProduto from './deleteUsuario';
import EditProduto from './editUsuario';

const ListProduto = () => {

    const [ListProdutoModalOpen, setProdutoModalOpen] = useState(false)
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
    const [isEditModalOpen, setEditModalOpen] = useState(false)
    const [produtos, setProdutos] = useState([])
    const [selectedProduto, setSelectedProduto] = useState(false)

    const toggleAddProduto = () => {
        setProdutoModalOpen(!ListProdutoModalOpen)
    }
    
    const addProduto = (data) => {
        setProdutos([data, ...produtos])
    }

    const deleteProduto = nome => {
        setProdutos(produtos.filter(cli => cli.nome !== nome ))
    }

    const updateProduto = (data) => {
        setProdutos(produtos.map(cli => cli.nome == data.nome ? data : cli ))
    }

    const deletModalProduto = () => {
        setDeleteModalOpen(!isDeleteModalOpen)
    }

    const editModalProduto = () => {
        setEditModalOpen(!isEditModalOpen)
    }
    
    return (
        <View>
            <Appbar.Header style = {styles.Appbar}>
                <TouchableOpacity onPress = {toggleAddProduto} style = {styles.buttonModal}>
                <Avatar.Icon style = {styles.buttonHeader} size={24} icon="plus" />
                <Text style = {styles.textTitle}> Adicionar Produto</Text>
                </TouchableOpacity>
            </Appbar.Header>

            <View>
 
                {ListProdutoModalOpen ? <AddProduto
                    openModal = {ListProdutoModalOpen}
                    closeModal = {toggleAddProduto}
                    addProduto = {addProduto}
                /> : null}

                {isDeleteModalOpen ? <DeleteProduto
                    openModal = {isDeleteModalOpen}
                    closeModal = {deletModalProduto}
                    selectedProduto = {selectedProduto}
                    deleteProduto = {deleteProduto}
                /> : null}

                {isEditModalOpen ? <EditProduto
                    openModal = {isEditModalOpen}
                    closeModal = {editModalProduto}
                    selectedProduto = {selectedProduto}
                    updateProduto = {updateProduto}
                /> : null}

                {produtos.map(data => (

                    <Card.Title
                        title={data.nome}
                        subtitle={data.modelo}
                        left={(props) => <Avatar.Image  source={require('../../assets/favicon.png')} {...props} icon="folder" />}
                        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { editModalProduto(); setSelectedProduto(data);}} /> }
                        teste = {(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { editModalProduto(); setSelectedProduto(data);}} /> }    
                    
                    
                    >
                    

                    </Card.Title>
              

                    // <Card>
                    //     <Card.Content>
                    //     <Title>{data.nome}</Title>
                    //     <Paragraph>{data.modelo}</Paragraph>
                    //     </Card.Content>
                    // </Card>
                                 
                        
                    // <TouchableOpacity
                    //     style = {styles.button}
                    //     onPress = {() => {
                    //         deletModalProduto();
                    //         setSelectedProduto(data);
                    //     }}
                    // >
                    //     <Text style = {{color: 'red'}}>Excluir</Text>
                    // </TouchableOpacity>
                    // <TouchableOpacity
                    //     style = {styles.button}
                    //     onPress = {() => {
                    //         editModalProduto();
                    //         setSelectedProduto(data);
                    //     }}
                    // >
                    //     <Text style = {{color: 'blue'}}>Editar</Text>
                    // </TouchableOpacity>
                    
                    
                ))}

            </View>
       
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
    Appbar:{
        alignItems:'center',
        backgroundColor: '#ff3547',
        height: 20,
        paddingBottom: 30
    },
    nameList: {
        fontWeight: "bold",
        fontSize: 16,
    },
    listItem: {
        fontSize: 16,
    },
    produtosListContainer: {
        marginBottom: 25,
        elevation: 4,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 6,
        borderTopWidth: 1,
        borderWidth: 5,
        borderColor: "rgba(0,0,0,1)",
    },
    textTitle: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 40,
        marginTop: -25
    },
    buttonHeader:{
        backgroundColor: '#fff',
        color: '#ff3547',
        
        marginLeft: 10
    }
});

export default ListProduto