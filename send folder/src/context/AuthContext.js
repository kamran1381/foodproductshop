import React,{createContext , useState} from 'react'

export const AuthContext = createContext()


export default function AuthContextfunc({children}) {
    const [isUserLoggedin , setIsUserLoggedin] = useState(false)
    const [userId, setUserId] = useState("init");
    const [userInfo, setUserInfo] = useState(null);
  return (
    <AuthContext.Provider  value={{isUserLoggedin , setIsUserLoggedin , userId ,setUserId , userInfo , setUserInfo}}>
        {children}
    </AuthContext.Provider>
  )
}
