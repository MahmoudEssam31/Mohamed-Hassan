import * as Yup from "yup";

export const validationSchema = Yup.object({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Invalid name")
        .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});
