import React,{Component} from "react";
import GroupList2 from "../../Components/gr2.js";
import {getNames} from "../../Components/recepieNames";
import {getHead} from "../../Components/recepieNames";

export default class Formulas extends Component{
    constructor(props){
        super(props);
        this.state={
            stage:0
        };
    }

    render() {
        let r= getNames(this.state.stage);
        let y=getHead(this.state.stage);
        let p= GroupList2(r,y);
        return(
            <div>
                <ul style={{
                    display: 'flex',

                }}>
                    <button onClick={() => this.setState({stage : 0})}>все блюда</button>
                    <button onClick={() => this.setState({stage : 1})}>здоровое питание</button>
                    <button onClick={() => this.setState({stage : 2})}>выбор редакции</button>
                    <button onClick={() => this.setState({stage : 3})}>летние супы</button>
                    <button onClick={() => this.setState({stage : 4})}>самые популярные</button>
                    <button onClick={() => this.setState({stage : 5})}>самые новые</button>
                </ul>
                {p}

            </div>
        );
    }
}