import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Content, NewNote, Search } from "./styles"
import { Header } from "../../componentes/Header"


import React from 'react'
import ButtonText from "../../componentes/ButtonText"
import { Input } from "../../componentes/Input"
import { Section } from "../../componentes/Section"
import { Note } from "../../componentes/Note"

export default function Home() {
  return (
   <Container>
        <Brand>
            <h1>RocketNotes</h1>
        </Brand>

        <Header/>

        <Menu>
          <li><ButtonText title="Todos" isActive /></li>
          <li><ButtonText title="React"/></li> 
          <li><ButtonText title="NodeJS"/></li>


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
                {id: "2", name: "rockeatseat"},
                {id: "3", name: "javascript"},
                {id: "4", name: "css"},
                {id: "5", name: "js note"},
                {id: "6", name: "html note"},
                {id: "7", name: "teste"},
                {id: "7", name: "teste"}
              ]
              }}/>

            <Note data={{
              title: "Mental", 
              tags: [
                {id: "1", name: "foco"},
                {id: "2", name: "mental"},
                {id: "3", name: "constancia"},
                {id: "4", name: "estudo"}
                
              ]
              }}/>

            <Note data={{
              title: "Rotina", 
              tags: [
                {id: "1", name: "café da manhã"},
                {id: "2", name: "revisão"},
                {id: "3", name: "assistir aula"},
                {id: "4", name: "almoçar"},
                {id: "5", name: "ler"},
                {id: "6", name: "escrever"}
               
                
              ]
              }}/>
          </Section>
        </Content>
 
        <NewNote>
          <FiPlus/>
          Criar Notas
        </NewNote>

   </Container>
  )
}
