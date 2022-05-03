import {Component,Fragment} from 'react';

export default class DaySelect extends Component{
    constructor(props){
        super(props);
        this.state={selectedDay:false,days:[]};
    }
    
}

render(){
        const days=_.range(1, (new Date(this.props.year,this.props.month ,-1)).getDate()+2);
        return(<Fragment>
            
        </Fragment>)
    }
}
