import React from 'react'
import {
  TextInput as RnTextInput,
  TextInputProps as RnTextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated'
import { useTheme } from '../../theme'

export interface TextInputProps extends RnTextInputProps {
  containerStyle?: ViewStyle
  onBlur?: () => void
  style?: TextStyle
}

export type TextInputRef = RnTextInput

const TextInput = React.forwardRef<TextInputRef, TextInputProps>(
  ({ containerStyle, onBlur = () => {}, style, ...props }, ref) => {
    const theme = useTheme()
    const [focused, setFocused] = React.useState<number>(0)
    const animStyle = useAnimatedStyle(() => ({
      borderBottomColor: interpolateColor(
        focused,
        [0, 1, 2],
        [theme.colors.grey, theme.colors.secondary, theme.colors.danger],
        'RGB',
      ),
    }))
    return (
      <Animated.View
        style={[
          {
            borderBottomWidth: 0.5,
            margin: theme.spacing.s,
            padding: 0,
          },
          animStyle,
          containerStyle,
        ]}>
        <RnTextInput
          style={[
            {
              paddingBottom: 0,
              width: '100%',
            },
            { ...theme.textVariants.body, color: theme.colors.text },
            style,
          ]}
          ref={ref}
          onFocus={() => setFocused(1)}
          placeholderTextColor={theme.colors.grey}
          onBlur={() => {
            setFocused(0)
            onBlur()
          }}
          {...props}
        />
      </Animated.View>
    )
  },
)

export default TextInput
