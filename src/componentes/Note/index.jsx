import { Container } from "./styles"


export function Note({ data, ...rest }) {

    return (
        <Container {...rest}>
            <h1>{data.tittle}</h1>
        </Container>
    )
}