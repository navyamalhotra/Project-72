import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
 
export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = () => {
        db.collection("stories").add({
            title : this.state.title,
            author : this.state.author,
            storyText : this.state.storyText
        })
        this.setState({
            title : '',
            author : '',
            storyText : ''
        })
        ToastAndroid.show('Your story has been submitted',ToastAndroid.SHORT)
    }
     

    render(){
        return(
            <KeyboardAvoidingView style = {style.container} behavior='padding' enabled>
                <Header 
                    backgroundColor = {'pink'}
                     centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 30}
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Author"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title:{
        height: 40,
        borderWidth: 2,
        marginTop: 40,
        margin: 10
    },
    author: {
        height: 40,
        borderWidth: 2,
        margin: 10
    },
    storyText: {
        height: 250,
        borderWidth: 2,
        margin: 10
    },
    submitButton:{
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'pink',
        width: 80,
        height: 40
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
  });