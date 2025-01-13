import { Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri"

export function Header() {


  return (
    <Container>
      <Profile to="/profile">
      
        <img src="https://github.com/samamedejones.png" alt="" />
        <div>
            <span>Bem vindo</span>
            <strong>Jones Samamede</strong>
        </div>
  
      </Profile>
       <Logout>
        <RiShutDownLine/>
       </Logout>
    </Container>
  )
}