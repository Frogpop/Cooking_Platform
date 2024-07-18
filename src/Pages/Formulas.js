import React,{Component} from "react";
import SingleFormula from "../Components/SingleFormula";
import GroupList from "../Components/GroupList.js";
export default class Formulas extends Component{



    render() {
        const rec = <SingleFormula headline="1273" instrdescr="ASSADSAS"/>;
        const gr=GroupList();
        return(
            <div>
                {gr}
            </div>
        );
    }
}