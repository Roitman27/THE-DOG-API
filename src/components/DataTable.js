import React, {useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'BREED NAME', width: 670},
  { field: 'life_span', headerName: 'EXPECTED LIFETIME', width: 670},
];

const DataTable = () => {

  const [tableData, setTableData] = useState([])

useEffect(() => {
  fetch('https://api.thedogapi.com/v1/breeds')
    .then((data) => data.json())
    .then((data) => setTableData(data))
})

  return (
    <div style={{height: 1450, width:'100%'}}>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={25}    
      />
    </div>
  )
}

export default DataTable