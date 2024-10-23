//import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo"
import { Container, Title, TitleHighLight, Column } from "./styles"

function Feed() {
  return (
    <>
        <Header authenticate={true}/>
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
          </Column>
          <Column flex={1}>
            <TitleHighLight># Ranking 5 TOP da Semana</TitleHighLight>
            <UserInfo name='Lex' percentual='85' image='https://avatars.githubusercontent.com/u/65736748?v=4'/>
            <UserInfo name='Lex' percentual='70' image='https://avatars.githubusercontent.com/u/65736748?v=4'/>
            <UserInfo name='Lex' percentual='50' image='https://avatars.githubusercontent.com/u/65736748?v=4'/>
            <UserInfo name='Lex' percentual='30' image='https://avatars.githubusercontent.com/u/65736748?v=4'/>
            <UserInfo name='Lex' percentual='5' image='https://avatars.githubusercontent.com/u/65736748?v=4'/>
          </Column>
        </Container>
    </>
  )
}

export { Feed }
