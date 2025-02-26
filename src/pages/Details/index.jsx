import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { Container, Links, Content } from './style'
import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Section } from '../../componentes/Section'
import Tag from '../../componentes/Tag'
import ButtonText from '../../componentes/ButtonText'

export function Details() {
  const [ data, setData ] = useState(null)
  const params = useParams()


  useEffect(()=> {
    async function fetchData() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchData()

  },[])

  console.log(data)


  return (
    <Container>
      <Header/>

      {
      data &&
        <main>
        <Content>

          <ButtonText title="Excluir notas"/>
          {
          <h1>{data.note.title}</h1>
          }

          <p>{data.note.description}</p>

          {
          data.links &&
            <Section title="Links Uteis">
              <Links>
              {
                data.links.map((link)=> (
                <li><a href={link.url}>{link.url}</a></li>
                ))
              }
              </Links>
            </Section>
          }
          

          <Section title="Marcadores">
            <Tag title="express"/>

          </Section>

          <Button title="Voltar"/>

        </Content>
      </main>
      }
      

    </Container>
    
)
}