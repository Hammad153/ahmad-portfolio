import * as yup from "yup";

// Contact form validation schema
export const contactSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  subject: yup
    .string()
    .min(5, "Subject must be at least 5 characters")
    .required("Subject is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Message is required"),
});

export const contactInitialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
