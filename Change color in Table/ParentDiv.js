import React from "react";
import SmartDiv from "./SmartDiv";
import _ from "lodash"
import Score from "./Score";
 
export default class ParentDiv extends React.Component{
    constructor() {
        super();
        this.clickCounter = this.clickCounter.bind(this);
        this.state = {}
    }
    clickCounter(color){
        if(this.state[color]){
            this.setState({[color]:this.state[color] + 1})
        } else {
            this.setState({[color]:1})
        }
    }
    render() {
        return (
            <React.Fragment>
                <Score colors={this.state} />
                {_.range(150).map((e)=> <SmartDiv key={e} onClickByColor={this.clickCounter}/>)}
            </React.Fragment>)
    }
}
