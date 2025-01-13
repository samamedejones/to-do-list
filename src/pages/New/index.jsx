import { Link } from "react-router-dom"
import { Container, Form } from "./styles"
import  { Header }  from "../../componentes/Header"
import { Input } from "../../componentes/Input"
import { TextArea } from "../../componentes/TextArea"
import { Section } from "../../componentes/Section"
import { NoteItem } from "../../componentes/NoteItem"
import { Button } from "../../componentes/Button"


export function New() {

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
                        <NoteItem value="https://github.com/samamedejones"/>
                        <NoteItem isNew placeholder="Novo link"/>
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