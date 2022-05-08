import {Component, Fragment} from "react";
import YearSelect from "./YearSelect";
import MonthSelect from "./MonthSelect";
import DaySelect from "./DaySelect";
 
export default class DateSelector extends Component{
    constructor(props) {
        super(props);
        this.state = {year:false, month: false, day: false};
        this.yearChandgfasged = this.yearChandgfasged.bind(this);
        this.monthChanged = this.monthChanged.bind(this);
        this.dayChanged = this.dayChanged.bind(this);
    }
    yearChandgfasged(year){
        this.setState({year})
    }
    monthChanged(month){
        this.setState({month})
    }
    dayChanged(day){
        this.setState({day})
    }
    render() {
        return (<Fragment>
            <YearSelect onYearChange={this.yearChandgfasged} />
            <MonthSelect onMonthChange={this.monthChanged} year={this.state.year} />
            <DaySelect onDayChange={this.dayChanged} year={this.state.year} month={this.state.month}/>
        </Fragment>)
    }
}