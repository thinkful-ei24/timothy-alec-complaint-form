import { SubmissionError } from 'redux-form';

const API = 'https://us-central1-delivery-form-api.cloudfunctions.net/api/report';
export const MAKE_COMPLAINT = 'MAKE_COMPLAINT';

export const makeComplaint = complaint => dispatch => {

  return fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(complaint)
  })
  .then(res => normalizeResponseError(res))
  .then(res => res.json())
  .catch(err => {
    return Promise.reject(new SubmissionError({ _error: err.message }));
  });
}

function normalizeResponseError(res){
  if(!res.ok){  
    return res.json()
      .then(res => {
        const err = new Error();
        err.code = res.code;
        err.message = res.message;
        return Promise.reject(err);
      })
  }
  return res;
}