import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
 {id: 1, name: "Yorkshire Terrier", life_span: "12 - 16 years", bred_for: "Small vermin hunting"},
 {id: 2, name: "Yorkshire Terrier", life_span: "12 - 16 years", bred_for: "Small vermin hunting"},
 {id: 3, name: "Yorkshire Terrier", life_span: "12 - 16 years", bred_for: "Small vermin hunting"},
 {id: 4, name: "Yorkshire Terrier", life_span: "12 - 16 years", bred_for: "Small vermin hunting"},
 {id: 5, name: "Yorkshire Terrier", life_span: "12 - 16 years", bred_for: "Small vermin hunting"},
 {id: 6, name: "Yorkshire Terrier", life_span: "12 - 16 years", bred_for: "Small vermin hunting"},
 {id: 7, name: "Yorkshire Terrier", life_span: "12 - 16 years", bred_for: "Small vermin hunting"},
 {id: 8, name: "Yorkshire Terrier", life_span: "12 - 16 years", bred_for: "Small vermin hunting"},
 {id: 9, name: "Yorkshire Terrier", life_span: "12 - 16 years", bred_for: "Small vermin hunting"}
];

const columns: GridColDef[] = [
  { field: 'name', headerName: 'BREED', width: 673 },
  { field: 'life_span', headerName: 'LIFE SPAN', width: 673 },
];

export default function Table() {
  return (
    <div style={{ height: 1000, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
