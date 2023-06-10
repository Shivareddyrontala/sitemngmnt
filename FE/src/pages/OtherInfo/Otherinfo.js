import React, {useCallback, useEffect,useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material';
import Layoutbasic from '../../Layout/Layoutbasic';
import './Otherinfo.css';
import { Card,CardContent } from '@mui/material';
import Link from '@mui/material/Link';
function Otherinfo() {
    const [files, setFiles] = useState([]);
    const onDrop = useCallback(acceptedFiles => {
        setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file)
              })
            )
          );
      }, []);
      useEffect(()=>{
        console.log(files);
      },[files])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <Layoutbasic>
        <Grid container>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={8}>
                <div {...getRootProps()} className='other-drag-zone-container'>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div>
                <div>
                    <Typography variant='h5'> Uploaded Files </Typography>
                    {
                        files.map((file,index) => (
                            <Card  key={index} className="file_card_root">
                                <CardContent>
                                    <Typography variant='p'>Name : {file.name}</Typography> <br/>
                                    <Link href={file.preview} target="new">Download/Preview</Link>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
        </Grid>

    </Layoutbasic>
  )
}

export default Otherinfo