import React from 'react'
import { CustomPicker, CustomPickerProps } from 'react-native-custom-picker'
import theme, { Text } from '../../theme'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const SelectInput = ({
  options,
  placeholder,
  onValueChange,
  title,
  value,
}: CustomPickerProps & any) => {
  return (
    <View>
      <Text variant='body' color='darkSilver' marginBottom='s'>
        {title} *
      </Text>
      <CustomPicker
        value={value}
        containerStyle={styles.container}
        options={options}
        placeholder={placeholder}
        onValueChange={onValueChange}
        fieldTemplateProps={{
          containerStyle: styles.innerContainer,
          textStyle: theme.textVariants.body,
          clearImage: <Icon name='x' size={20} />,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 10,
    height: 45,
    padding: 0,
    marginBottom: theme.spacing.m,
  },
  innerContainer: {
    borderBottomWidth: 0,
    height: 25,
  },
})

export default SelectInput
