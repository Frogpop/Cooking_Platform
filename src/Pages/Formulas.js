import React,{Component} from "react";
import SingleFormula from "../Components/SingleFormula";
export default class Formulas extends Component{



    render() {
        const rec = <SingleFormula headline="1273" instrdescr="ASSADSAS"/>;
        return(
            <div>
                We formuling
                {rec}
            </div>
        );
    }
}