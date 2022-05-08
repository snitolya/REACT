import React, { useState , useEffect} from 'react';
export default function PictureSelect(){
    const [cats, setCats] = useState([
      'https://krasivosti.pro/uploads/posts/2021-07/1625873077_53-krasivosti-pro-p-poroda-koshek-s-kistochkami-na-ushakh-koti-56.jpg',
      'https://www.crushpixel.com/big-static10/preview4/female-tiger-cat-with-hipnotic-614238.jpg',
      'https://www.myzoomag.com.ua/image/catalog/4151.jpg'
    ])
    const [index,setIndex]=useState(0);
    const [input,setInput]=useState('');

return(
<React.Fragment>
    <input type = 'text'
    onChange = {(e)=>{setInput(e.target.value)}}/>

    <button
    onClick={()=> setCats((cats)=>[...cats,input])}>add</button>
    <select
    onChange={(e)=>{setIndex(e.target.selectedIndex)}}>
        {cats.map(cat=> <option selected={cat === cats[index]} key={cat}>{cat} </option>)}
    </select>
    <img src={cats[index]} alt='' />
</React.Fragment>

)
}