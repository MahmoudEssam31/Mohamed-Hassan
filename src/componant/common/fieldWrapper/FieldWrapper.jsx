import { Field } from "formik";
import React from "react";

export default function FieldWrapper({ name, type, placeholder }) {
    return (
        <div className="field-wrapper mb-12">
            <label htmlFor={name}></label>
            <Field type={type} name={name} placeholder={placeholder} className="w-[60%] p-2 border bg-[var(--bg-form)] focus:outline-none focus:border-blue-500 " />
        </div>
    );
}
