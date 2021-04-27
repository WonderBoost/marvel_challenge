import React from 'react'
import CharacterItem from './CharacterItem'
const Characters = ({items, isLoading}) => {
    return isLoading ? <div className="loader" /> :
    <section className="contents">
        {
            items.map(item => (
                <CharacterItem key={item.id} item={item} />
            ))
        }
    </section>
}

export default Characters


