import React from 'react';
import Plotly from 'plotly.js';
import chartData from './Signal3DData';

var layout = ({ width, height }) => ({
  margin: { autoexpand: true, t: 0, r: 0, pad: 0, l: 0, b: 0 },
  autosize: false,
  width,
  height
  /*scene: {
    camera: {     
      //center: { x: 0, y: 0, z: -.2 },
      //eye: { x: 0, y: 2, z: 0.1 },
      // up: { x: 2, y: 0, z: 2 }
    }
  }*/
});

var trace1 = {
  x: chartData.map(r => r.x1),
  y: chartData.map(r => r.y1),
  z: chartData.map(r => r.z1),
  mode: 'lines',
  marker: {
    color: '#1f77b4',
    size: 12,
    symbol: 'circle',
    line: {
      color: 'rgb(0,0,0)',
      width: 0
    }
  },
  line: {
    color: '#1f77b4',
    width: 1
  },
  type: 'scatter3d'
};

var data = [trace1] as any;

export default function Signal3D({ id = '3d-chart-1', width = 300, height = 300 }) {
  React.useEffect(() => {
    var TESTER = document.getElementById(id) as any;
    Plotly.react(TESTER, data, layout({ width, height: height }) as any);
    // eslint-disable-next-line
  }, [width, height]);

  return <div id={id} style={{ width, height }}></div>;
}
