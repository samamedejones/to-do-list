import { Container, Brand, Menu, Content, NewNote, Search } from "./styles"
import { Header } from "../../componentes/Header"


import React from 'react'

export default function Home() {
  return (
   <Container>
        <Brand>
            <h1>RocketNotes</h1>
        </Brand>

        <Header/>

        <Menu>

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
