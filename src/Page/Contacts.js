import React, {Component} from "react";
import OfficeLocation from "../Components/Map/OfficeLocation";
import  '../App.css';
export default class Contacts extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <OfficeLocation/>
                <body className="Contacts">
                    <h1>Кулинарная платформа</h1>
                    <h2>Тел.: +7-959-658-95-36</h2>
                    <h2>E-mail: kulplat@ogo.com</h2>
                    <h2>Адрес: просп. Ленина, 30</h2>
                </body>
            </div>
        );
    }
}