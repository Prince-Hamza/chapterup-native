import React, { useState, useEffect } from "react";
import {
    ScrollView,
    StyleSheet,
    Image,
    Text,
    View,
    FlatList
} from "react-native";
import axios from "axios";

const Scroller = () => {
    const [restaurantInfo, setRestaurantInfo] = useState([]);

    useEffect(() => {

        var totalList = []

        const repeat = (res) => {
            res.data.data.forEach((item) => { totalList.push(item) })
        }

        const getRestaurantInfo = async () => {

            try {
                let res = await axios({
                    method: "get",
                    url: `https://reqres.in/api/users?page=2`
                })
                repeat(res)
                repeat(res)
                repeat(res)
                setRestaurantInfo(totalList)
            } catch (error) {
                console.error(error);
            }
        };
        getRestaurantInfo();
    }, []);

    // Destructuring data, This passed from Flatlist > data prop
    const renderRestaurantInfo = ({ first_name, last_name, email, avatar }) => {
        return (
            <View style={styles.list}>
                <Image
                    source={{ uri: avatar }}
                    style={styles.avatar}
                    resizeMode="center"
                />

                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text>
                        {first_name} {last_name}
                    </Text>
                    <Text>{email}</Text>
                </View>
            </View>
        );
    };

    return (
        <FlatList
            data={restaurantInfo}
            renderItem={({ item }) => renderRestaurantInfo(item)}
            keyExtractor={item => item.id * Math.random()}
            contentContainerStyle={{
                flexGrow: 1,
            }}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 8,
        backgroundColor: "#e9e9e9",
        marginVertical: 2,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    avatar: {
        width: 50,
        height: 50
    }
});

export default Scroller;
