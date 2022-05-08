import React from "react";
import Td from "./Td";
 
export default class Tr extends React.Component{
    constructor(props) {
        super(props);
        this.trClick = this.trClick.bind(this);
        this.state = {r:0, t:0}
    }
    trClick(r,t){
        this.setState({r,t});
    }
    render() {
        const tds = this.props.tds;
        const rowNumber = this.props.rowNumber;
 
        return (
            <tr>
                {tds.map( (td,i) => <Td isFill={(rowNumber===this.state.r && td-1===this.state.t) || (rowNumber===this.state.r && td+1===this.state.t)} onTdClick={this.trClick} key={i} rowNumber={rowNumber} tdNumber={td}/>)}
            </tr>
        )
    }
}
 
 