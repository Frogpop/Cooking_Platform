import React,{Component} from "react";

export default class Formulas extends Component{

    render() {
        return(
            <div>
                <div className={"Headline"}>
                {this.props.headline}
                </div>
                <div className={"description"}>
                    {this.props.instrdescr}
                </div>
            </div>
        );
    }

}