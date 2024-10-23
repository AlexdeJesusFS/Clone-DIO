import React from 'react'
import { 
    CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture 
} from './styles'
import { BiLike } from 'react-icons/bi'

function Card() {
  return (
    <CardContainer>
        <ImageBackground src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/65736748?v=4' />
                <div>
                    <h4>User Name</h4>
                    <p>Há 8 min</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto Front-end!</h4>
                <p>Utilizando React!</p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <BiLike /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
