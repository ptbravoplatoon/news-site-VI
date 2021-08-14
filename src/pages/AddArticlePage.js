import React, { Component, useState, useContext } from 'react';
import { addArticle } from '../api/ArticlesAPI';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import UserContext from '../context/UserContext.js'
// import UserContext from '../context/UserContext';

const AddArticlePage = (props) => {
  const [redirect, setRedirect] = useState(false)
  const userContext = useContext(UserContext);
  const authToken = userContext.user.id;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const articleObject = {
      title: event.target.elements[0].value,
      byline: event.target.elements[1].value,
      abstract: event.target.elements[2].value
    }

    try {
      const response = await addArticle(articleObject, authToken);
      if (response.status === 200) {
        // redirect the user back to Home Page upon successful POST
        setRedirect(true);
      } else {
        const jsonData = await response.json();
        alert(jsonData.error.message);
      }
    } catch (err) {
      console.error('error occurred posting article: ', err);
    }
  }


  return redirect ? <Redirect to='/' /> :  (
    <div style={{ padding: '20px' }}>
      <h3> Add an Article </h3>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" />
        </FormGroup>
        <FormGroup>
          <Label for="byline">Byline</Label>
          <Input type="text" name="byline" id="byline" />
        </FormGroup>
        <FormGroup>
          <Label for="abstract">Abstract</Label>
          <Input type="textarea" name="abstract" id="abstract" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}


export default AddArticlePage;


// Functional solution:
// function AddArticlePage() {
//   const [ redirect, setRedirect ] = React.useState(false);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const articleObject = {
//       title: event.target.elements[0].value,
//       byline: event.target.elements[1].value,
//       abstract: event.target.elements[2].value
//     }

//     try {
//       const response = await addArticle(articleObject);
//       if (response.status === 200) {
//         // redirect the user back to Home Page upon successful POST
//         setRedirect(true);
//       } else {
//         const jsonData = await response.json();
//         alert(jsonData.error.message);
//       }
//     } catch (err) {
//       console.error('error occurred posting article: ', err);
//     }
//   };

//   return redirect ? <Redirect to='/' /> : (
//     <div style={{ padding: '20px' }}>
//       <h3> Add an Article </h3>
//       <Form onSubmit={handleFormSubmit}>
//         <FormGroup>
//           <Label for="title">Title</Label>
//           <Input type="text" name="title" id="title" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="byline">Byline</Label>
//           <Input type="text" name="byline" id="byline" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="abstract">Abstract</Label>
//           <Input type="textarea" name="abstract" id="abstract" />
//         </FormGroup>
//         <Button>Submit</Button>
//       </Form>
//     </div>
//   )
// };
