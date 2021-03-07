import React, { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { SearchBar } from "react-native-elements";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

import NotificationScreen from "./NotificationScreen";
import ProfileSceen from "./ProfileSceen";

import { UserDispatch } from "../reducer/userReducer";

// temporary data until we pull from API

const MainScreen = () => {
  const { userState } = useContext(UserDispatch);
  const [feeds, setFeeds] = useState([]);
  const userToken = userState?.token;

  useEffect(() => {
    async function fetchFeed() {
      try {
        const response = await axios({
          method: "get",
          url: "http://cca94326f6ae.ngrok.io/posts",
          headers: { Authorization: userToken },
        });
        console.warn(response);
      } catch (e) {
        Alert.alert("Something went wrong", "Please try again later.");
      }
    }

    fetchFeed();
  }, []);

  const renderPost = (post) => {
    return (
      <View style={styles.feedItem}>
        <Image source={post.avatar} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.name}>{post.name}</Text>
              <Text style={styles.timestamp}>
                {moment(post.timestamp).fromNow()}
              </Text>
            </View>

            <Ionicons name="ios-more" size={24} color="#73788B" />
          </View>
          <Text style={styles.post}>{post.text}</Text>
          <Image
            source={post.image}
            style={styles.postImage}
            resizeMode="cover"
          />
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ios-heart-empty"
              size={24}
              color="#73788B"
              style={{ marginRight: 16 }}
            />
            <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
      </View>
      <FlatList
        style={styles.feed}
        data={feeds}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBECF4",
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#454D65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  feed: {
    marginHorizontal: 15,
  },
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65",
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4,
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: "#838899",
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16,
  },
});

