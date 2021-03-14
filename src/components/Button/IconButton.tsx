import React from 'react'

import { TouchBox } from '../../theme'

export interface ButtonProps extends React.ComponentProps<typeof TouchBox> {
  loading?: boolean
  Icon?: any
}

function IconButton({
  loading,
  Icon,
  onPress = () => true,
  ...props
}: ButtonProps) {
  return (
    <TouchBox
      height={40}
      width={40}
      margin='s'
      onPress={!loading ? onPress : () => true}
      {...props}>
      <Icon height={40} width={40} />
    </TouchBox>
  )
}
export default IconButton
