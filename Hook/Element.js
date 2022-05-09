import React, { useState } from 'react';

 
 const Element = ({ index, onCustomClick }) => {
    const [count, setCount] = useState(0);
    const [countt, setCountt] = useState(0);
    }
    const leftClick =() => {
        onCustomClick(index, 'left')
    }
    const rightClick =(event) => {
        event.preventDefault()
        onCustomClick(index, 'right')
    }
 
    return (
        <div>
        const n = number;
        return( <li onClick={leftClick} onContextMenu={rightClick}>{n}</li>
            </div> );
    
        

        export default Element;