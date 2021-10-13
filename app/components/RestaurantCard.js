/*************************************************
 * FoodOrderApp
 * @exports
 * @function RestaurantCard.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

 "use strict";

import React, { useState, useEffect } from "react";
import CardView from "react-native-cardview";
import Constants from "../utils/Constants";
import { View, Text, Image } from "react-native";

const areEqual = (prevProps, nextProps) => true;

const RestaurantCard = React.memo((props) => {
  return (
    <View>
      <CardView
        cardElevation={7}
        cardMaxElevation={7}
        cornerRadius={5}
        shadowOpacity={0.2}
        style={{
          flexDirection: "row",
          backgroundColor: Constants.COLOR.WHITE_COLOR,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
      >
        <View style={{ flex: 1, alignItems: "center", paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: Constants.FONT_SIZE.XXL,
              fontWeight: "400",
              marginBottom: 20,
            }}
          >
            {props.item.name}
          </Text>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Image
              style={{
                height: 18,
                width: 18,
                tintColor: "gray",
                marginHorizontal: 5,
              }}
              source={require("../assets/images/star.png")}
            />
            <Text style={{ color: "gray", fontSize: Constants.FONT_SIZE.M }}>
              {props.item.rating}
            </Text>
            <Text style={{ color: "gray", fontSize: Constants.FONT_SIZE.M }}>
              {" "}
              | All days : {props.item.timings}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                height: 18,
                width: 18,
                tintColor: "black",
                marginHorizontal: 5,
              }}
              source={require("../assets/images/phone-call.png")}
            />
            <Text style={{ color: "gray", fontSize: Constants.FONT_SIZE.M }}>
              Reach us at : {props.item.phoneNo}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "center",
              backgroundColor: "rgba(10,30,46,1)",
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: Constants.COLOR.WHITE_COLOR,
                padding: 10,
                marginHorizontal: 10,
                fontWeight: "400",
              }}
            >
              BOOK A TABLE
            </Text>
          </View>
        </View>
      </CardView>
    </View>
  );
}, areEqual);

export default RestaurantCard;
