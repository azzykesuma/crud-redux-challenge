import axios from 'axios'
// sweet alert
import Swal from 'sweetalert2'

export const GET_POST_LIST = 'GET_POST_LIST'
export const GET_POST_DETAILS = 'GET_POST_DETAILS'
export const CREATE_POST = 'CREATE_POST'
export const PATCH_POST = 'PATCH_POST'
export const DELETE_POST = 'DELETE_POST'

export const getPostList = () => {
    return (dispatch) => {
        return axios
            .get('https://jsonplaceholder.typicode.com/posts/?_limit=10')
            .then(res => {
              dispatch({
                type : GET_POST_LIST,
                payload : {
                    data : res.data,
                    errorUser : false
                }
              })
            })
            .catch(err => {
                dispatch({
                    type : GET_POST_LIST,
                    payload : {
                        data : false,
                        errorUser : err.message
                    }
                  })
                })
    }
}
export const getDetailPost = (id) => {
    return (dispatch) => {
        return axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
              dispatch({
                type : GET_POST_DETAILS,
                payload : {
                    data : res.data,
                    errorUser : false
                }
              })
            })
            .catch(err => {
                dispatch({
                    type : GET_POST_DETAILS,
                    payload : {
                        data : false,
                        errorUser : err.message
                    }
                  })
                })
    }
}
export const createPost = (data) => {
    return (dispatch) => {
        return axios
            .post(`https://jsonplaceholder.typicode.com/posts`, 
              data 
            )
            .then(res => {
              console.log(res)
              dispatch({
                type : CREATE_POST,
                payload : {
                    data : res.data,
                    errorUser : false
                }
              })
              if(res.status === 201) {
                Swal.fire(
                  `Data Submitted`,
                  `details : id = ${res.data.id}; title = ${res.data.title}; body = ${res.data.body};`,
                  'success'
                )
                // the settimeout is fired to "reset" the data, so that the user
                // can see a blank input field once they revisit the page
                setTimeout(() => {
                  dispatch({
                    type : CREATE_POST,
                    payload : {
                      data : false,
                      errorUser : false
                    }
                  })
                },5000)
              }
            })
            .catch(err => {
                dispatch({
                    type : CREATE_POST,
                    payload : {
                        data : false,
                        errorUser : err.message
                    }
                  })
                })
    }
}

export const updatePost = (data,id) => {
    return (dispatch) => {
        return axios
            .put(`https://jsonplaceholder.typicode.com/posts/${id}`,data)
            .then(res => {
              console.log(res)
              Swal.fire(
                `Data Updated`,
                `details : id = ${res.data.id}; title = ${res.data.title}; body = ${res.data.body};`,
                'success'
              )
              dispatch({
                type : PATCH_POST,
                payload : {
                    data : res.data,
                    errorUser : false
                }
              })
            })
            .catch(err => {
                dispatch({
                    type : PATCH_POST,
                    payload : {
                        data : false,
                        errorUser : err.message
                    }
                  })
                })
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        return axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
              console.log(`user deleted!`)
              Swal.fire({
                title: 'Are you sure?',
                text: "The deleted text will still be able to be seen in the home section",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  console.log(res)
                  dispatch({
                    type : DELETE_POST,
                    payload : {
                        data : res.data,
                        errorUser : false
                    }
                  })
                }
              })
            })
            .catch(err => {
                dispatch({
                    type : DELETE_POST,
                    payload : {
                        data : false,
                        errorUser : err.message
                    }
                  })
                })
    }
}
