import React from "react";
 
export default class Element extends React.Component{
    constructor(props) {
        super(props);
        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
    }
    leftClick(){
        this.props.onCustomClick(this.props.index, 'left')
    }
    rightClick(event){
        event.preventDefault()
        this.props.onCustomClick(this.props.index, 'right')
    }
 
    render() {
        const n = this.props.number;
        return( <li onClick={this.leftClick} onContextMenu={this.rightClick}>{n}</li>)
    }
}
