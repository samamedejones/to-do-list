import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
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
  const [ searchNote, setSeartchNote ] = useState("")
  const [ notes, setNotes ] = useState([])

  const navigate = useNavigate()

  function handleTagSelected(tagName){
    const alreadySelected = tagSelected.includes(tagName)
    if(alreadySelected){
      setTagSelected(tagSelected.filter(tag => tag !== tagName))
    } 
    else{
    setTagSelected(prevState => [...prevState, tagName])
  }
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }


  useEffect(()=>{
    async function fetchTags() {
      const response = await api.get("tags")
      setTags(response.data)
    }
    fetchTags()
  },[])

  useEffect(()=>{
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${searchNote}&tags=${tagSelected}`)
      setNotes(response.data)
    }
    fetchNotes()
  },[tagSelected, searchNote])

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
                onClick={()=> setTagSelected([])}
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
          <Input 
            placeholder="Pesquisar pelo título" 
            icon={FiSearch}
            onChange={(e) => setSeartchNote(e.target.value)}
          />
        </Search>

        <Content>
          <Section title="Minhas Notas">
            {
              notes.map((note)=>(
                <Note 
                  key={String(note.id)} 
                  data={note}
                  onClick={()=> handleDetails(note.id)}
                />
              ))
            }
          </Section>
        </Content>
 
        <NewNote to="/new">
          <FiPlus/>
          Criar Notas
        </NewNote>

   </Container>
  )
}
