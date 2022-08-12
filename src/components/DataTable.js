import React, {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const columns = [
  { field: 'name', headerName: 'BREED NAME', width: 445},
  { field: 'life_span', headerName: 'EXPECTED LIFETIME', width: 445},
  { headerName: 'ALL INFORMATION', width: 445}
];

const DataTable = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([])


  Axios.get('https://api.thedogapi.com/v1/breeds').then((res) => {
    setTableData(res.data);
  });

   return (
    <div style={{height: 1359, width:'100%'}}>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={24}
        onRowClick={() => {navigate('/details')}} 
      />
    </div>
  )
}

export default DataTable