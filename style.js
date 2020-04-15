import { StyleSheet } from "react-native";


const shadow = {
  shadowColor: "black",
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2
};

const li = {
  ...shadow,
  borderRightWidth: 5,
  backgroundColor: "white",
  color: "#333",
  padding: 10,
  marginVertical: 4,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between"
};

const lightModeStyle = {
  keyboard: {
    flex: 1,
    backgroundColor: "#f7f7f7"
  },
  screen: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center"
    // backgroundColor: "orange"
  },
  container: {
    // backgroundColor: "red",
    marginVertical: 30,
    marginHorizontal: "auto",
    width: "90%",
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15
  },
  balance: {
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 10
  },
  balanceAmount: {
    fontSize: 30
  },
  IncomeExpensesContainer: {
    backgroundColor: "white",
    ...shadow,
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 20,
    borderRadius: 6
  },
  h4: {
    textTransform: "uppercase",
    fontWeight: "500"
  },
  moneyPlus: {
    color: "#2ecc71",
    fontSize: 26
  },
  moneyMinus: {
    color: "#c0392b",
    fontSize: 26
  },
  incomeBorder: {
    borderRightColor: "#dedede",
    borderRightWidth: 1
  },
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  h3: {
    marginVertical: 10,
    fontWeight: "600",
    fontSize: 20
  },
  borderBottom: {
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ul: {
    marginBottom: 30,
    paddingVertical: 7
  },
  plusLi: {
    ...li,
    borderRightColor: "#2ecc71"
  },
  minusLi: {
    ...li,
    borderRightColor: "#c0392b"
  },
  text: {
    fontSize: 14
  },
  money: {
    color: "#333"
  },
  textInput: {
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    backgroundColor: "white",
    marginVertical: 5,
    ...shadow
  },
  scrollView: {
    minHeight: 100,
    maxHeight: 150
  }
};

export const darkModeColors = {
  primaryBg: "#121212",
  secondaryBg: "#2C2C2C",
  mainText: "#E1E1E1",
  secondaryText: '#A5A5A5'
};

const darkModeStyle = {
  keyboard: {
    flex: 1,
    backgroundColor: "red"
  },
  screen: {
    flex: 1,
    backgroundColor: darkModeColors.primaryBg,
    alignItems: "center",
    justifyContent: "center"
    // backgroundColor: "orange"
  },
  container: {
    // backgroundColor: "red",
    marginVertical: 30,
    marginHorizontal: "auto",
    width: "90%",
    padding: 10
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    color: darkModeColors.mainText
  },
  balance: {
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 10,
    color: darkModeColors.mainText
  },
  balanceAmount: {
    fontSize: 30,
    color: darkModeColors.mainText
  },
  IncomeExpensesContainer: {
    backgroundColor: darkModeColors.secondaryBg,
    ...shadow,
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 20
  },
  h4: {
    textTransform: "uppercase",
    fontWeight: "500",
    color: darkModeColors.mainText
  },
  moneyPlus: {
    color: "#2ecc71",
    fontSize: 26
  },
  moneyMinus: {
    color: "#c0392b",
    fontSize: 26
  },
  incomeBorder: {
    borderRightColor: "#dedede",
    borderRightWidth: 1
  },
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  h3: {
    marginVertical: 10,
    fontWeight: "600",
    fontSize: 20,
    color: darkModeColors.mainText
  },
  borderBottom: {
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ul: {
    marginBottom: 30,
    paddingVertical: 7
  },
  plusLi: {
    ...li,
    borderRightColor: "#2ecc71",
    backgroundColor: darkModeColors.secondaryBg
  },
  minusLi: {
    ...li,
    borderRightColor: "#c0392b"
  },
  text: {
    fontSize: 14,
    color: darkModeColors.mainText
  },
  money: {
    color: darkModeColors.mainText
  },
  textInput: {
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    backgroundColor: darkModeColors.secondaryBg,
    marginVertical: 5,
    ...shadow
  },
  scrollView: {
    maxHeight: 100
  }
};

// export default s = StyleSheet.create(
//   !darkMode ? { ...lightModeStyle } : { darkModeStyle }
// );

export default s = StyleSheet.create({
  ...lightModeStyle
});
