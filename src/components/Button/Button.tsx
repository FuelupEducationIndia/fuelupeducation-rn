import React from 'react'
import { BaseButton, Text, Theme, useTheme } from '../../theme'
import Icon from 'react-native-vector-icons/Feather'
import { ActivityIndicator } from 'react-native'

export interface ButtonProps extends React.ComponentProps<typeof BaseButton> {
  loading?: boolean
  label: string
  labelColor?: string
  icon?: string
  iconSize?: number
  iconRight?: boolean
  block?: boolean
}

const Button = ({
  loading,
  icon,
  iconRight,
  iconSize,
  label,
  labelColor,
  block,
  onPress = () => true,
  ...props
}: ButtonProps) => {
  const theme = useTheme()
  const color =
    props.variant === 'outline' || props.variant === 'default'
      ? 'text'
      : 'white'
  return (
    <BaseButton
      flexDirection={iconRight ? 'row-reverse' : 'row'}
      justifyContent='center'
      activeOpacity={0.7}
      alignItems='center'
      alignSelf={block ? 'stretch' : 'auto'}
      onPress={!loading ? onPress : () => true}
      {...props}>
      {icon && !loading ? (
        <Icon name={icon} color={theme.colors[color]} size={iconSize} />
      ) : null}
      {loading ? (
        <ActivityIndicator color={theme.colors[color]} size='small' />
      ) : null}
      <Text variant='button' color={color}>
        {label}
      </Text>
    </BaseButton>
  )
}

export default Button
