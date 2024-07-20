import React, {Component} from "react";
import OfficeLocation from "../../Components/Contacts/OfficeLocation";
import  '../../App.css';
import Jumbotron from "../../Components/Contacts/Jumbotron";
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