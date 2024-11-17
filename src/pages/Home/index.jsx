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
          <li><ButtonText title="teste 1"/></li>
          <li><ButtonText title="teste 2"/></li>
          <li><ButtonText title="teste 3"/></li>


        </Menu>

        <Search>

        </Search>

        <Content>

        </Content>

        <NewNote>

        </NewNote>

   </Container>
  )
}
