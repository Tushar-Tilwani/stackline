import React, { useMemo } from "react";
import { Chart } from "react-google-charts";
import "./graph.css";

export const GraphContainer = React.memo(({ sales }) => {
  const data = useMemo(
    () => sales.reduce(
      (acc, sale) => {
        acc.push([
          new Date(sale.weekEnding),
          sale.retailSales,
          sale.wholesaleSales
        ]);
        return acc;
      },
      [[{ type: "date" }, { type: "number" }, { type: "number" }]]
    ),
    [sales]
  );

  return (
    <div className="graph-container">
      <Chart
        chartType="Line"
        data={data}
        width="calc(100% - 10px)"
        height="400px"
        options={{
          chart: {
            title: "Retail Sales",
            legend: {position: 'none'}
          }
        }}
      />
    </div>
  );
});
