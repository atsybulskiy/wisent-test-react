import React, {Component} from 'react';

import 'jsplumb';

import './flow-chart.scss';

class FlowChart extends Component {

    componentDidMount() {
        // @ts-ignore
        jsPlumb.ready(function () {
            let els = document.querySelectorAll(".wrapper");

            let common = {
                isSource: true,
                isTarget: true,
                connector: "Straight",
                endpoint: "Rectangle",
                paintStyle: {fill: "white", outlineStroke: "blue", strokeWidth: 3},
                hoverPaintStyle: {outlineStroke: "lightblue"},
                connectorStyle: {outlineStroke: "green", strokeWidth: 1},
                connectorHoverStyle: {strokeWidth: 2},
            };
            // @ts-ignore
            jsPlumb.draggable("item_left");
            // @ts-ignore
            jsPlumb.addEndpoint("item_left", {
                anchors: ["Right", "Left"]
            }, common);
            // @ts-ignore
            jsPlumb.addEndpoint("item_right", {
                anchors: ["Right", 'Left']
            }, common);
            // @ts-ignore
            jsPlumb.draggable(els);
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div id="diagramContainer">
                        <div id="item_left" className="item"/>
                        <div id="item_right" className="item" style={{marginLeft: "50px"}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlowChart;
