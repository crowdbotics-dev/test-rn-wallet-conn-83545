import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native"; // @ts-ignore

import { utils } from "ethers";

const CurrencyList = ({
  data,
  setModalVisible,
  modalVisible,
  onItemPress
}) => {
  const pressHandler = async () => {
    setModalVisible(!modalVisible);
    onItemPress(utils.hexValue(data.chainId));
  };

  return <View style={styles.p12}>

      {modalVisible && <Pressable style={styles.LPAFQzfb} onPress={pressHandler}>
        <Text>{data.title}</Text>
      </Pressable>}
    </View>;
};

const styles = StyleSheet.create({
  p12: {
    padding: 12
  },
  LPAFQzfb: {}
});
export default CurrencyList;