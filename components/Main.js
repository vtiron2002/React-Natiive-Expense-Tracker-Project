import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  StatusBar
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import Transactions from "./Transactions";
import AddTransaction from "./AddTransaction";
import { GlobalContext } from "../Context/GlobalState";
import s from "../style";
import { darkModeColors } from "../style";

const Main = () => {
  const { darkMode } = useContext(GlobalContext);

  // console.log(darkMode);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <View
          style={
            !darkMode
              ? { ...s.screen }
              : { ...s.screen, backgroundColor: darkModeColors.primaryBg }
          }
        >
          <StatusBar barStyle={!darkMode ? "dark-content" : "light-content"} />
          <View style={s.container}>
            <Header />
            <Balance />
            <IncomeExpenses />
            <AddTransaction />
            <Transactions />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Main;
