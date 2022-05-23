import React from 'react';
import './style.css';

const Todo = () => {
  return (
      <>
        <div className='container'>
            <div className='card'>
                <figure className='card-image'>
                    <figcaption className='card-heading'>Add Your List Here</figcaption>
                </figure>
                <div className='card-form'>
                    <div className='input'>
                     <input type='text' className='input-field' placeholder='✍ Add Items...'/>
                    </div>

                    <div class="action">
                        <button class="action-button">Get started</button>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default Todo