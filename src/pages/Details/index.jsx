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
  const navigate = useNavigate()


  async function handleDeleteNote(){
    const confirm = window.confirm("Tem certeza que deseja excluir essa nota?")

    if(confirm){
      await api.delete(`notes/${params.id}`)
      navigate(-1)
    }

  }



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

          <ButtonText title="Excluir nota" onClick={handleDeleteNote}/>
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
                <li><a href={link.url} target='_blank'>{link.url}</a></li>
                ))
              }
              </Links>
            </Section>
          }
          
          {
            data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map((tag)=> (
                  <Tag title={tag.name}/>  
                ))
              }

            </Section>
          }

          <Button title="Voltar" onClick={() => navigate(-1)}/>

        </Content>
      </main>
      }
      

    </Container>
    
)
}