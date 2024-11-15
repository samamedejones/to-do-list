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

          <h1>Introdução ao React</h1>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa veniam labore. Fuga dicta ex magni. Sunt modi tenetur quidem vitae, officiis fugiat, ullam dicta saepe velit, quas libero quia!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus recusandae vitae magnam aperiam rem ratione deleniti! Praesentium architecto aliquam itaque illum, soluta harum odio saepe debitis, qui, sapiente voluptatum eius.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in ratione consequatur odio, accusamus corporis fugit animi asperiores mollitia, dignissimos recusandae id voluptatibus minus harum impedit obcaecati illo, deleniti voluptas!
            </p>


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