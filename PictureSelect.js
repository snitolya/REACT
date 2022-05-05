import React, { useState , useEffect} from 'react';


export default function PictureSelect(){
  const [pictures, setPicture] = useState([
    'https://krasivosti.pro/uploads/posts/2021-07/1625873077_53-krasivosti-pro-p-poroda-koshek-s-kistochkami-na-ushakh-koti-56.jpg',
    'https://www.crushpixel.com/big-static10/preview4/female-tiger-cat-with-hipnotic-614238.jpg',
    'https://www.myzoomag.com.ua/image/catalog/4151.jpg'
  ])
  const [index,setIndex]=useState(0);
  const [input,setInput]=useState('');
  return (
  <div>
    <input type='text' onChange={(e)=> {setInput(e.target.value)}}></input>

    <button
    onClick={()=>setPicture(picture)=>[...picture, input])}>Add</button>
    <select
    onChange={(e)=>{setIndex(e.target.selectedIndex)}}>
      {picture.map(picture=> <option selected ={picture ===pictures[index]} key={picture} value={picture}>{picture}</option>)}
    </select>
  </div>)
  
  }


  // pictureChanged(e){
  //   const selectedPicture = e.target.value
  //   this.setState({selectedPicture})
  //   this.props.onPictureChange(selectedPicture)
  // }
