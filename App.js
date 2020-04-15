import React, { useContext } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import Balance from "./components/Balance";
import s from "./style";
import IncomeExpenses from "./components/IncomeExpenses";
// import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider, GlobalContext } from "./Context/GlobalState";
import Transactions from "./components/Transactions";
import { darkModeColors } from "./style";
import Main from "./components/Main";

export default function App() {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}
