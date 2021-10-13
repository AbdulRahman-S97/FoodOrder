/*************************************************
 * FoodOrderApp
 * @exports
 * @function RestaurantDetailScreen.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

"use strict";

import React, { useState } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
  FlatList,
} from "react-native";
import Container from "../components/Container";
import FastImage from "react-native-fast-image";
import { BlurView } from "@react-native-community/blur";
import RestaurantCard from "../components/RestaurantCard";
import Constants from "../utils/Constants";
import MenuListItem from "../components/MenuListItem";
import { updateCount } from "../actions/CartActions";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const resObj = {
  name: "Inka Restaurant",
  rating: "5.0(200+)",
  timings: "09:00 AM - 06:00 PM",
  phoneNo: 9854562142,
};

const extractKey = ({ id }) => id;

const RestaurantDetailScreen = ({
  navigation,
  menuArray,
  cartCount,
  cartArray,
  ...props
}) => {
  const [restaurantDetail, setRestaurantDetail] = useState(resObj);

  const _renderHeaderTab = () => {
    return (
      <View style={styles.headerParentView}>
        <View style={{ flex: 1 }}>
          {Platform.OS === "ios" ? (
            <BlurView
              style={styles.absolute}
              blurType="ultraThinMaterialDark"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
          ) : null}
          <TouchableOpacity style={styles.headerTouchables} onPress={() => {}}>
            <Image
              style={styles.backButton}
              source={require("../assets/images/arrow-left.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {Platform.OS === "ios" ? (
            <BlurView
              style={styles.absolute}
              blurType="ultraThinMaterialDark"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
          ) : null}
          <TouchableOpacity style={styles.headerTouchables} onPress={() => {}}>
            <Image
              style={styles.backButton}
              source={require("../assets/images/share.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
          {Platform.OS === "ios" ? (
            <BlurView
              style={styles.absolute}
              blurType="ultraThinMaterialDark"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
          ) : null}
          <TouchableOpacity style={styles.headerTouchables} onPress={() => {}}>
            <Image
              style={styles.backButton}
              source={require("../assets/images/information.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _onAddClicked = (value, index, type, id) => {
    props.updateCount(value, index, type, id);
  };

  const _renderMenuList = ({ item, index }) => {
    return (
      <MenuListItem
        item={item}
        index={index}
        addItem={(value, indx, type, id) => {
          _onAddClicked(value, indx, type, id);
        }}
      />
    );
  };

  const _renderHeader = () => {
    return (
      <View>
        <FastImage
          placeholderStyle={styles.ImageBackgroundStyle}
          resizeMode={FastImage.resizeMode.cover}
          source={require("../assets/images/foodbowlImage.jpeg")}
          style={styles.ImageBackgroundStyle}
        />
        {_renderHeaderTab()}
        <View style={{ marginTop: deviceHeight / 4.5, marginHorizontal: 20 }}>
          <RestaurantCard item={restaurantDetail} />
          <Text
            style={{
              color: "black",
              fontSize: Constants.FONT_SIZE.L,
              marginTop: 30,
            }}
          >
            Starter
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          data={menuArray}
          renderItem={_renderMenuList}
          keyExtractor={extractKey}
          ListHeaderComponent={_renderHeader.bind(this)}
          //   ListFooterComponent={}
        />
        <View
          style={{
            height: 60,
            backgroundColor: "rgba(10,30,45,1)",
            alignItems: "center",
            padding: 15,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignSelf: "center" }}
            onPress={() => {
              navigation.navigate("Cart", {});
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: "white",
                marginHorizontal: 10,
              }}
              source={require("../assets/images/shopping-cart.png")}
            />
            <Text
              style={{
                color: "white",
                fontSize: Constants.FONT_SIZE.M,
                alignSelf: "center",
                fontWeight: "500",
              }}
            >
              {cartCount > 0
                ? "VIEW CART " + cartCount + " ITEMS"
                : "VIEW CART"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 80,
          alignSelf: "center",
          backgroundColor: "rgba(234,185,133,1)",
          flexDirection: "row",
          padding: 8,
          borderRadius: 5,
        }}
      >
        <Image
          style={{
            height: 22,
            width: 22,
            tintColor: "black",
            marginHorizontal: 5,
          }}
          source={require("../assets/images/dinner.png")}
        />
        <Text style={{ color: "black", fontSize: Constants.FONT_SIZE.M }}>
          MENU
        </Text>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {
    cartState: { menuArray, cartCount, cartArray },
  } = state;

  return {
    menuArray,
    cartCount,
    cartArray,
  };
};
const mapDispatchToProps = {
  updateCount: updateCount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetailScreen);

const styles = StyleSheet.create({
  ImageBackgroundStyle: {
    width: deviceWidth,
    height: deviceHeight / 3.5,
    position: "absolute",
    zIndex: -1,
    flex: 1,
    resizeMode: "cover",
  },
  backButton: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 25,
    width: 50,
  },
  headerParentView: {
    position: "absolute",
    top: 0,
    left: 20,
    right: 20,
    flex: 1,
    paddingTop: 10,
    flexDirection: "row",
  },
  headerTouchables: {
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      Platform.OS === "ios" ? "transparent" : "rgba(0, 0, 0, 0.25)",
  },
});
