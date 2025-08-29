import {  Field, Formik } from 'formik';
import React from 'react'
import { Form } from 'react-router-dom';
import FieldWrapper from '../../../componant/common/fieldWrapper/FieldWrapper';

export default function ContactEmail() {
  return (
      <div className="contact-email mt-[6em] w-[80%]">
          <h2 className="text-[2.18rem] line-hight-[1.5em] font-[600]">Let’s talk about your project</h2>
          <p>Integer ac interdum lacus. Nunc porta semper lacus a varius pellentesque habitant morbi tristique senectus et netus.</p>
          <Formik initialValues={{ name: "", email: "" }} onSubmit={[(values) => console.log(values)]}>
              <Form>
                  <FieldWrapper name={"name"} label={"First Name *"} type={"name"} placeholder={"E.g. John"} />
                  <FieldWrapper name={"email"} label={"Email *"} type={"email"} placeholder={"E.g. john@doe"} />
                  {/* <FieldWrapper as="textarea" name="name" label={"Message"} type={"text"} placeholder={"Enter your message"} className="w-full p-2 border rounded-md " /> */}
                  {/* <Field className="!w-[50%] bg-amber-200" as="textarea" id="message" name="message" placeholder="Enter your message" className="w-full p-2 border rounded-md" rows="5" /> */}
                  {/* <Field type="name" name="name" placeholder="E.g. John" />
                  <Field type="email" name="email" placeholder="E.g. john@doe.com" /> */}
              </Form>
          </Formik>
      </div>
  );
}
