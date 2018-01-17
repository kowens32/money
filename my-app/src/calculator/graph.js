
import React from 'react';
import BarChart from 'react-bar-chart';

 import createReactClass from 'create-react-class';
var _this = this;

const data = [{ text: 'Man', value: 500 }, { text: 'Woman', value: 300 }];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const Graph = createReactClass({
    displayName: 'Example',

    getInitialState() {
        return { width: 500 };
    },

    componentDidMount: () => {
        window.onresize = () => {
            _this.setState({ width: _this.refs.root.offsetWidth });
        };
    },

    handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    },

    render() {
        return React.createElement(
            'div',
            { ref: 'root' },
            React.createElement(
                'div',
                { style: { width: '50%' } },
                React.createElement(BarChart, { ylabel: 'Quantity',
                    width: this.state.width,
                    height: 500,
                    margin: margin,
                    data: data,
                    onBarClick: this.handleBarClick })
            )
        );
    }
});

export default Graph;