import { useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

import { Container, Form } from "./styles"
import  { Header }  from "../../componentes/Header"
import { Input } from "../../componentes/Input"
import { TextArea } from "../../componentes/TextArea"
import { Section } from "../../componentes/Section"
import { NoteItem } from "../../componentes/NoteItem"
import { Button } from "../../componentes/Button"


export function New() {



    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")
    const [tags, setTags] = useState([])
    const [newTags, setNewTag] = useState("")

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTags])
        setNewTag("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleAddNote(){

        if(!title){
            return alert("Insira um titúlo para a sua Nota")
        }
        
        if(newLink){
            return alert("Voce deixou um link na caixa sem adicionar. Limpe ou clique no + para adicionar")
        }

        if(newTags){
            return alert("Voce deixou uma tag na caixa sem adicionar. Limpe ou clique no + para adicionar")
        }
       
        if(!title){
            return alert("Insira um titúlo para a sua Nota")
        }
        

        await api.post("/notes", {
           title,
           description,
           links,
           tags 
        })

        alert("Nota cadastrada com sucesso")
        navigate("/")
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

                    <Input 
                        placeholder="Título"
                        onChange={ e => setTitle(e.target.value)}
                    />
                    <TextArea 
                        placeholder="Observações"
                        onChange={ e => setDescription(e.target.value)}
                    />

                    <Section title="Links Utéis">
                        {
                            links.map((link, index)=> (
                                <NoteItem 
                                    key={String(index)}
                                    value={link}
                                    onClick={()=> handleRemoveLink(link)}
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
                        {
                            tags.map((tag, index)=> (
                                <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={()=> handleRemoveTag(tag)}
                            />
                            ))
                        }
                            <NoteItem 
                                isNew 
                                placeholder="Nova tag"
                                value={newTags}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button 
                        title="Salvar"
                        onClick={handleAddNote}
                    />
                </Form>   
            </main> 
        </Container>
    )
}