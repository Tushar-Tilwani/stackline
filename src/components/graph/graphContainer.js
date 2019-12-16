import React from "react";
import { Chart } from "react-google-charts";
import "./graph.css";

export const GraphContainer = React.memo(({ sales }) => {
  const data = sales.reduce(
    (acc, sale) => {
      acc.push([
        new Date(sale.weekEnding),
        sale.retailSales,
        sale.wholesaleSales
      ]);
      return acc;
    },
    [[{ type: "date" }, { type: "number" }, { type: "number" }]]
  );

  console.log(data);

  return (
    <div className="graph-container">
      <Chart
        chartType="Line"
        data={data}
        width="calc(100% - 10px)"
        height="400px"
        legend="none"
        options={{
          chart: {
            title: "Retail Sales"
          }
        }}
      />
    </div>
  );
});
