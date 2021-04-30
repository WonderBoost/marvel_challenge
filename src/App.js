import './App.css';
import Characters from './components/Characters';
import Search from './components/Search';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ComicPage from './components/ComicPage';


const hash = "34d04f83c93da8366bd3fb429d9efd56";

function App() {
  const[items, setItems] = useState([])
  const[isLoading, setLoading] = useState(true)
  const[query, setQuery] = useState('')

  useEffect( () =>{
    const fetch = async()=>{
        if (query === '') {
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=01b96e0460eebce010d80deefa6d4319&hash=${hash}`)
          console.log(result.data.data.results);
          setItems(result.data.data.results)
          setLoading(false)
        }else{
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=01b96e0460eebce010d80deefa6d4319&hash=${hash}`)
          console.log(result.data.data.results);
          setItems(result.data.data.results)
          setLoading(false) 
        }
      
    }

    fetch()
  }, [query]) 

  return (
    <div className="container">
      <Search search={(q)=>setQuery(q)} />
      <Characters hash={hash} items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;


