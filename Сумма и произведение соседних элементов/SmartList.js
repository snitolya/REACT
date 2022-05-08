import React from "react";
import _ from "lodash";
import Element from "./Element";
 
export default class SmartList extends React.Component {
    constructor() {
        super()
        this.state = {numbers: _.range(1, 16)}
        this.customClick = this.customClick.bind(this);
    }
    customClick(n,mode){
        if(mode === 'right'){
            this.setState({numbers: this.state.numbers.map((el, index) => {
                if(index === n){
                    return this.state.numbers[index-1] + this.state.numbers[index+1]
                } else {
                    return el;
                }
                })})
        } else {
            this.setState({numbers: this.state.numbers.map((el, index) => {
                    if(index === n){
                        return this.state.numbers[index-1] * this.state.numbers[index+1]
                    } else {
                        return el;
                    }
                })})
        }
    }
 
    render() {
        const numbers = this.state.numbers;
        return (
            <ul>
                {numbers.map( (n, i)=> <Element onCustomClick={this.customClick} key={i} index={i} number={n}/>)}
            </ul>
        )
 
    }
}
 
