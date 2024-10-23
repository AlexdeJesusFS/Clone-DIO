import React from 'react'
import {InputContainer, IconContainer, InputText, ErrorMessage} from './styles'
import { Controller } from 'react-hook-form'
 
function Input({leftIcon, name, control, errorMessage, ...rest}) {
  return (
    <>
      { errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null }
      <InputContainer>
          {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
          <Controller 
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText name={name} {...field} {...rest} />} 
          />
      </InputContainer>
    </>
  )
}

export { Input }