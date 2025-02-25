import { useState, useEffect } from "react"

import { api } from "../../services/api"

import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Content, NewNote, Search } from "./styles"
import { Header } from "../../componentes/Header"


import React from 'react'
import ButtonText from "../../componentes/ButtonText"
import { Input } from "../../componentes/Input"
import { Section } from "../../componentes/Section"
import { Note } from "../../componentes/Note"

export function Home() {

  const [ tags, setTags ] = useState([])
  const [ tagSelected, setTagSelected ] = useState([])


  function handleTagSelected(tagName){
    if(tagSelected.includes(tagName)){
      setTagSelected(tagSelected.filter(tag => tag !== tagName))
    } else{
    setTagSelected(prevState => [...prevState, tagName])
  }
    console.log(tagSelected)
  }



  useEffect(()=>{
    async function fetchTags() {
      const response = await api.get("tags")
      setTags(response.data)
    }
    fetchTags()
  },[])

  return (
   <Container>
        <Brand>
            <h1>RocketNotes</h1>
        </Brand>

        <Header/>

        <Menu>
            <li>
              <ButtonText 
                title="Todos" 
                isActive={tagSelected.length === 0}
              />
            </li>
          {
            tags && tags.map(tag => (
            <li 
              key={String(tag.id)}
            >
            <ButtonText 
              title={tag.name}
              onClick={()=> handleTagSelected(tag.name)}
              isActive={tagSelected.includes(tag.name)}
              />
              </li>
           ))
          }
        </Menu>

        <Search>
          <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
        </Search>

        <Content>
          <Section title="Minhas Notas">
            <Note data={{
              title: "Estudos", 
              tags: [
                {id: "1", name: "react"},
                
              ]
              }}/>
              
          </Section>
        </Content>
 
        <NewNote to="/new">
          <FiPlus/>
          Criar Notas
        </NewNote>

   </Container>
  )
}
