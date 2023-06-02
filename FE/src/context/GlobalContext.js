import React,{useState,useEffect} from 'react'

export const SiteContext = React.createContext();

export default function GlobalContext({children }) {
  const handleUserLog = () =>{
    alert("hellozz");
    setUserLogged(true);
  }
   const [userLogged,setUserLogged] = useState(false); 
  return (
    <SiteContext.Provider value={{userLogged,handleUserLog}}>
        { children }
    </SiteContext.Provider>
  )
}
