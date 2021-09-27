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
                <Image source={{ uri: 'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.6435-9/37736730_1812690518797867_4664024257968209920_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=j3aiZM6mii8AX-iaogq&_nc_ht=scontent.fblr1-4.fna&oh=6eb06d88a3bbf5119bb5638c33d00637&oe=6176C2C1' }}
                    style={{ width: 50, height: 50, borderRadius: 50,marginRight:30 ,marginLeft:25,height:65,width:65}}
                    // resizeMode = "repea"
                    
                />
                <View style={hii.ttt}>
                    <Text style={{color: "white",fontSize:25,fontStyle:"italic"}}>Satyam Jha</Text>
                    <Text style={{color: "white",fontSize:20}}>1RN19IS136</Text>
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
        // padding: 60,
        flex:1/3,
        backgroundColor: "#4285F4",
        flexDirection: "row",
        alignItems: "center",
   
    },
    tex: {
        color: "white",
        fontSize: 20,

    },
    ttt: {
        marginLeft: -8
    }
});
export default Sidebar;