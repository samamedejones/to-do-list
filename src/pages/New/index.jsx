import { useState } from "react"
import { Link } from "react-router-dom"

import { Container, Form } from "./styles"
import  { Header }  from "../../componentes/Header"
import { Input } from "../../componentes/Input"
import { TextArea } from "../../componentes/TextArea"
import { Section } from "../../componentes/Section"
import { NoteItem } from "../../componentes/NoteItem"
import { Button } from "../../componentes/Button"


export function New() {
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>

                    <Section title="Links Utéis">
                        {
                            links.map((link, index)=> (
                                <NoteItem 
                                    key={String(index)}
                                    value={link}
                                    onClick={()=> { }}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>   
            </main> 
        </Container>
    )
}