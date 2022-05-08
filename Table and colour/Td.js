import React from "react";
 
export default class Td extends React.Component{
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click(){
        this.props.onTdClick(this.props.rowNumber, this.props.tdNumber);
    }
    render() {
        const rowNumber = this.props.rowNumber;
        const tdNumber = this.props.tdNumber;
        const isFill = this.props.isFill;
        return(<td style={{backgroundColor: isFill ? 'yellow' : 'transparent'}} onClick={this.click}>{rowNumber}-{tdNumber}</td>)
    }
}