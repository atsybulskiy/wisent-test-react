import React, {Component} from 'react';

import {EndpointOptions, jsPlumb} from 'jsplumb';


import './flow-chart.scss';

class FlowChart extends Component {

    jsPlumb = jsPlumb.getInstance({
        // default drag options
        DragOptions: {cursor: 'pointer', zIndex: 2000},
        // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
        // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
        ConnectionOverlays: [
            ['Arrow', {
                location: 1,
                visible: true,
                width: 11,
                length: 11,
                id: 'ARROW',
                events: {
                    click: function () {
                        alert('you clicked on the arrow overlay');
                    },
                },
            }],
            // [ 'Label', {
            //     location: 0.1,
            //     id: 'label',
            //     cssClass: 'aLabel',
            //     label: 'connector',
            //     events:{
            //         tap:function() { alert('hey') }
            //     }
            // }]
        ],
        Container: 'canvas',
    });

    elements: string[] = ['one', 'two', 'three', 'four', 'five'];

    componentDidMount() {
        let common: EndpointOptions = {
            isSource: true,
            isTarget: true,
            connector: ['Straight', {
                stub: [40, 60],
                gap: 10
            }],
            endpoint: ['Dot', {radius: 4}],
            paintStyle: {
                fill: '#1f79e7', strokeWidth: 2, stroke: '#1f79e7',
            },
            hoverPaintStyle: {stroke: 'lightblue'},
            connectorStyle: {stroke: '#9dc8fb', strokeWidth: 2},
            connectorHoverStyle: {strokeWidth: 2},
            maxConnections: -1,
        };

        this.elements.forEach(item => {
            if (item !== 'one') {
                this.jsPlumb.draggable(item, {
                    containment: 'parent',
                });

                this.jsPlumb.addEndpoint(item, {
                    maxConnections: -1,
                    anchor: ['Left'],
                    uuid: item,
                }, common);

                this.jsPlumb.addEndpoint(item, {
                    maxConnections: -1,
                    anchor: ['Right'],
                    uuid: item,
                }, common);

                this.jsPlumb.addEndpoint(item, {
                    maxConnections: -1,
                    anchor: ['Top'],
                    uuid: item,
                }, common);
            }
        });

        // setTimeout(() => {
        //     this.jsPlumb.connect({uuids: ['one', 'three']});
        // }, 3000);

        this.jsPlumb.bind('beforeDrop', (info) => {
            console.log('%c⇒ sourceId', 'color: #89DDF7', info.sourceId);
            return true;
        });

        this.jsPlumb.bind('endpointClick', ((info, originalEvent) => {
            console.log('%c⇒ info', 'color: #89DDF7', info.targetId);
            console.log('%c⇒ originalEvent', 'color: #FF5370', originalEvent);
        }));


        this.jsPlumb.makeSource('one', {
            endpoint: ['Dot', {radius: 4}],
            anchor: 'Continuous',
        });

        // @ts-ignore
        console.log('%c⇒ this.jsPlumb.Defaults', 'color: #89DDF7', this.jsPlumb.Defaults);

    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div id="diagramContainer">
                        {this.elements.map(((value, index) => {
                            return <div id={value} key={index} className="item">
                                <div className="inner">
                                    <div className="title"/>
                                    <div className="text">
                                        <div className="text-placeholder"/>
                                        <div className="text-placeholder"/>
                                        <div className="text-placeholder"/>
                                    </div>
                                </div>
                            </div>;
                        }))}
                    </div>
                </div>
            </div>
        );
    }
}

export default FlowChart;
