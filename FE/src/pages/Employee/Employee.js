import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './Employee.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Layoutbasic from '../../Layout/Layoutbasic';
import {HTTP_POST,HTTP_GET} from '../../httpCommon';

function Employee() {
  const [name,setName] = useState('');
  const [number,setNumber] = useState('');
  const [age,setAge] = useState('');
  const [allData,setAllData]  = useState([]);

  useEffect(() =>{
      getAllRecords();
  },[]);

  const getAllRecords = () => {
    const result = HTTP_GET('employees');
    result.then((data) =>{
      if(data.data?.status == 'ok'){
        setAllData(data?.data?.employeeData);
      }
    })
  }
  const submitForm = async () => {
    var empData = {name: name, number : number , age: age}
    const result  = await HTTP_POST('employee/register',empData);
    setName('');
    setNumber('');
    setAge('');
    getAllRecords();
  }

  const deleteRecord = (val) =>{
    let existingData = [... allData];
    existingData.splice(0,val);
    setAllData(existingData);
  }

  const editRecord = (val) =>{
    setName(allData[val].name);
    setAge(allData[val].age);
    setNumber(allData[val].number);
  }

  return (
     <Layoutbasic>
          <Grid container spacing={3} style={{padding: '3rem'}}>
            <Grid item  md={4}></Grid>
            <Grid item  md={4}>
              <Card>
                <CardContent>
                  <div className="input_margin_btm">
                    <TextField  fullWidth id="outlined-basic" value={name} label="Employee Name" variant="outlined" onChange={e => setName(e.target.value)}  />
                  </div>
                  <div className="input_margin_btm">
                    <TextField   fullWidth id="outlined-basic" value={number} label="Mobile Number" variant="outlined" onChange={e => setNumber(e.target.value)}  />
                  </div>
                  <div className="input_margin_btm">
                    <TextField  fullWidth id="outlined-basic" value={age} label="Age" variant="outlined" onChange={e => setAge(e.target.value)} />
                  </div>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" size="small" onClick={submitForm}>Add Details</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item  md={4}></Grid>
          </Grid>

          <Grid container spacing={3} style={{padding: '3rem'}}>
            <Grid item  md={2}></Grid>
            <Grid item  md={8}>
                <Card>
                  <CardContent>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Age</TableCell>
                          <TableCell align="right">Number</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {allData.map((row,index) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.number}</TableCell>
                            <TableCell  align="right">
                              <IconButton aria-label="delete" size="large" color="error" onClick={() => deleteRecord(index)}>
                                <DeleteIcon />
                              </IconButton>
                              <IconButton aria-label="delete" size="large" color="primary" onClick={() => editRecord(index)}>
                                <EditIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item  md={2}></Grid>
          </Grid>
     </Layoutbasic>
  )
}

export default Employee