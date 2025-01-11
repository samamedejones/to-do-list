import { Container, Form } from "./styles"
import  { Header }  from "../../componentes/Header"
import { Input } from "../../componentes/Input"
import { TextArea } from "../../componentes/TextArea"


export function New() {

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>
                </Form>   
            </main> 
        </Container>
    )
}