import React from 'react'
import theme, { Text } from '../../theme'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
  ScrollView,
} from 'react-native'

type RadioGroupProps = {
  options: Array<string>
  activeButton: string
  onChange: Function
  containerStyle?: ViewStyle
  buttonStyle?: ViewStyle
}
const RadioGroup = ({
  options,
  activeButton,
  onChange,
  containerStyle,
  buttonStyle,
}: RadioGroupProps) => {
  return (
    <ScrollView horizontal style={[containerStyle, styles.containerStyle]}>
      {options.map((data) => {
        return (
          <RadioButton
            label={data}
            key={data}
            activeButton={activeButton}
            buttonStyle={buttonStyle}
            onChange={onChange}
          />
        )
      })}
    </ScrollView>
  )
}

type RadioButtonProps = {
  label: string
  onChange: Function
  buttonStyle?: ViewStyle
  activeButton: string
}

const RadioButton = ({
  label,
  onChange,
  buttonStyle,
  activeButton,
}: RadioButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onChange(label)}
      style={[buttonStyle, styles.buttonStyle]}>
      <View
        style={[
          styles.radio,
          {
            borderColor:
              activeButton === label ? 'black' : theme.colors.darkSilver,
          },
        ]}>
        {activeButton === label ? <View style={[styles.fill]}></View> : null}
      </View>
      <Text
        variant='body'
        color={activeButton === label ? 'text' : 'darkSilver'}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing.m,
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fill: {
    backgroundColor: 'black',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
})

export default RadioGroup
