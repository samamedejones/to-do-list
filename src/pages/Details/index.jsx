import { Container, Links, Content } from './style'
import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Section } from '../../componentes/Section'
import Tag from '../../componentes/Tag'
import ButtonText from '../../componentes/ButtonText'

export function Details() {


  return (
    <Container>
      <Header/>


      <main>
        <Content>
          
          <ButtonText title="Excluir notas"/>


          <Section tittle="Lins Uteis">
            <Links>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
            </Links>

          </Section>

          <Section tittle="Marcadores">
            <Tag title="express"/>

          </Section>

          <Button title="Voltar"/>

        </Content>
      </main>
    </Container>
    
)
}