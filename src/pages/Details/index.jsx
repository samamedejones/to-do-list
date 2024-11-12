import { Container } from './style'
import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Section } from '../../componentes/Section'

export function Details() {


  return (
    <Container>
      <Header/>
      <Section tittle="teste"><p>mais um teste</p></Section>
      <Button title="Voltar"/>
    </Container>
)
}