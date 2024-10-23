//import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Wrapper, Column, Row, Title, TitleLogin, SubTitleLogin, CriarConta, EsqueciSenha } 
from "./styles";

import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '../../services/api'


const schema = yup.object({
  email: yup.string().email('email não é valido').required('email é obrigatorio'),
  password: yup.number().min(5, 'Senha minima de 5 caracteres').required('senha é obrigatorio'),
}).required();


function Login() {
  const colorIcons = '#8647AD';

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })
  console.log(isValid, errors)

  const onSubmit = async formData => {
    console.log('data: ', formData)
    try {
      const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`)
      if (data.length === 1) {
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
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar  as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça o seu cadastro</TitleLogin>
            <SubTitleLogin>Make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message} 
              control={control} placeholder="E-mail" leftIcon={<MdEmail color={colorIcons} />}/>
              <Input name="password" errorMessage={errors?.password?.message} 
              control={control} placeholder="Senha" type="password" leftIcon={<MdLock color={colorIcons} />}/>
              <Button variant="secondary" type='submit'>Entrar</Button>
            </form>
            <Row>
              <EsqueciSenha>Esqueci a minha senha</EsqueciSenha>
              <CriarConta onClick={() => navigate('/register')}>Criar uma conta</CriarConta>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Login }
