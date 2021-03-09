import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
  createVariant,
  createRestyleComponent,
  VariantProps,
} from '@shopify/restyle'
import {
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native'
import colors from './palette'
import textVariants from './textVariants'
import { spacing, breakpoints, borderRadii } from './measurement'
import cardVariants from './cardVariants'
import buttonVariants from './buttonVariants'

const theme = createTheme({
  colors,
  spacing,
  breakpoints,
  borderRadii,
  textVariants,
  cardVariants,
  buttonVariants,
})

export type Theme = typeof theme

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T,
) => () => {
  const currentTheme = useTheme()
  return styles(currentTheme)
}

const variant = createVariant({ themeKey: 'cardVariants' })

type CardProps = VariantProps<Theme, 'cardVariants'> & {
  children: React.ReactNode
}

const CardV = createRestyleComponent<CardProps, Theme>([variant])

export const Card = createBox<Theme, CardProps>(CardV)

export interface TouchBoxProps extends TouchableOpacityProps {
  children?: React.ReactNode
}
export const TouchBox = createBox<Theme, TouchBoxProps>(TouchableOpacity)

export const Text = createText<Theme>()
export const Box = createBox<Theme>()
export const useTheme = () => useReTheme<Theme>()

const buttonVariant = createVariant({ themeKey: 'buttonVariants' })

export type BaseButtonProps = React.ComponentProps<typeof TouchBox>

export const BaseButton = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & BaseButtonProps,
  Theme
>([buttonVariant], TouchBox)

export default theme
