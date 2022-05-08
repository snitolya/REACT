import {Component, Fragment} from "react";
import _ from 'lodash';
 
export default class DaySelect extends Component{
    constructor(props) {
        super(props);
        this.state = {selectedDay: false, days:[]};
        this.dayChanged = this.dayChanged.bind(this);
    }
    dayChanged(e){
        const selectedDay = Number.parseInt(e.target.value);
        this.setState({selectedDay});
        this.props.onDayChange(selectedDay);
    }
    render() {
        const days = _.range(1, (new Date(this.props.year, this.props.month,0)).getDate()+1);
        return (<Fragment>
            <select onChange={this.dayChanged} disabled={!this.props.month}>
                {days.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
        </Fragment>)
    }
}