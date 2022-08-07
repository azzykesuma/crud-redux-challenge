import React from 'react'
import { Button,Container,Typography } from '@mui/material'
import { useDispatch,connect } from 'react-redux';
import { createPost } from '../actions/userAction';
import { Form, Field } from 'react-final-form'


const mapStatetoProps = (state) => {
  return {
      getRespondData : state.posts.getRespondData,
      errorRespondData : state.posts.errorRespondData,
      getPostDetail : state.posts.getPostDetail,
  }
}

const Create = ({getPostDetail}) => {
  const dispatch = useDispatch()

    return (
      <>
      <Container sx={{ marginTop : '20px'}} maxWidth='lg'>
        <Typography variant='h4' component='h2'>Create Post</Typography>
        <Typography variant='body1' component='h3'>
          Fill out the form to add the data
        </Typography>
          <Form
          initialValues={{
          id : getPostDetail.id,
              title : getPostDetail.title,
              body : getPostDetail.body,
          }}
          onSubmit={ values => {
              values.id = Math.floor(Math.random() * 100000)
              dispatch(createPost(values))
          }}
          >
          {({ handleSubmit, pristine, form, submitting }) => (
            <form
            onSubmit={handleSubmit}
            className='formWrapper'
            >
              <div className='inputWrapper'>
                <label>Title post</label>
                <Field
                  name="title"
                  type="text" 
                  placeholder="insert post title"
                  component='input'
                  className='form_field'
                />
              </div>
              <div className='inputWrapper'>
                <label>Body post</label>
                <Field
                  name="body"
                  type="text"
                  component='textarea'
                  placeholder="insert post..."
                  className='form_field textarea'
                />
              </div>
              <div>
                <Button type="submit" disabled={submitting}>
                  Submit
                </Button>
              </div>
            </form>
            )}
          </Form> 
        <Button sx={{ 
            backgroundColor : '#757de8', 
            color : '#002984',
            marginBlock : '20px'
          }} 
          href='/'>Back</Button>
      </Container>
    </>
  )
}

export default connect(mapStatetoProps,null)(Create);