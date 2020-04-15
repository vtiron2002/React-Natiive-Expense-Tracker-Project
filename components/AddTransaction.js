import React, { useContext, useState, useRef } from "react";
import { View, Text, TextInput, Button, Keyboard, Alert } from "react-native";
import s from "../style";
import { GlobalContext } from "../Context/GlobalState";
import { darkModeColors } from "../style";

const AddTransaction = () => {
  const { transactions, addTransaction, darkMode } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const amountRef = useRef()
  const addNew = () => {
    if (text === "") {
      Alert.alert("Please enter a description");
    } else if (amount === "" || isNaN(amount)) {
      Alert.alert("Please check/enter the amount");
    } else {
      addTransaction({
        id: Math.floor(Math.random() * 100000),
        text,
        amount: +amount
      });
      setText("");
      setAmount("");
      Keyboard.dismiss();
    }
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
          Add transaction
        </Text>
      </View>
      <TextInput
        placeholderTextColor={!darkMode ? "#333" : darkModeColors.secondaryText}
        placeholder="Enter Description..."
        style={
          !darkMode
            ? { ...s.textInput }
            : {
                ...s.textInput,
                backgroundColor: darkModeColors.secondaryBg,
                borderColor: darkModeColors.secondaryText,
                color: "white"
              }
        }
        returnKeyType="next"
        enablesReturnKeyAutomatically
        keyboardAppearance="dark"
        value={text}
        onChangeText={e => setText(e)}
        onSubmitEditing={() => amountRef.current.focus()}
      />
      <TextInput
        placeholderTextColor={!darkMode ? "#333" : darkModeColors.secondaryText}
        placeholder="Enter Amount..."
        style={
          !darkMode
            ? { ...s.textInput }
            : {
                ...s.textInput,
                backgroundColor: darkModeColors.secondaryBg,
                borderColor: darkModeColors.secondaryText,
                color: "white"
              }
        }
        returnKeyType="done"
        enablesReturnKeyAutomatically
        keyboardAppearance="dark"
        value={amount}
        onChangeText={e => setAmount(e)}
        ref={amountRef}
        onSubmitEditing={addNew}
      />
      <Button title="Add Transaction" onPress={addNew} />
    </>
  );
};

export default AddTransaction;
