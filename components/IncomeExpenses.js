import React, { useContext } from "react";
import { View, Text } from "react-native";
import s from "../style";
import { GlobalContext } from "../Context/GlobalState";
import { darkModeColors } from "../style";

const IncomeExpenses = () => {
  const { transactions, darkMode } = useContext(GlobalContext);

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((prev, next) => prev + next.amount, 0);

  const expenses = transactions
    .filter(t => t.amount < 0)
    .reduce((prev, next) => prev + next.amount, 0);

  return (
    <View
      style={
        !darkMode
          ? { ...s.IncomeExpensesContainer }
          : {
              ...s.IncomeExpensesContainer,
              backgroundColor: darkModeColors.secondaryBg
            }
      }
    >
      <View
        style={
          !darkMode
            ? { ...s.flex, ...s.incomeBorder }
            : {
                ...s.flex,
                ...s.incomeBorder,
                borderRightColor: darkModeColors.secondaryText
              }
        }
      >
        <Text
          style={
            !darkMode
              ? { ...s.h4 }
              : { ...s.h4, color: darkModeColors.secondaryText }
          }
        >
          Income
        </Text>
        <Text style={s.moneyPlus}>
          {income === 0 ? "$0" : `+$${income.toFixed(2)}`}
        </Text>
      </View>
      <View style={s.flex}>
        <Text
          style={
            !darkMode
              ? { ...s.h4 }
              : { ...s.h4, color: darkModeColors.secondaryText }
          }
        >
          Expense
        </Text>
        <Text style={s.moneyMinus}>
          {expenses === 0 ? "$0" : `-$${Math.abs(expenses).toFixed(2)}`}
        </Text>
      </View>
    </View>
  );
};

export default IncomeExpenses;
