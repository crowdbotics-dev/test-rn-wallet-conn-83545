import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "react-native";

const HistoryItem = props => {
  return <View style={_styles.ZreGrbYm}>
        <View style={_styles.nPfBjcNO}>
            <Text style={_styles.NrEcFaXc}>From</Text>
            <Text>{props.title.from}</Text>
        </View>
        <View style={_styles.ghxnHBYe}>
            <Text style={_styles.uTAmTzrd}>To:</Text>
            <Text>{props.title.to}</Text>
        </View>
        <View style={_styles.dUvCQGVI}>
            <Text style={_styles.BKUyDPPC}>Amount</Text>
            <Text>{props.title.value}</Text>
        </View>

    </View>;
};

export default HistoryItem;

const _styles = StyleSheet.create({
  ZreGrbYm: {
    backgroundColor: "white",
    borderRadius: 2
  },
  nPfBjcNO: {
    display: "flex",
    flexDirection: "row"
  },
  NrEcFaXc: {
    width: "20%"
  },
  ghxnHBYe: {
    display: "flex",
    flexDirection: "row"
  },
  uTAmTzrd: {
    width: "20%"
  },
  dUvCQGVI: {
    display: "flex",
    flexDirection: "row"
  },
  BKUyDPPC: {
    width: "20%"
  }
});