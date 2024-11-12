import { Container } from "./styles"


export function Section({ tittle, childreen}) {

    return (
        <Container>
        <h2>{tittle}</h2>
        {childreen}
        </Container>
    )
}