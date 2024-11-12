import { Container, Links } from './style'
import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Section } from '../../componentes/Section'

export function Details() {


  return (
    <Container>
      <Header/>
      <Section tittle="teste">
        <Links>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
        </Links>

      </Section>
      <Button title="Voltar"/>
    </Container>
)
}