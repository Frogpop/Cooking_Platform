import React, {Component} from "react";
import OfficeLocation from "../../Components/OfficeLocation";
import  '../../App.css';
import Jumbotron from "../../Components/Jumbotron";
export default class Contacts extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <OfficeLocation/>
                <Jumbotron/>
            </div>
        );
    }
}