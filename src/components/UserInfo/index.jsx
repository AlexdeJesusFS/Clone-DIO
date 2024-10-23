import { Container, NameText, Progress, UserPicture } from './styles'
import React from 'react'

function UserInfo({name, image, percentual}) {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }
