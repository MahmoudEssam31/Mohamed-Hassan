import { ErrorMessage, Field } from "formik";
import React from "react";

export default function FieldWrapper({ name, type, placeholder,label }) {
    return (
        <div className="field-wrapper mb-8 ">
            <label label={label} htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>
            <Field type={type} name={name} placeholder={placeholder} className="lg:w-[60%] md:w-[70%] w-[100%] p-2 border bg-[var(--bg-form)] focus:outline-none focus:border-blue-500"/>
            <ErrorMessage name={name} component="p" className="text-red-600 mt-0.5 text-[.8rem]"/>
        </div>
    );
}
