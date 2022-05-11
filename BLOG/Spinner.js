import { Fragment } from "react"


export default function Spinner(props){

return(
    <Fragment>
        {props.show?
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div> : props.children }
    </Fragment>
)

}
