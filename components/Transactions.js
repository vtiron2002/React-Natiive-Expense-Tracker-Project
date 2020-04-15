import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { GlobalContext } from "../Context/GlobalState";
// import Transaction from "./Transaction";
import s, { darkModeColors } from "../style";

const Transactions = () => {
  const { transactions, clearAll, darkMode } = useContext(GlobalContext);
  // console.log(transactions);
  const { deleteTransaction } = useContext(GlobalContext);

  const confirmDelete = t => {
    Alert.alert(
      `You are trying to delete transaction: ${t.text} - $${t.amount}.`,
      "Are you sure you want to continue?",
      [
        {
          text: "No",
          style: "destructive"
        },
        { text: "Yes", onPress: () => deleteTransaction(t.id) }
      ],
      { cancelable: false }
    );
  };

  const confirmClearAll = () => {
    Alert.alert(
      `You are about to clear all transactions`,
      "Are you sure you want to continue?",
      [
        {
          text: "No",
          style: "destructive"
        },
        { text: "Yes", onPress: () => clearAll() }
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <View style={s.borderBottom}>
        <Text
          style={
            !darkMode
              ? { ...s.h3 }
              : { ...s.h3, color: darkModeColors.mainText }
          }
        >
          History
        </Text>
        {transactions.length > 0 && (
          <Button title="Clear all" color="red" onPress={confirmClearAll} />
        )}
      </View>
      <ScrollView contentContainerStyle={s.scrollView}>
        {transactions.length === 0 && (
          <Text
            style={
              !darkMode
                ? { color: "#333", alignSelf: "center" }
                : { color: darkModeColors.secondaryText, alignSelf: "center" }
            }
          >
            you have no transaction history
          </Text>
        )}

        {transactions.map(t => (
          <TouchableOpacity key={t.id} onPress={() => confirmDelete(t)}>
            <View
              style={
                t.amount < 0
                  ? !darkMode
                    ? { ...s.minusLi }
                    : {
                        ...s.minusLi,
                        backgroundColor: darkModeColors.secondaryBg
                      }
                  : !darkMode
                  ? { ...s.plusLi }
                  : {
                      ...s.plusLi,
                      backgroundColor: darkModeColors.secondaryBg
                    }
              }
            >
              <Text
                style={
                  !darkMode
                    ? { ...s.text }
                    : { ...s.text, color: darkModeColors.mainText }
                }
              >
                {t.text}
              </Text>
              <Text
                style={
                  !darkMode
                    ? { ...s.money }
                    : { ...s.money, color: darkModeColors.secondaryText }
                }
              >
                {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default Transactions;
