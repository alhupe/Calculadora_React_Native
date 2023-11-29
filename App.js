import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('Hola');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(false);

  const handleNumberPress = (number) => {
    if (number === 'C') {
      setDisplay(0);
    } else if (number === '.' && display.includes('.')) {
      return;
    } else if (number === '-' && display.includes('-')) {
      return;
    } else if (
      display === 0 ||
      display === 'Hola' ||
      display === '' ||
      result
    ) {
      setDisplay(number.toString());
      setResult(false);
    } else if (display.length < 12) {
      setDisplay(display + number);
    }
  };

  const handleOperatorPress = (operator) => {
    let num = parseFloat(display);
    let newResult;

    if (
      operator !== '+' &&
      operator !== '-' &&
      operator !== 'x' &&
      operator !== '/'
    ) {
      switch (operator) {
        case 'sen':
          newResult = Math.sin(num);
          break;
        case 'cos':
          newResult = Math.cos(num);
          break;
        case 'tan':
          newResult = Math.tan(num);
          break;
        case 'deg':
          newResult = num * (180 / Math.PI);
          break;
        case 'ln':
          newResult = Math.log(parseFloat(display));
          break;
        case 'log':
          newResult = Math.log10(parseFloat(display));
          break;
        case 'rad':
          newResult = num * (Math.PI / 180);
          break;
        case '1/X':
          newResult = 1 / num;
          break;
        case '!':
          if (num < 0) {
            newResult = 'Error';
          } else if (num === 0) {
            newResult = 1;
          } else {
            let factorial = 1;
            for (let i = 1; i <= num; i++) {
              factorial *= i;
            }
            newResult = factorial;
          }
          break;
        case '√':
          newResult = Math.sqrt(parseFloat(display));
          break;
        default:
          setOperator(operator);
          setValue1(parseFloat(display));
          setValue2('');
          break;
      }
      setDisplay(newResult);
      setValue1(newResult);
      setOperator(operator);
    } else {
      setOperator(operator);
      setValue1(display);
      setDisplay('');
      setResult(false);
    }
  };

  const handleEqualPress = () => {
    if (value1 !== '' && operator !== '' && display !== '') {
      const num1 = parseFloat(value1);
      const num2 = parseFloat(display);
      let newResult;
      switch (operator) {
        case '+':
          newResult = num1 + num2;
          break;
        case '-':
          newResult = num1 - num2;
          break;
        case 'x':
          newResult = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            newResult = num1 / num2;
          } else {
            newResult = 'No se puede dividir por 0';
          }
          break;
        default:
          newResult = 'Error';
          break;
      }
      setValue1(newResult.toString());
      setDisplay(newResult.toString());
      setOperator('');
      setResult(true);
    }
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 80,
      }}>
      <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Calculadora</Text>

      <View style={{ marginTop: 5 }}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            height: 70,
            width: 340,
            borderRadius: 4,
            borderWidth: 1,
          }}>
          <Text style={{ fontSize: 50, textAlign: 'right', flex: 1 }}>
            {display}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('sen')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>sen</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('cos')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>cos</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('tan')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>tan</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('deg')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>deg</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('ln')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>ln</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('log')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>log</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(Math.PI)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>&Pi;</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('rad')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>rad</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('1/X')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>1/X</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('!')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>!</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('√')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>√</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('/')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>/</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(7)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>7</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(8)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>8</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(9)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('x')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>x</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(4)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>4</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(5)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>5</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(6)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress('-')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(1)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(2)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(3)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleOperatorPress('+')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress('C')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>C</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress(0)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Text>0</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleNumberPress('.')}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>,</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 3 }}>
            <TouchableOpacity
              onPress={() => handleEqualPress(value2, value1, operator)}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'gray',
              }}>
              <Text>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
