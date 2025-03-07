import { Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri"
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from "../../assets/placeholder.png"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"


export function Header() {

  const navigate = useNavigate()
  const { signOut, user} = useAuth()
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  return (
    <Container>
      <Profile to="/profile">
      
        <img src={avatarUrl} alt="" />
        <div>
            <span>Bem vindo</span>
            <strong>{user.name}</strong>
        </div>
  
      </Profile>
       <Logout onClick={()=>{
        navigate(-1)
        signOut()
       }}>
        <RiShutDownLine/>
       </Logout>
    </Container>
  )
}