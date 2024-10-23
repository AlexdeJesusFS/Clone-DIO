import React from 'react'
import {
    Container, Row, Wrapper, FindInputContainer, Menu, MenuRight, Input, UserPicture, LogoPicture
} from './styles'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'
import { useNavigate } from "react-router-dom"

function Header({authenticate}) {

    const navigate = useNavigate()

  return (
    <Wrapper>
        <Container>
            <Row>
                <LogoPicture src={logo} alt='Logo da DIO' onClick={() => navigate('/')} />
                {authenticate ? 
                    <>
                        <FindInputContainer>
                            <Input placeholder='Buscar...' />
                        </FindInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                : null}
            </Row>
            <Row>
                {authenticate ? 
                    <UserPicture src='https://avatars.githubusercontent.com/u/65736748?v=4'/>
                :
                    <>
                        <MenuRight href='/'>Home</MenuRight>
                        <Button onClick={() => navigate('/login')}>Entrar</Button>
                        <Button onClick={() => navigate('/register')}>Cadastrar</Button>
                    </>
                }
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
