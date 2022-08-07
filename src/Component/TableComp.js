import React from 'react'
import { Table,TableBody,TableCell,TableContainer,
    TableHead,TableRow, Paper, Button, Box  } from '@mui/material';

import { connect, useDispatch } from 'react-redux';
import { deletePost } from '../actions/userAction';
import { useMediaQuery } from '@mui/material';
const mapStatetoProps = (state) => {

    return {
        getPostList : state.posts.getPostList,
        errorUser : state.posts.errorUser
    }
}

const TableComp = ({getPostList,errorUser}) => {
    const isTablet = useMediaQuery('(min-width:700px)');

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        console.log(`user with id ${id} is being deleted...`);
        dispatch(deletePost(id))
    }
  return (
    <>
        {getPostList ? (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: '350px' }}
             aria-label="simple table"
             size='small'
            padding={isTablet ? 'normal' : 'none'}
             >
            <TableHead>
                <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Body</TableCell>
                <TableCell align="center">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {getPostList.map((post) => (
                <TableRow
                    key={post.id}
                >
                    <TableCell align="center">{post.id}</TableCell>
                    <TableCell align="center">{post.title}</TableCell>
                    <TableCell align="center">{post.body}</TableCell>
                    <TableCell align="center">
                        <Box
                        className='buttonLayout'
                        >
                            <Button sx={{ backgroundColor : '#757de8', color : '#002984'}}
                            href={'/edit/' + post.id}
                            >
                                Edit
                            </Button>

                            <Button sx={{ backgroundColor : '#757de8', color : '#002984'}} 
                            onClick={() => handleDelete(post.id)}
                            >
                                Delete
                            </Button>
                            
                            <Button sx={{ backgroundColor : '#757de8', color : '#002984'}} 
                            href={'/detail/' + post.id}
                            >
                                Detail
                            </Button>
                        </Box>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
        ) : (
            <div>
                {errorUser ? <p>{errorUser}</p> : 'LOADING...'}
            </div>
        )}
    </>
  )
}

export default connect(mapStatetoProps,null)(TableComp)