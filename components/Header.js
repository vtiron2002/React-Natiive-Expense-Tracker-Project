import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import s from "../style";
import { GlobalContext } from "../Context/GlobalState";
import { darkModeColors } from "../style";
import DarkIcon from "../assets/baseline_brightness_6_black_36dp.png";
import LightIcon from "../assets/baseline_brightness_6_white_36dp.png";

const Header = () => {
  const { toggleDarkMode, darkMode } = useContext(GlobalContext);

  // console.log('Dark Mode: ' + darkMode)

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Text
        style={
          !darkMode
            ? { ...s.header }
            : { ...s.header, color: darkModeColors.mainText }
        }
      >
        Expense Tracker
      </Text>
      {/* <Button title={!darkMode ? "Dark" : "Light"} onPress={toggleDarkMode} /> */}
      <TouchableOpacity onPress={toggleDarkMode}>
        <Image
          source={!darkMode ? DarkIcon : LightIcon}
          
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
