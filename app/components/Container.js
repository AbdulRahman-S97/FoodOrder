/*************************************************
 * FoodOrderApp
 * Container
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/

"use strict";
import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import Constants from "../utils/Constants";

const Container = (props) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <Fragment>
      <StatusBar barStyle={isDarkMode ? props.barStyle : "dark-content"} />
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: isDarkMode ? Constants.COLOR.DARK_MODE : Constants.COLOR.WHITE_COLOR,
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: !isDarkMode
            ? props.backgroundColor
            : Constants.COLOR.DARK_MODE,
        }}
      >
        {props.children}
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: props.bottomColor }} />
    </Fragment>
  );
};

Container.defaultProps = {
  barStyle: "light-content",
  topColor: Constants.COLOR.WHITE_COLOR,
  backgroundColor: Constants.COLOR.WHITE_COLOR,
  bottomColor: Constants.COLOR.WHITE_COLOR,
};

export default Container;
