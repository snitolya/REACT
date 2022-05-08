import React from "react";
 
export default class Li extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const searchText = this.props.search;
        const content = this.props.content;
        const isHidden =searchText.length && !content.includes(searchText);
        return (<li style={{display: isHidden ? 'none' : 'block'}}>{content}</li>)
    }
}
 
 