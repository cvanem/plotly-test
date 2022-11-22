import React from 'react';
import Plotly from 'plotly.js';

const max = 200;

var layout = {
  margin: { autoexpand: true, t: 10, r: 0, pad: 0, l: 0, b: 0 },
  autosize: true,
  xaxis: {
    type: 'number',
    domain: [0, 1000],
    showticklabels: false
  },
  yaxis: { domain: [0, 1] }
};

const enforceMaxSize = array => {
  return array.filter((v, i) => (array.length >= max ? i > array.length - max - 1 : true));
};

export default function Signal({ id = 'chart1', color = '#80CAF6', delay = 100, getData = Math.sin, width = 300 }) {
  var trace1 = {
    x: [],
    y: [],
    mode: 'lines',
    line: {
      color,
      shape: 'spline'
    }
  };
  const [state, setState] = React.useState({
    start: new Date().getTime(),
    currentIndex: 0,
    data: [trace1]
  });
  const { data } = state;
  React.useEffect(() => {
    var interval = setInterval(function () {
      setState(p => {
        var time = (new Date().getTime() - p.start) / delay;
        const t1 = p.data[0] as any;

        var newT1 = {
          ...trace1,
          x: enforceMaxSize([...t1.x, time] as any),
          y: enforceMaxSize([...t1.y, getData(time)] as any)
        };

        var newData = [newT1];
        return { ...p, currentIndex: p.currentIndex + 1, data: newData };
      });
    }, delay);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [setState, delay, getData, JSON.stringify(trace1)]);

  var length = data.length;
  React.useEffect(() => {
    var TESTER = document.getElementById(id) as any;
    Plotly.react(TESTER, data, layout as any);
    // eslint-disable-next-line
  }, [length, layout, JSON.stringify(data), delay]);

  return <div id={id} style={{ width, height: 40 }}></div>;
}
