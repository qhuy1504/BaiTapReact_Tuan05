// Screen03.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Nếu bạn sử dụng icons (tùy chọn)

const Screen03 = ({ navigation, route }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // Kiểm tra route.params và users có tồn tại hay không
    const users = route.params?.user || {};
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = () => {
        const user =  users.email === email && users.password === password;
      
        if (user) {
            navigation.navigate('Screen04');
        } else {
            Alert.alert('Login Failed', 'Email or password is incorrect.');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../DATA/Image 20.png')}
                style={styles.image} />
            <Text style={styles.title}>
                Welcome!
            </Text>
            <Text style={styles.email}>
                Email
            </Text>
            <View style={styles.inputContainer}>
                <Ionicons name="mail" size={24} color="gray" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                />
            </View>
            <Text style={styles.password}>
                Mật khẩu
            </Text>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed" size={24} color="gray" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Enter Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={!isPasswordVisible} // Ẩn hoặc hiện mật khẩu
                
                />
         

                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Ionicons
                        name={isPasswordVisible ? 'eye-off' : 'eye'}
                        size={24}
                        color="gray"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
               
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
     
        // borderWidth: 1,
        // marginBottom: 30,
        paddingHorizontal: 20,
  
        
        opacity: 0.8,
        width: '100%',
    },
    image: {
        position: 'absolute',
        top: 0, // Khoảng cách từ cạnh trên cùng màn hình
        width: 500,
        marginLeft: -20,
        alignItems: 'center',
        justifyContent: 'center',
       

    },
    title: {
        marginTop: 150,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 60,
        
        
    },
    email: {
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.7,
        marginBottom: 10,
    },
    password: {
       
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.7,
        marginBottom: 10,
    }, inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginVertical: 10,
        padding: 0.5,
        height: 40,
    },
    icon: {
        marginHorizontal: 10,
    },
    button2: {
        marginTop: 40,
        height: 40,
        
    },
    button: {
        width: 350,
        height: 60,
        backgroundColor: '#00eeff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10,
    },
    buttonText: {

        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
   
});

export default Screen03;
