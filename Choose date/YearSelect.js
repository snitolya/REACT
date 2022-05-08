import {Component, Fragment} from "react";
import _ from 'lodash';
export default class YearSelect extends Component{
    constructor(props) {
        super(props);
        const year = (new Date()).getFullYear();
        this.state = {selectedYear: false, years: _.range(year, year - 10, -1)};
        this.yearChanged = this.yearChanged.bind(this);
    }
    yearChanged(e){
        const selectedYear = Number.parseInt(e.target.value)
        this.setState({selectedYear})
        this.props.onYearChange(selectedYear);
    }
    render() {
        return (<Fragment>
            <select onChange={this.yearChanged}>
                <option selected disabled>Please select year</option>
                {this.state.years.map(y => <option selected={this.state.selectedYear === y} key={y} value={y}>{y}</option>)}
            </select>
        </Fragment>)
    }
}
 