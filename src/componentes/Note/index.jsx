import Tag from "../Tag"
import { Container } from "./styles"


export function Note({ data, ...rest }) {

    return (
        <Container {...rest}>
            <h1>{data.tittle}</h1>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tags => {
                           <Tag title={tag.name} key={tag.name} />
                        })
                    }
                </footer>
            }
        </Container>
    )
}