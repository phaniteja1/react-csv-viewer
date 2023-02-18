import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "react-table/react-table.css";
import ReactTable from "react-table";
import CsvInput from "./CsvInput";

function Interface() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    if (data.length && columns.length) setLoading(false);
  }, [data, columns]);

  const handleFileChange = file => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: handleDataChange
    });
  };

  const makeColumns = rawColumns => {
    return rawColumns.map(column => {
      return { Header: column, accessor: column };
    });
  };

  const handleDataChange = file => {
    setData(file.data);
    setColumns(makeColumns(file.meta.fields));
  };

  const handleRowSelect = (state, rowInfo) => {
    if (rowInfo) {
      const index = selectedRows.findIndex(
        r => r.index === rowInfo.index
      );
      if (index > -1) {
        setSelectedRows([
          ...selectedRows.slice(0, index),
          ...selectedRows.slice(index + 1)
        ]);
      } else {
        setSelectedRows([...selectedRows, rowInfo]);
      }
    }
  };

  const filterCaseInsensitive = (filter, row) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined
      ? String(row[id])
          .toLowerCase()
          .includes(filter.value.toLowerCase())
      : true;
  };

  return (
    <div>
      <CsvInput handleFileChange={handleFileChange} data={data} />
      {!loading && (
        <ReactTable
          data={data}
          columns={columns.map(column => ({
            ...column,
            filterable: true,
            filterMethod: filterCaseInsensitive,
            Filter: ({ filter, onChange }) => (
              <input
                type="text"
                value={filter ? filter.value : ""}
                onChange={event => onChange(event.target.value)}
              />
            )
          }))}
          defaultPageSize={10}
          className="-striped -highlight"
          getTrProps={(state, rowInfo) => ({
            onClick: () => handleRowSelect(state, rowInfo),
            style: {
              background:
                selectedRows.some(r => r.index === rowInfo.index) &&
                "#4AAED9",
              color:
                selectedRows.some(r => r.index === rowInfo.index) &&
                "white"
            }
          })}
        />
      )}
    </div>
  );
}

export default Interface;
