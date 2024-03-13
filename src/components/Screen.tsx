import { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GLobalStyles";
import { myColors } from "../styles/color";

interface ScreenProps {
    secondNumber: string;
    result: Number | null;
    firstNumber: string; 
    operation: string;
}

const firstNumberDisplay = (result: Number | null, firstNumber: string) => {
  console.log("^^^^^^^^", firstNumber, result)
    if (result !== null) {
        return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>{result?.toString()}</Text>; 
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

export default function Screen({ secondNumber, result, firstNumber, operation}: ScreenProps) {
    const theme = useContext(ThemeContext);
    return (
        <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay(result, firstNumber)}
      </View>
    );
}