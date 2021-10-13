import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

} from "react-native";
import Constants from "../utils/Constants";

export default function MenuListItem() {
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
            Guac de la Costa
          </Text>
          <Text
            style={{
              color: "gray",
              fontSize: Constants.FONT_SIZE.S,
              marginVertical: 5,
            }}
          >
            adsfsadfadfsdsf asddfsasdfsdfds asdfsd
          </Text>
          <Text
            style={{
              color: "rgba(234,185,133,1)",
              fontSize: Constants.FONT_SIZE.L,
            }}
          >
            € 7
          </Text>
        </View>
        <View>
          {1 ? (
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
          ) : (
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
                onPress={() => {}}
              >
                <Text style={{ fontSize: Constants.FONT_SIZE.M }}>-</Text>
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: Constants.FONT_SIZE.M,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{ width: 20, alignItems: "center" }}
                onPress={() => {}}
              >
                <Text style={{ fontSize: Constants.FONT_SIZE.M }}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
