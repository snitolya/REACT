import React from "react";
import _ from "lodash";
import Element from "./Element";
 
function SmartList () {
    const [count, setCount] = useState(0);
        //this.state = {numbers: _.range(1, 16)}

    }
    const customClick (n,mode) =() => {
        if(mode === 'right'){
            setState({numbers: numbers.map((el, index) => {
                if(index === n){
                    return numbers[index-1] + numbers[index+1]
                } else {
                    return el;
                }
                })})
        } else {
            setState({numbers: numbers.map((el, index) => {
                    if(index === n){
                        return numbers[index-1] * numbers[index+1]
                    } else {
                        return el;
                    }
                })})
        }
    }
 
  
        
        return (
            const numbers = numbers;
            <ul>
                {numbers.map( (n, i)=> <Element onCustomClick={customClick} key={i} index={i} number={n}/>)}
            </ul>
        )
 
    
}

export default  SmartList ;
 
