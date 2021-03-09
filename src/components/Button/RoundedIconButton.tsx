import React from 'react'
import { BaseButton, Theme, useTheme } from '../../theme'
import Icon from 'react-native-vector-icons/Feather'

export interface RoundedIconButtonProps
  extends React.ComponentProps<typeof BaseButton> {
  icon: string
  iconRatio?: number
  size?: number
  onPress?: () => void
  color: keyof Theme['colors']
  backgroundColor: keyof Theme['colors']
}

const RoundedIconButton = ({
  icon,
  color,
  backgroundColor,
  size = 20,
  iconRatio = 0.5,
  onPress = () => true,
  ...props
}: RoundedIconButtonProps) => {
  const theme = useTheme()
  return (
    <BaseButton
      backgroundColor={backgroundColor}
      onPress={onPress}
      borderRadius='round'
      justifyContent='center'
      alignItems='center'
      height={size}
      width={size}
      activeOpacity={0.7}
      padding='none'
      margin='none'
      {...props}>
      <Icon name={icon} color={theme.colors[color]} size={size * iconRatio} />
    </BaseButton>
  )
}

export default RoundedIconButton
