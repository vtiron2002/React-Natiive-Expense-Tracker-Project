import React, { useContext } from "react";
import { View, Text } from "react-native";
import s from "../style";
import { GlobalContext } from "../Context/GlobalState";
import { darkModeColors } from "../style";

const Balance = () => {
  const { transactions, darkMode } = useContext(GlobalContext);

  const total = transactions
    .reduce((currentTotal, t) => {
      return t.amount + currentTotal;
    }, 0)
    .toFixed(2);

  // console.log(transactions)

  return (
    <>
      <Text
        style={
          !darkMode
            ? { ...s.balance }
            : { ...s.balance, color: darkModeColors.secondaryText }
        }
      >
        Your Balance
      </Text>
      <Text style={!darkMode
        ? { ...s.balanceAmount }
        : { ...s.balanceAmount, color: darkModeColors.mainText }}>${total}</Text>
    </>
  );
};

export default Balance;
