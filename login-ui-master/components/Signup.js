import  React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';

export default class Signup extends React.Component {

    constructor(props){
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        Name: "",
        Email:"",
        Password:"",
        errMsg: ""
    }

    onSignup = () => {
        if(this.state.Name == '' && this.state.Email == '' && this.state.Password ==''){
            this.props.navigation.navigate('Main')
        }else{
            this.validateInput.current.shake(800)
            this.setState({errMsg: 'Invalid Registration details. Try again!'})
        }
    }

    render(){
        return(
            <View style={ styles.container}>
                <Text style={{ fontSize: 25, marginTop: 20 }}>Fill Up the required details </Text>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 20 }}>Sign up to continue</Text>

                <Animatable.View
                    ref={this.validateInput}
                >
                <TextInput
                    style={{ marginTop: 25, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 15 }}
                    placeholder="Name"
                    onChangeText = {(text) => 
                        {
                            this.setState({errMsg: ''}),
                            this.setState({ name: text })
                        }
                    }
                />

                <TextInput
                        style={{ marginTop: 25, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 15 }}
                        placeholder="Email"
                        onChangeText = {(text) => 
                            {
                                this.setState({errMsg: ''}),
                                this.setState({ Email: text })}
                            }
                        

                />

              <TextInput
                        style={{ marginTop: 30, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 10 }}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText = {(text) => 
                            {
                                this.setState({errMsg: ''}),
                                this.setState({ password: text })}
                            }
                        
               />


                <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>
                
                </Animatable.View>

                

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity
                        onPress={() => this.onSignup()}
                        style={{ width: 200, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
                    >
                        <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>SignIn</Text>
                    </TouchableOpacity>

                    <Text style={{ marginTop: 20 }}>Rewrite the details ?</Text>

                    <View style={{ flexDirection: 'row', marginTop: 60 }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#3f51b5', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>f</Text>
                        </View>
                        <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#f44336', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>G</Text>
                        </View>
                        <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#1565c0', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>in</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row',marginTop: 40 }}>
                    <Text style={{ color: 'gray' }}>Don't have an account?</Text>
                    <Text style={{ fontWeight: 'bold' }}> Sign In</Text>
                    </View>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20
    }
})