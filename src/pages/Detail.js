import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getDetailPost } from '../actions/userAction';
import { Table,TableBody,TableCell,TableContainer,
    TableHead,TableRow, Paper, Button, Box  } from '@mui/material';

const mapStatetoProps = (state) => {
    return {
        getPostDetail : state.posts.getPostDetail,
        errorUserDetail : state.posts.errorUserDetail
    }
}

const Detail = ({getPostDetail}) => {

    const dispatch = useDispatch();
    let params = useParams();

    useEffect(() => {
      dispatch(getDetailPost(params.id))
    })


  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Body</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow
                    key={getPostDetail.id}
                >
                    <TableCell align="center">{getPostDetail.id}</TableCell>
                    <TableCell align="center">{getPostDetail.title}</TableCell>
                    <TableCell align="center">{getPostDetail.body}</TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        <Button sx={{ 
            backgroundColor : '#757de8',
            color : '#002984',
            marginTop : '20px'
            }} href={'/'}>Back</Button>
    </div>
  )
}

export default connect(mapStatetoProps,null)(Detail);

