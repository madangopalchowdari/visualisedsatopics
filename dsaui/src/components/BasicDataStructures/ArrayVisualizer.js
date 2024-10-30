import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const ArrayVisualizer = () => {
  const [array, setArray] = useState([10, 20, 30, 40, 50]);
  const [inputValue, setInputValue] = useState('');

  const updateValue = async (index, manual = false) => {
    const newValue = manual ? parseInt(inputValue, 10) : Math.floor(Math.random() * 100);
    if (isNaN(newValue)) {
      alert('Please enter a valid number');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/array/update', { index, value: newValue });
      setArray(response.data.array);
      setInputValue(''); // Clear input field
    } catch (error) {
      console.error('Error updating array:', error);
      alert(error.response?.data?.error || 'Error updating array');
    }
  };

  const drawArray = () => {
    d3.select('#array-container').select('svg').remove();

    const svg = d3.select('#array-container')
      .append('svg')
      .attr('width', 500)
      .attr('height', 100);

    svg.selectAll('rect')
      .data(array)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 50)
      .attr('y', 20)
      .attr('width', 40)
      .attr('height', 40)
      .attr('fill', 'lightgreen');

    svg.selectAll('text')
      .data(array)
      .enter()
      .append('text')
      .attr('x', (d, i) => i * 50 + 20)
      .attr('y', 45)
      .attr('text-anchor', 'middle')
      .text(d => d)
      .attr('fill', 'black');
  };

  useEffect(() => {
    drawArray();
  }, [array]);

  return (
    <div>
      <h2>Array Visualization</h2>
      <div>
        {array.map((value, index) => (
          <div key={index}>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Update index ${index}`}
            />
            <button onClick={() => updateValue(index, true)}>Update (Manual)</button>
            <button onClick={() => updateValue(index, false)}>Update (Random)</button>
          </div>
        ))}
      </div>
      <div id="array-container"></div>
    </div>
  );
};

export default ArrayVisualizer;
