import { createContext, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux/Store'
import './App.css'
import axios from 'axios'
import Allroutes from './components/Allroutes'

export const navbarContext = createContext()

function App() {

  const [searchInput,setSearchInput] = useState("")
  const [loading,setLoading] = useState(false)
  const [searchData,setSearchData] = useState({
    query: "b",
    maxResults: "20",
  })

  useEffect(()=> {
    getData()
  },[])
  

  const [searchResults,setSearchResults] = useState([])
  
  const handleChange = (e) => {
    setSearchInput(e.target.value)
    setSearchData({...searchData,query:e.target.value})
  }

  const handleSearch = (event) => {
    if(event.key === "Enter") {
      getData()
    }
  }

  const getData = () => {
    setLoading(true)
    if(searchData.query === ""){
      setLoading(false)
    }
    axios.post("https://reactnd-books-api.udacity.com/search", searchData , {headers: { 'Authorization': 'whatever-you-want' }} )
    .then(res => {
      setLoading(false)
      if (res.data.books.error === 'empty query') { 
        setSearchResults([]);
        console.log('No results found');
      } else {
        setSearchResults(res.data.books);
        console.log(res.data);
      }})
    .catch(err => {
      console.log(err)
      setSearchResults([])
    })
  }


  return (
    <Provider store={store}>
      <navbarContext.Provider value={{handleChange,searchInput,handleSearch}}>
        <Allroutes searchResults={searchResults} loading={loading} />
      </navbarContext.Provider>
    </Provider>
  )

}

export default App
