import React,{Component} from "react";
import SingleFormula from "../Components/SingleFormula";
import GroupList from "../Components/GroupList.js";
export default class Formulas extends Component{



    render() {
        const gr=GroupList(["батин борщ","овощной суп","несквик с пивом"], "Адовые блюда");
        return(
            <div>
                {gr}
            </div>
        );
    }
}