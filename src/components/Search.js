import React, {useState} from 'react';
import logo from '../assets/marvel-logo.png';

const Search = ({search}) => {
    const[text,setText] = useState('');

    const onSearch = (q) => {
        setText(q)
        search(q) 
    }

    return (
        <div className="pb search">
            <header className="left container-100">
                <img src={logo} alt="Marvel" />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                <form>
                    <input type="text" className="form-control" placeholder="Buscar" autoFocus 
                    onChange={(e) => onSearch(e.target.value)}
                    value={text}>
                    </input>
                </form>
            </header>

        </div>
    )
}


export default Search
