import React from "react";
import _ from "lodash";
import Tr from "./Tr";
 
export default class Table extends React.Component{
    constructor() {
        super();
        this.state = {rows: _.range(1, 6).map(()=> _.range(1, 6))};
    }
 
    render() {
        const rows = this.state.rows;
        return (<table>
            {rows.map( (row, i) => <Tr key={i} rowNumber={i+1} tds={row} />)}
        </table>)
    }
}
 