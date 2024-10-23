import React from 'react'
import { ButtonContainer } from './styles'

function Button({variant="primary", onClick, children}) {
  return (
    <ButtonContainer $variant={variant} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export { Button }