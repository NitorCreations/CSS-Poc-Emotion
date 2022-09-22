import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { css } from '@emotion/react';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

// const titleStyle = css`
//   background-color: red;
//   color: red;
// `;

const titleStyle = css({
  boxSizing: 'border-box',
  color: 'red',
  width: 300,
  height: 200,
});

function App() {
  return (
    <div>
      <h1 css={{ color: 'hotpink' }}>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor='firstName'>First Name</label>
          <Field id='firstName' name='firstName' placeholder='John' />

          <label htmlFor='lastName'>Last Name</label>
          <Field id='lastName' name='lastName' placeholder='Doe' />

          <label htmlFor='email'>Email</label>
          <Field
            id='email'
            name='email'
            placeholder='john@acme.com'
            type='email'
          />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
