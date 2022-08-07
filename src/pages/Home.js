import React, { Component } from 'react'
import TableComp from '../Component/TableComp'
import { connect } from 'react-redux' 
import { getPostList } from '../actions/userAction'
import { Button, Container, Typography, Box } from '@mui/material';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getPostList());
  }

  render() {
    
    return (
      <div>
        <Container maxWidth='lg'>
          <Typography component='h1' variant='h5'>CRUD App</Typography>
          <Typography component='h2' variant='body1'>
            A simple app to perform CRUD (Create, Read, Update, Delete) operations
          </Typography>
          <Button href='/create'
          sx={{ 
            backgroundColor : '#757de8', 
            color : '#002984',
            marginBlock : '20px'
          }}
          >Create Post</Button>
          <TableComp />
          <Box
          sx={{ marginTop : '20px'}}
          >
            <Typography component='h4' variant='h6'>
              Notes : 
            </Typography>
            <ul>
              <li><Typography>The data source is JSONplaceholder</Typography></li>
              <li>
                <Typography>
                  Data changes in the placeholder is not allowed, so eventhough the UI tells the 
                  action success, the actual data is NOT changed
                </Typography>
                </li>
              <li>
                <Typography>
                  To check whether or not the data is actually changed, you may need to open
                  the console, or install redux dev tools
                </Typography>
                </li>
            </ul>
          </Box>
        </Container>
      </div>
    );
  }
}
export default connect()(Home)