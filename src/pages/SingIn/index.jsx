import { Container, Form, Background } from "./styles"
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../componentes/Input"
import { Button } from "../../componentes/Button"

export function SingIn() {

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça o seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>
              
            <a href="#">
                Criar conta
            </a>

            </Form>

            <Background/>
        </Container>

    )

}