/*************************************************
 * FoodOrderApp
 * @exports
 * @function MyCartScreen.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

"use strict";

import React, { useState, useEffect } from "react";
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
import Constants from "../utils/Constants";
import MenuListItem from "../components/MenuListItem";
import CardView from "react-native-cardview";
import { updateCount } from "../actions/CartActions";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const extractKey = ({ id }) => id;

const MyCartScreen = ({ cartCount, cartArray, navigation, ...props }) => {
  const [isDineIn, setIsDineIn] = useState(true);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {}, []);

  const _renderHeader = () => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <TouchableOpacity
          style={styles.headerTouchables}
          onPress={() => {
            navigation.pop();
          }}
        >
          <Image
            style={styles.backButton}
            source={require("../assets/images/arrow-left.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: Constants.FONT_SIZE.XXXL,
            marginLeft: 40,
            justifyContent: "center",
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          My Cart
        </Text>
      </View>
    );
  };

  const _renderTotalAmount = () => {
    let amount = 0;
    if (cartArray.length > 0) {
      cartArray.map((item, index) => {
        amount = amount + item.cost * item.quantity;
      });
      return amount;
    } else {
      return amount;
    }
  };

  const _renderTotalCost = () => {
    return (
      <CardView
        cardElevation={7}
        cardMaxElevation={7}
        cornerRadius={8}
        shadowOpacity={0.2}
        style={{
          flexDirection: "row",
          backgroundColor: Constants.COLOR.WHITE_COLOR,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          marginHorizontal: 120,
          marginVertical: 50,
        }}
      >
        <View style={{ flex: 1, alignItems: "center", paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: Constants.FONT_SIZE.L,
              fontWeight: "400",
              marginBottom: 10,
              color: "rgba(234,185,133,1)",
            }}
          >
            Total Cost
          </Text>
          <Text
            style={{
              fontSize: Constants.FONT_SIZE.XXL,
              fontWeight: "400",
              color: "black",
            }}
          >
            €{_renderTotalAmount()}
          </Text>
        </View>
      </CardView>
    );
  };

  const _onAddClicked = (value, index, type, id) => {
    props.updateCount(value, index, type, id);
  };

  const _renderCartList = ({ item, index }) => {
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

  const _renderFooter = () => {
    return (
      <View>
        {cartArray.length > 2 ? (
          <TouchableOpacity onPress={() => setViewMore(!viewMore)}>
            <Text
              style={{
                alignSelf: "flex-end",
                textDecorationLine: "underline",
                fontSize: Constants.FONT_SIZE.M,
              }}
            >
              {viewMore ? "Show Less" : "Show More"}
            </Text>
          </TouchableOpacity>
        ) : null}

        <Text
          style={{
            color: "black",
            fontSize: Constants.FONT_SIZE.L,
            marginTop: 20,
          }}
        >
          Delivery Options
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
            marginHorizontal: 20,
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: "black",
              marginHorizontal: 10,
            }}
            source={require("../assets/images/restaurant.png")}
          />
          <Text
            style={{
              fontSize: Constants.FONT_SIZE.M,
              color: "gray",
              alignSelf: "center",
            }}
          >
            Dine-In
          </Text>
          <TouchableOpacity
            style={{ justifyContent: "center", marginHorizontal: 20 }}
            onPress={() => {
              setIsDineIn(!isDineIn);
            }}
          >
            <View
              style={{
                borderColor: isDineIn ? "rgba(234,185,133,1)" : "#DDDDDD",
                height: 20,
                width: 20,
                borderRadius: 10,
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: isDineIn ? "rgba(234,185,133,1)" : "white",
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                }}
              ></View>
            </View>
          </TouchableOpacity>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: "black",
              marginHorizontal: 10,
            }}
            source={require("../assets/images/food-delivery.png")}
          />
          <Text
            style={{
              fontSize: Constants.FONT_SIZE.M,
              color: "gray",
              alignSelf: "center",
            }}
          >
            Take way
          </Text>
          <TouchableOpacity
            style={{ justifyContent: "center", marginHorizontal: 20 }}
            onPress={() => {
              setIsDineIn(!isDineIn);
            }}
          >
            <View
              style={{
                borderColor: !isDineIn ? "rgba(234,185,133,1)" : "#DDDDDD",
                height: 20,
                width: 20,
                borderRadius: 10,
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: !isDineIn ? "rgba(234,185,133,1)" : "white",
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                }}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "black",
            fontSize: Constants.FONT_SIZE.L,
            marginTop: 20,
          }}
        >
          Manage Cards
        </Text>
      </View>
    );
  };

  return (
    <Container>
      <View
        style={{
          backgroundColor: "rgba(10,30,45,1)",
          height: deviceHeight / 3.5,
        }}
      >
        {_renderHeader()}
        {_renderTotalCost()}
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          backgroundColor: Constants.COLOR.WHITE_COLOR,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: Constants.FONT_SIZE.L,
            marginTop: 20,
          }}
        >
          Review Orders
        </Text>
        <View style={{ flex: 1, marginTop: 20 }}>
          <FlatList
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            data={!viewMore ? cartArray.slice(0, 2) : cartArray}
            renderItem={_renderCartList}
            keyExtractor={extractKey}
            ListFooterComponent={_renderFooter.bind(this)}
          />
        </View>
      </View>
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
          onPress={() => {}}
        >
          <Text
            style={{
              color: "white",
              fontSize: Constants.FONT_SIZE.M,
              alignSelf: "center",
              fontWeight: "500",
            }}
          >
            PLACE ORDER
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {
    cartState: { cartCount, cartArray },
  } = state;

  return {
    cartCount,
    cartArray,
  };
};
const mapDispatchToProps = {
  updateCount: updateCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCartScreen);

const styles = StyleSheet.create({
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
  headerTouchables: {
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    backgroundColor:
      Platform.OS === "ios" ? "transparent" : "rgba(0, 0, 0, 0.25)",
  },
});
