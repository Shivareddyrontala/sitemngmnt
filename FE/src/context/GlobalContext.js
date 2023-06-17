import React,{useState,useEffect} from 'react'
export const SiteContext = React.createContext();

export default function GlobalContext({children }) {

  useEffect(() => {
    var token = localStorage.getItem('token');
    var loggedUserName = localStorage.getItem('name');
    if(token){
      setUserLogged(true);
      setUserName(loggedUserName);
    }
  },[]);

  const [userLogged,setUserLogged] = useState(false); 
  const [userName,setUserName] = useState('');
  const handleUserLog = () =>{
    setUserLogged(true);
    return true;
  }
   
  return (
    <SiteContext.Provider value={{userLogged,handleUserLog,userName}}>
        { children }
    </SiteContext.Provider>
  )
}
