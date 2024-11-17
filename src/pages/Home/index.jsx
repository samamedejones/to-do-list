import { FiPlus } from "react-icons/fi"
import { Container, Brand, Menu, Content, NewNote, Search } from "./styles"
import { Header } from "../../componentes/Header"


import React from 'react'
import ButtonText from "../../componentes/ButtonText"

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

        </Search>

        <Content>

        </Content>

        <NewNote>
          <FiPlus/>
          Criar Notas
        </NewNote>

   </Container>
  )
}
