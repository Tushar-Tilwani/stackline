import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Week Ending",
    selector: "weekEnding",
    sortable: true
  },
  {
    name: "Retail Sales",
    selector: "retailSales",
    sortable: true,
    right: true
  },
  {
    name: "Wholesale Sales",
    selector: "wholesaleSales",
    sortable: true,
    right: true
  },
  {
    name: "Units Sold",
    selector: "unitsSold",
    sortable: true,
    right: true
  },
  {
    name: "Retailer Margin",
    selector: "retailerMargin",
    sortable: true,
    right: true
  }
];

export const TableContainer = React.memo(({ sales }) => (
  <DataTable title="" columns={columns} data={sales} pagination={true} />
));
