import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

function Chart() {
  const svgRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const data = [
    { year: 2548, cases: 0 },
    { year: 2549, cases: 1 },
    { year: 2550, cases: 0 },
    { year: 2551, cases: 4 },
    { year: 2552, cases: 4 },
    { year: 2553, cases: 10 },
    { year: 2554, cases: 9 },
    { year: 2555, cases: 5 },
    { year: 2556, cases: 2 },
    { year: 2557, cases: 51 },
    { year: 2558, cases: 32 },
    { year: 2559, cases: 15 },
    { year: 2560, cases: 14 },
    { year: 2561, cases: 0 },
    { year: 2562, cases: 0 },
    { year: 2563, cases: 35 },
    { year: 2564, cases: 79 },
  ];

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const calculateDimensions = () => {
      const width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;
      setDimensions({ width, height });
    };

    calculateDimensions(); // Initial calculation

    window.addEventListener("resize", calculateDimensions); // Recalculate on window resize

    return () => {
      window.removeEventListener("resize", calculateDimensions); // Remove event listener on unmount
    };
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;

    // Your D3.js code here, using 'width' and 'height' for the chart dimensions

    // Example:
    const svg = d3.select(svgRef.current);

    // Clear existing chart
    svg.selectAll("*").remove();

    // Use 'width' and 'height' for your chart dimensions
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.year.toString()))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.cases)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.year.toString()))
      .attr("y", (d) => yScale(d.cases))
      .attr("width", "10px")
      .attr("height", (d) => height - margin.bottom - yScale(d.cases))
      .attr("fill", "black");

    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 5)
      .attr("refY", 5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto-start-reverse")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", "black");

    // Add x-axis
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickSizeInner(0)
          .tickSizeOuter(0)
          .tickValues([data[0].year.toString(), data[data.length - 1].year.toString()])
      )
      .selectAll("text")
      .attr("y", margin.bottom - 20)
      .attr("text-anchor", "end");

    // Add y-axis
    svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(
        d3.axisLeft(yScale).tickSizeInner(0).tickSizeOuter(0).tickValues([0, 80])
      );

    // Add text at the end of x-axis
    svg
      .append("text")
      .attr("x", width - margin.right + 30)
      .attr("y", height - margin.bottom + 5)
      .attr("text-anchor", "end")
      .style("font-size", "12px")
      .text("ปี");

    // Add text at the end of y-axis
    svg
      .append("text")
      .attr("x", margin.left + 30)
      .attr("y", margin.top - 9)
      .attr("text-anchor", "end")
      .style("font-size", "12px")
      .text("จำนวนคดี");
  }, [dimensions]);

  return (
    <div className="chart-container">
      <svg ref={svgRef} className="md:w-[500px] md:h-[300px] h-[300px] w-[320px]"></svg>
    </div>
  );
}

export default Chart;
