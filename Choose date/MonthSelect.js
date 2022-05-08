import {Component, Fragment} from "react";
 
export default class MonthSelect extends Component{
    constructor(props) {
        super(props);
        this.state = {selectedMonth:false, months:[]};
        this.monthChanged = this.monthChanged.bind(this);
    }
    componentDidMount() {
        const months = [];
        for (let i =1; i<=12; i++){
            months.push(i)
        }
        this.setState({months})
    }
    getMonthName(m){
        const date = new Date(this.props.year, m-1);
        return date.toLocaleString('default', { month: 'short' })
    }
    monthChanged(e){
        const selectedMonth = Number.parseInt(e.target.value)
        this.setState({selectedMonth})
        this.props.onMonthChange(selectedMonth);
    }
    render() {
        return (<Fragment>
            <select disabled={!this.props.year} onChange={this.monthChanged}>
                {this.state.months.map(m => <option key={m} value={m}>{this.getMonthName(m)}</option> )}
            </select>
        </Fragment>)
    }
}