import React, {Component, useState, useEffect} from "react";
import { YMaps, Map, Placemark, FullscreenControl } from '@pbe/react-yandex-maps';
const placeMerk ={
    geometry : [56.465390, 84.950164],
    properties: {
        hintContent: 'Офис кулинарной платформы',
        balloonContent : "sdsd"

    },
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
};
export default class OfficeLocation extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <YMaps>
                    <div>
                        <Map height={600} width={window.innerWidth} defaultState={{ center: [56.465390, 84.950164], zoom: 15 }} options={
                            {
                                balloonPanelMaxMapArea: Number.POSITIVE_INFINITY
                            }
                        }>
                            <Placemark {... placeMerk}/>
                            <FullscreenControl/>
                        </Map>

                    </div>
                </YMaps>

            </div>
        );
    }
}
