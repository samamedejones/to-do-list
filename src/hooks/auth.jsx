import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})


function AuthProvider({ children }){

    const [data, setData] = useState({})

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@rockeatseat:user", JSON.stringify(user))
            localStorage.setItem("@rockeatseat:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token })



        } catch (error) {
          if(error.response){
            alert(`${error.response.data.message}`)
          }  else {
            alert("Não foi possivel entrar")
          }
        }
    }

    function signOut() {
        localStorage.removeItem("@rockeatseat:token")
        localStorage.removeItem("@rockeatseat:user")

        setData({})
    }

    async function updateProfile( { user, avatarFile } ) {
        try {

            if(avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)


                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar
                console.log(user)
            }
            
            await api.put("/users", user)
            localStorage.setItem("@rockeatseat:user", JSON.stringify(user))
            setData({ user, token: data.token })
            alert("Perfil atualizado")
        } catch (error) {
            if(error.response){
              alert(`${error.response.data.message}`)
            }  else {
              alert("Não foi possivel atualizar o perfil.")
            }
          }
    }

    useEffect(()=> {
        const token = localStorage.getItem("@rockeatseat:token")
        const user = localStorage.getItem("@rockeatseat:user")

        if(token && user){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
            setData({
                token,
                user: JSON.parse(user)
            })
        }

    }, [])
    
    return(
        <AuthContext.Provider value={{ 
            signIn, 
            signOut,
            updateProfile,
            user: data.user 
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }