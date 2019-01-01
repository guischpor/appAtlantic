import React from 'react';
import {Font} from 'expo';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

const backgroundApp = require('../imgs/background_effect.jpg');
const logo = require('../imgs/logo_high.png');
const cadeadIcon = require('../imgs/icon_cad_high.png');
const avatarIcon = require('../imgs/icon_avatar_high.png');

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            login: '',
            pass: ''
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Ubuntu_Regular': require('../font/Ubuntu_Regular.ttf'),
            'Ubuntu_Light': require('../font/Ubuntu_Light.ttf')
        });
        this.setState({
            fontLoaded: true
        });
    }
    render() {
        if (this.state.fontLoaded != true) {
            return (
                <View />
            )
        }

        return (
            <ImageBackground source={backgroundApp} style={styles.viewContainer}>
                <View style={styles.containerLogin}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.txtTitle}>Sign in to get started</Text>
                    <View style={styles.viewInputUser}>
                        <Image source={avatarIcon} style={styles.avatarIcon}/>
                        <TextInput
                            placeholder= 'Username'
                            style={styles.inputTxt}
                        />
                    </View>
                    <View style={styles.viewInputPass}>
                        <Image source={cadeadIcon} style={styles.cadeadoIcon}/>
                        <TextInput
                            placeholder= 'Password'
                            style={styles.inputTxt}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() =>{alert('Forget password ?')}}
                    >
                        <Text style={styles.btnForget}>
                            Forget password ?
                        </Text>
                    </TouchableOpacity>
                    <TouchableHighlight
                        underlayColor={'#175B9F'}
                        activeOpacity={0.3}
                        onPress={() =>{alert('SIGN IN')}}
                        style={styles.btnSignin}
                    >
                        <Text style={styles.txtBtnSignin}>SIGN IN</Text>
                    </TouchableHighlight>
                    <View style={styles.viewFooter}>
                        <Text style={styles.txtGetNew}>Get New Acount  ...</Text>
                        <TouchableOpacity
                        onPress={() =>{alert('SING UP')}}
                        >
                            <Text style={styles.txtSignUp}>SING UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    containerLogin: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

    },

    logo: {
        width: 290,
        height: 135,
        justifyContent: 'flex-start',
        marginTop: 66,
    },

    txtTitle: {
        fontSize: 15,
        fontFamily: 'Ubuntu_Regular',
        color: '#fff',
        textAlign: 'center',
        marginTop: 130,
    },

    viewInputUser: {
        width: 248,
        flexDirection: 'row',
        backgroundColor: 'rgba(18, 18, 18, 0.5)',
        borderColor: '#575757',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
    },

    viewInputPass: {
        width: 248,
        flexDirection: 'row',
        backgroundColor: 'rgba(18, 18, 18, 0.5)',
        borderColor: '#575757',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
    },

    inputTxt: {
        fontSize: 13,
        fontFamily: 'Ubuntu_Light',
        padding: 5,
        textAlign: 'left',
        color: '#A2A2A2'
    },

    avatarIcon: {
        width: 10.19,
        height: 9.98,
        alignItems: 'stretch',
        marginTop: 15,
        marginLeft: 18,
        marginRight: 6
    },

    cadeadoIcon: {
        width: 7.55,
        height: 9.72,
        alignItems: 'stretch',
        marginTop: 14,
        marginLeft: 20,
        marginRight: 8
    },

    btnForget: {
        fontSize: 12,
        fontFamily: 'Ubuntu_Regular',
        color: '#A2A2A2',
        marginLeft: 150,
        marginTop: 15,
        marginBottom: 15,
    },

    btnSignin:{
        width: 248,
        height: 41,
        backgroundColor: '#175B9F',
        borderRadius: 4
    },

    txtBtnSignin: {
        fontSize: 13,
        fontFamily: 'Ubuntu_Regular',
        color: '#fff',
        textAlign: 'center',
        marginTop: 12
    },

    viewFooter:{
        flexDirection: 'row',
        marginTop: 30,
    },

    txtGetNew: {
        color: '#F7F7F7',
        fontSize: 13,
        fontFamily: 'Ubuntu_Light',
        marginRight: 15
    },

    txtSignUp: {
        color: '#F7F7F7',
        fontSize: 13,
        fontFamily: 'Ubuntu_Regular',
    },

});
