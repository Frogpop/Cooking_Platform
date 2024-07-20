import React, {Component} from "react";
import { YMaps, Map, Placemark, FullscreenControl } from "@pbe/react-yandex-maps";


const placeMerk ={
    geometry : [56.46196, 84.947414],
    properties: {
        hintContent: 'Офис кулинарной платформы',
        balloonContent : `
          <div>
            <h1>Офис кулинарной платформы</h1>
            <div>
                <p>Тел.: +7-959-658-95-36</p>
                <p>E-mail: kulplat@ogo.com</p>
                <p>Адрес: просп. Ленина, 30</p>
            </div>
          </div>
        `

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
                        <Map height={550} width={window.innerWidth} defaultState={{ center: [56.46196, 84.947414], zoom: 15 }} options={
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
