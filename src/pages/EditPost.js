import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getDetailPost, updatePost } from '../actions/userAction';
import { Form, Field } from 'react-final-form'
// mui
import {Button, Box} from '@mui/material'


const mapStatetoProps = (state) => {
  return {
      getRespondData : state.posts.getRespondData,
      errorRespondData : state.posts.errorRespondData,
      getPostDetail : state.posts.getPostDetail,
  }
}

const EditPost = ({getPostDetail}) => {
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(getDetailPost(params.id))
  })

  return (
    <div>
      <h3>Edit Post</h3>
      <Form
          initialValues={{
          id : getPostDetail.id,
              title : getPostDetail.title,
              body : getPostDetail.body,
          }}
          onSubmit={ values => {
              values.id = Math.floor(Math.random() * 100000)
              dispatch(updatePost(values, params.id))
          }}
          >
          {({ handleSubmit, pristine, form, submitting }) => (
            <form
            onSubmit={handleSubmit}
            >
              <div className='inputWrapper'>
                <label>Title post</label>
                <Field
                  name="title"
                  component="input"
                  type="text"
                  placeholder="insert post title"
                className='form_field'
                />
              </div>
              <div className='inputWrapper'>
                <label>Body post</label>
                <Field
                  name="body"
                  component="textarea"
                  type="text"
                  placeholder="body post"
                  className='form_field textArea'
                />
              </div>

              <Box
              sx={{
                display : 'flex',
                gap : '10px'
              }}
              >
                <div>
                  <Button sx={{ 
                    backgroundColor : '#757de8', 
                    color : '#002984',
                    marginBlock : '20px'
                  }}  
                  type="submit" disabled={submitting}>
                  Submit
                  </Button>
                </div>

                <div>
                  <Button sx={{ 
                    backgroundColor : '#757de8', 
                    color : '#002984',
                    marginBlock : '20px'
                  }}  
                  href='/'
                  >
                  Back
                  </Button>
                </div>
              </Box>
            </form>
            )}
          </Form>
    </div>
  )
}

export default connect(mapStatetoProps,null)(EditPost)