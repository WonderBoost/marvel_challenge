import React from 'react';
import {Redirect, useHistory} from "react-router-dom";
import ReactDOM from 'react-dom';
import ComicPage from './ComicPage';

const showComic = () => {
  console.log("usando boton");
    return <Redirect from="/" to='/comic-page'  />
    
}
  
const Modal = ({ isShowing, hide, comics, characterName}) => isShowing ? ReactDOM.createPortal(
  
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">X</span>
          </button>
        </div>
        <div className="character-name">
            <p>
                {characterName}
            </p>
        </div>
        <section className="">
            {
                comics.map(element => (
                  <a className="pointer" onClick={showComic} >
                    <div className='flex-parent' key={element.id}>
                        <div>
                            <img className="thumbnail-comic" src={element.thumbnail.path + "/portrait_xlarge.jpg"} alt='imagen' />
                        </div>
                        <div className='flex-content'>
                            <div className='comic-title'>
                                <p>
                                    {element.title}
                                </p>
                                <p className='comic-description'>
                                    {element.description}
                                </p>
                            </div>

                            <div>

                            </div>
                        </div> 
                    </div>
                  </a>
                ))
            }
        </section>
      </div>
      <ComicPage />
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;