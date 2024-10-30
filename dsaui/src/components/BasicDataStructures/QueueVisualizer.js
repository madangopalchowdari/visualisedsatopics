import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const QueueVisualizer = () => {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const enqueue = async (manual = false) => {
    const newValue = manual ? parseInt(inputValue, 10) : Math.floor(Math.random() * 100);
    if (isNaN(newValue)) {
      alert('Please enter a valid number');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/queue/enqueue', { value: newValue });
      setQueue(response.data.queue);
      setInputValue(''); // Clear input field
    } catch (error) {
      console.error('Error enqueuing:', error);
    }
  };

  const dequeue = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/queue/dequeue');
      setQueue(response.data.queue);
    } catch (error) {
      console.error('Error dequeuing:', error);
      alert(error.response?.data?.error || 'Error dequeuing');
    }
  };

  const drawQueue = () => {
    d3.select('#queue-container').select('svg').remove();

    const svg = d3.select('#queue-container')
      .append('svg')
      .attr('width', 500)
      .attr('height', 100);

    svg.selectAll('rect')
      .data(queue)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 50)
      .attr('y', 20)
      .attr('width', 40)
      .attr('height', 40)
      .attr('fill', 'lightblue');

    svg.selectAll('text')
      .data(queue)
      .enter()
      .append('text')
      .attr('x', (d, i) => i * 50 + 20)
      .attr('y', 45)
      .attr('text-anchor', 'middle')
      .text(d => d)
      .attr('fill', 'black');
  };

  useEffect(() => {
    drawQueue();
  }, [queue]);

  return (
    <div>
      <h2>Queue Visualization</h2>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={() => enqueue(true)}>Enqueue (Manual)</button>
        <button onClick={() => enqueue(false)}>Enqueue (Random)</button>
        <button onClick={dequeue}>Dequeue</button>
      </div>
      <div id="queue-container"></div>
    </div>
  );
};

export default QueueVisualizer;
