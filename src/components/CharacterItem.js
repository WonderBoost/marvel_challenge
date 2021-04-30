import React, {useState} from 'react';
import axios from 'axios';
import Modal from "./Modal";
import useModal from './useModal';

const CharacterItem = ({item, hash}) => {
    const {isShowing, toggle} = useModal();
    const[items,setItems] = useState([]);
    

    const fetch = async()=>{
        const result = await axios(`http://gateway.marvel.com/v1/public/characters/${item.id}/comics?ts=1&apikey=01b96e0460eebce010d80deefa6d4319&hash=${hash}`)
          console.log(result.data.data.results);
          setItems(result.data.data.results);
          toggle();
    }

    return (
        <div className='content'>
                <div className='content-inner'>
                    <div className='content-front'>
                    <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='imagen' />
                    </div>
                    <div className='content-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                        <strong>Name:</strong> {item.name}
                        </li>
                        <li className="character-description">
                        <strong>Description:</strong> {item.description}
                        </li>
                        <li className="pt-2">
                        <a href="#" onClick={fetch} className="button-blue">Cómics</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    comics={items}
                    characterName={item.name}
                />
        </div>
    )
}


export default CharacterItem