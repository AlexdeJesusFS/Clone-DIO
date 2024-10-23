
import React from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Title, Wrapper, Text, Column, Row, TextLogin, RegisterButton } from './styles'

import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '../../services/api'


const schema = yup.object({
  name: yup.string().min(10, 'nome deve ser de no mínimo 10 caracteres').required('nome é obrigatorio'),
  email: yup.string().email('email não é valido').required('email é obrigatorio'),
  password: yup.number().min(5, 'senha minima de 5 caracteres').required('senha é obrigatorio'),
}).required();


function Register() {
    const colorIcons = '#8647AD';

    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login')
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const onSubmit = async formData => {
        try {
            const json_data =  {
                "id": `${0}`, "name": `${formData.name}`,
                "email": `${formData.email}`, "password": `${formData.password}`
                }
            const { data } = await api.post('users/', json_data)
            console.log('data : ', data.constructor.assign.length)

            if (data.constructor.assign.length > 0) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválido!')
            }
        } catch {
            alert('Houve um erro durante login! Tente novamente.')
        }
    }


  return (
    <>
        <Header />
        <Container>
            <Title margin_top={"-150px"} >A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            <Column>
                <Wrapper>
                    <Title>Comece agora grátis</Title>
                    <Text>Crie sua conta e make the change._</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" placeholder="Nome Completo" errorMessage={errors?.name?.message}
                        leftIcon={<FaUser color={colorIcons} />} control={control} />
                        <Input name="email" placeholder="E-mail" errorMessage={errors?.email?.message}
                        leftIcon={<MdEmail color={colorIcons} />} control={control} />
                        <Input name="password" placeholder="Senha" errorMessage={errors?.password?.message}
                        type="password" leftIcon={<MdLock color={colorIcons} />} control={control} />
                        <br/>
                        <RegisterButton variant='secondary' type='submit'>Criar minha conta</RegisterButton>
                        <br/>
                        <br/>
                        <br/>
                    </form>
                        <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
                    <Row>
                        <TextLogin>Já tenho conta.</TextLogin>
                        <TextLogin link color='#23DD7A' onClick={handleClickLogin} >Fazer login</TextLogin>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
  )
}

export { Register }
