import React,{useState , createContext} from "react";

export const SearchQueryContext = createContext()

export default function SearchQueryContextProvider ({children}){
 const [SearchQuery , setSearchQuery] = useState('')

 
 return(
   <SearchQueryContext.Provider value={{SearchQuery , setSearchQuery}}>
    {children}
   </SearchQueryContext.Provider>
 )
}