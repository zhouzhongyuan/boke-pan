import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BokePan from 'boke-pan';

const el = React.createElement(
    BokePan,
    {
        onPanStart: (e) => {
            console.log('start');
            console.log(e.direction);
        },
        onPanDown: (e) => {
            console.log(e.direction);
        },
        onPanUp: (e) => {
            console.log(e.direction);
        },
        onPanEnd: (e) => {
            console.log('pan end callbak');
            // console.log(e.direction);
            // console.log(e);
        },

    },
    React.createElement(
        'div',
        {

            style: {
                backgroundColor: 'red',
                fontSize: 200,

            },
        },
        'Very very very very long list.',
    ),
);

ReactDOM.render(
    el,
    document.getElementById('root'),
);
