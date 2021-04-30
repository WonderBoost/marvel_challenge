import React from 'react';
import CharacterItem from './CharacterItem';
const Characters = ({items, isLoading, hash}) => {
    return isLoading ? <div className="loader" /> :
    <section className="contents">
        {
            items.map(item => (
                <CharacterItem key={item.id} item={item} hash={hash}  />
            ))
        }
        {/* {console.log(hash, "hash")} */}
    </section>
}

export default Characters


