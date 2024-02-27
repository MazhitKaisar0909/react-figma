import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '../common/button/button';

const ContactSchema = Yup.object().shape({

    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),

});

const Contact = () => {
    return (
        <section>
            <h4>
                Feeling like you have seen enough?<br/>
                <span className={'purpleWords'}>Lets work together!</span>
            </h4>
            <Formik
                initialValues={{
                    name: '',
                    message: '',
                    email: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <Field name="message" />
                        {errors.message && touched.message ? (
                            <div>{errors.message}</div>
                        ) : null}
                        <Button id='contact'/>
                    </Form>
                )}
            </Formik>
            <p>
                Or if you have any questions left <br/>
                Be sure to <a href='#'>contact</a> us, we always love to hear you!
            </p>
        </section>
    )
}

export default Contact