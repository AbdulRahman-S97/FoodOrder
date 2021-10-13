/*************************************************
 * FoodOrderApp
 * @exports
 * @function MenuListItem.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

 "use strict";
import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "../utils/Constants";
import PropTypes from "prop-types";
import Snackbar from "react-native-snackbar";

export default function MenuListItem(props) {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
            padding: 4,
            height: 25,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "gray", fontSize: Constants.FONT_SIZE.S }}>
            N
          </Text>
        </View>
        <View
          style={{ flexDirection: "column", flex: 1, marginHorizontal: 10 }}
        >
          <Text style={{ color: "gray", fontSize: Constants.FONT_SIZE.M }}>
            {props.item.name}
          </Text>
          <Text
            style={{
              color: "gray",
              fontSize: Constants.FONT_SIZE.S,
              marginVertical: 5,
            }}
          >
            {props.item.contents}
          </Text>
          <Text
            style={{
              color: "rgba(234,185,133,1)",
              fontSize: Constants.FONT_SIZE.L,
            }}
          >
            € {props.item.cost}
          </Text>
        </View>
        <View>
          {props.item.quantity === 0 ? (
            <TouchableOpacity
              onPress={() => {
                props.addItem(1, props.index, "add", props.item.id);
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  backgroundColor: "rgba(234,185,133,1)",
                  flexDirection: "row",
                  padding: 8,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: Constants.FONT_SIZE.SR,
                    paddingHorizontal: 15,
                    fontWeight: "500",
                  }}
                >
                  ADD
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <View
                style={{
                  alignSelf: "center",
                  borderColor: "rgba(234,185,133,1)",
                  borderWidth: 2,
                  flexDirection: "row",
                  padding: 5,
                }}
              >
                <TouchableOpacity
                  style={{ width: 20, alignItems: "center" }}
                  onPress={() => {
                    props.addItem(1, props.index, "sub", props.item.id);
                  }}
                >
                  <Text style={{ fontSize: Constants.FONT_SIZE.M }}>-</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontSize: Constants.FONT_SIZE.M,
                  }}
                >
                  {props.item.quantity}
                </Text>
                <TouchableOpacity
                  style={{ width: 20, alignItems: "center" }}
                  onPress={() => {
                    if (props.item.quantity < 20) {
                      props.addItem(1, props.index, "add", props.item.id);
                    } else {
                      Snackbar.show({
                        text: "Maximum of 20 allowed",
                        duration: Snackbar.LENGTH_LONG,
                      });
                    }
                  }}
                >
                  <Text style={{ fontSize: Constants.FONT_SIZE.M }}>+</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

// You can declare that a prop is a specific JS type.
MenuListItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
};
