import React from 'react';
import {
    DrawerContentScrollView, DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import { NativeBaseProvider, Container, Header, Content, Footer, Avatar } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';
import { margin, marginRight, marginTop, styles } from 'styled-system';
import { AntDesign } from '@expo/vector-icons';

function Sidebar({ ...props }) {
    return (

        <NativeBaseProvider>
            <View style={hii.main}>
                {/* <AntDesign name="home" size={20} color="black" onPress={() => alert("Home Under Construction !!")} /> */}
                <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                    style={{ width: 50, height: 50, borderRadius: 50, marginRight: 15 }}
                />
                <View style={hii.ttt}>
                    <Text style={hii.tex}>Satyam Jha</Text>
                    <Text style={hii.tex}>8618660526</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                {/* <DrawerItem label="Rate Us"/> */}
            </DrawerContentScrollView>

            {/* </Container> */}
        </NativeBaseProvider>


    );
}

const hii = StyleSheet.create({
    main: {
        color: "red",
        padding: 50,
        backgroundColor: "orange",
        flexDirection: "row",
        alignItems: "stretch",




    },
    tex: {
        color: "white",
        fontSize: 20,


    },
    ttt: {
        // marginLeft: 
    }
});
export default Sidebar;