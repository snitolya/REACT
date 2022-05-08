import React from "react";
 
export default class Score extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {Object
                        .keys(this.props.colors)
                        .map((key)=> <li key={key}>{key}={this.props.colors[key]}</li>)}
                </ul>
            </React.Fragment>
        )
    }
}