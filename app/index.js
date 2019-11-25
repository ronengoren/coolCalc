import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Row from './components/Row';
import Btn from './components/Button';
import calculator, {initialState} from './util/calculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  number: {
    color: '#fff',
    textAlign: 'right',
    padding: 10,
    fontSize: 36,
    // borderBottomWidth: 0.5,
    // borderColor: "#19153E"
  },
  top: {
    paddingTop: 120,
  },
  bottom: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: '#19153E',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberBTS: {
    color: '#6191FF',
    textAlign: 'right',
    padding: 10,
    fontSize: 26,
  },
  numberBTSL: {
    color: '#FDFCFC',
    textAlign: 'right',
    padding: 10,
    fontSize: 26,
  },
});

export default class App extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    colorView: true,
    waitingForOperand: false,
    operator: null,
    bts: ' ',
  };
  render() {
    const {displayValue} = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={
            this.state.colorView
              ? ['#6191FF', '#4439A7']
              : ['#FF9B61', '#D57B9E']
          }
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <View style={styles.top}>
            {this.state.colorView ? (
              <Icon
                name="toggle-right"
                size={32}
                color="#fff"
                onPress={this.toggleColor}
                colorText={this.state.colorView}
                style={{bottom: 90, paddingLeft: 20}}
              />
            ) : (
              <Icon
                name="toggle-left"
                size={32}
                color="#575757"
                onPress={this.toggleColor}
                colorText={this.state.colorView}
                style={{bottom: 90, paddingLeft: 20}}
              />
            )}

            <Text
              style={
                this.state.colorView ? styles.numberBTS : styles.numberBTSL
              }>
              {this.state.bts}
            </Text>
            <Text style={styles.number}>{displayValue}</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={
            this.state.colorView ? ['#37498F', '#19153E'] : ['#fff', '#fff']
          }
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          style={styles.bottom}>
          <View style={styles.row}>
            <Btn
              text="AC"
              colorText={this.state.colorView}
              onPress={this.clearDisplay}
            />
            <Btn
              text="±"
              colorText={this.state.colorView}
              onPress={this.toggleSign}
            />
            <Btn
              text="%"
              colorText={this.state.colorView}
              onPress={this.inputPercent}
            />
            <Btn
              text="/"
              colorText={this.state.colorView}
              onPress={() => this.performOperation('/')}
            />
          </View>
          <View style={styles.row}>
            <Btn
              text="7"
              onPress={() => this.inputDigit(7)}
              colorText={this.state.colorView}
            />
            <Btn
              text="8"
              onPress={() => this.inputDigit(8)}
              colorText={this.state.colorView}
            />
            <Btn
              text="9"
              onPress={() => this.inputDigit(9)}
              colorText={this.state.colorView}
            />
            <Btn
              text="x"
              colorText={this.state.colorView}
              onPress={() => this.performOperation('x')}
            />
          </View>
          <View style={styles.row}>
            <Btn
              text="4"
              onPress={() => this.inputDigit(4)}
              colorText={this.state.colorView}
            />
            <Btn
              text="5"
              onPress={() => this.inputDigit(5)}
              colorText={this.state.colorView}
            />
            <Btn
              text="6"
              onPress={() => this.inputDigit(6)}
              colorText={this.state.colorView}
            />
            <Btn
              text="-"
              colorText={this.state.colorView}
              onPress={() => this.performOperation('-')}
            />
          </View>
          <View style={styles.row}>
            <Btn
              text="1"
              onPress={() => this.inputDigit(1)}
              colorText={this.state.colorView}
            />
            <Btn
              text="2"
              onPress={() => this.inputDigit(2)}
              colorText={this.state.colorView}
            />
            <Btn
              text="3"
              onPress={() => this.inputDigit(3)}
              colorText={this.state.colorView}
            />
            <Btn
              text="+"
              colorText={this.state.colorView}
              onPress={() => this.performOperation('+')}
            />
          </View>
          <View style={styles.row}>
            <Btn
              text="0"
              colorText={this.state.colorView}
              onPress={() => this.inputDigit(0)}
              zero
            />

            <Btn
              text="."
              colorText={this.state.colorView}
              onPress={this.inputDot}
            />
            <LinearGradient
              style={styles.button}
              colors={
                this.state.colorView
                  ? ['#6191FF', '#4439A7']
                  : ['#FF9B61', '#D57B9E']
              }
              start={{x: 0.1, y: 0.1}}
              end={{x: 1, y: 1}}>
              <TouchableOpacity
                // style={styles.button}
                onPress={() => this.performOperation('=')}>
                <Text
                  style={{color: '#fff', fontSize: 36}}
                  colorText={this.state.colorView}>
                  {'='}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
