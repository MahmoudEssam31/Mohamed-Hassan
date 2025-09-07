import {  Field, Formik } from 'formik';
import React from 'react'
import { Form } from 'react-router-dom';
import FieldWrapper from '../../../componant/common/fieldWrapper/FieldWrapper';

export default function ContactEmail() {
  return (
      <div className="contact-email mt-[6em] lg:w-[80%] md:w-full w-full flex flex-col gap-[1.5rem]">
          <h2 className="text-[2.18rem] line-hight-[1.5em] font-[600]">Let’s talk about your project</h2>
          <p className="w-[60%]">Integer ac interdum lacus. Nunc porta semper lacus a varius pellentesque habitant morbi tristique senectus et netus.</p>
          <Formik initialValues={{ name: "", email: "", message: "" }} onSubmit={[(values) => console.log(values)]}>
              <Form>
                  <FieldWrapper name={"name"} label={"First Name *"} type={"name"} placeholder={"E.g. John"} />
                  <FieldWrapper name={"email"} label={"Email *"} type={"email"} placeholder={"E.g. john@doe"} />
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                      {"Message *"}
                  </label>
                  <Field className="!w-[60%] h-[12rem] bg-[var(--bg-form)] p-2 border " as="textarea" id="message" name="message" placeholder="Enter your message" />
                  <button
                      className="w-[10rem] h-[4rem] bg-[var(--background-color)] text-[var(--main-color)] text-[1rem] font-[600] border border-[var(--bg-form)] flex justify-center items-center rounded-3xl my-[2rem] cursor-pointer hover:bg-[var(--yellow-color)] hover:text-[var(--background-color)] duration-300"
                      type="submit">
                      Send Message
                  </button>
              </Form>
          </Formik>
      </div>
  );
}
