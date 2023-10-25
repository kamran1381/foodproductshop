
import React, { useEffect, useRef, useState } from 'react';

import './piechart.css';

const Piechart = ({ percentage, icon }) => {
  const graphRef = useRef(null);
  const textRef = useRef(null);
  const [dashArray, setDashArray] = useState('');
  const [dashOffset, setDashOffset] = useState('');

  useEffect(() => {
    const graph = graphRef.current;
    const text = textRef.current;
    const graphRadius = graph.r.baseVal.value;
    const strokeLength = 2 * Math.PI * graphRadius;
    const calculatedDashArray = (percentage / 100) * strokeLength;
    setDashArray(`${calculatedDashArray} ${strokeLength}`);
    setDashOffset(0);
  }, [percentage]);

  return (
    <div className="pie-chart-container">
      <svg id="pieChart" viewBox="-10 -10 225 225">
        <circle
          id="outside"
          r="107"
          cy="100"
          cx="100"
          fill="none"
          stroke="url(#outerGradient)"
          stroke-width="5"
        />
        <circle
          id="graph"
          r="100"
          cy="100"
          cx="100"
          fill="none"
          stroke="#db4dc2"
          stroke-width="10"
          ref={graphRef}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
        <circle
          id="inside"
          r="95"
          cy="100"
          cx="100"
          fill="#fff"
          stroke="none"
          filter="url(#dropShadow)"
        />
      </svg>
      <div className="icon-container">{icon}</div>
    </div>
  );
};

export default Piechart;