import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { apiSendEmail } from "api/mail";
import Swal from "sweetalert2";

export const ContactForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-14 sm:py-28 px-2 sm:px-4 w-full max-w-7xl mx-auto">
      <div className="container mx-auto mb-8 sm:mb-20 text-center">
        <h3 className="text-base sm:text-lg font-bold text-cyan-600 uppercase mb-2">
          Let's Connect
        </h3>
        <p className="text-sm sm:text-lg text-gray-500 mx-auto w-full px-2 sm:px-4 lg:w-11/12 lg:px-8">
          We'll help you to transform your salon into Smart Salon just fill all
          the required fields and we will connect with you soon
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="grid place-items-center space-y-6 sm:space-y-8 mb-8 lg:mb-20">
          <div className="container mx-auto text-center grid gap-2 sm:gap-4">
            <button
              onClick={() => navigate("/")}
              className="text-lg flex gap-2 items-center justify-center font-bold text-white"
            >
              <img
                alt="logo"
                src="../image/smartsalonbot-logo.jpg"
                className="h-20 w-20 sm:h-28 sm:w-28"
              />
            </button>
            <p className="text-sm sm:text-lg text-gray-500 mx-auto w-full px-2 sm:px-4 lg:w-11/12 lg:px-8">
              Smart Salon Bot is a revolutionary Salon Management software
              designed to simplify the operations of your salon.
            </p>
          </div>
          <div className="container mx-auto text-center">
            <h3 className="text-sm sm:text-lg font-bold text-cyan-900 uppercase mb-2">
              Email
            </h3>
            <p className="text-sm sm:text-lg text-gray-500 mx-auto w-full px-2 sm:px-4 lg:w-11/12 lg:px-8">
              info@smartsalonbot.com
            </p>
          </div>
          <div className="container mx-auto text-center">
            <h3 className="text-sm sm:text-lg font-bold text-cyan-900 uppercase mb-2">
              Contact
            </h3>
            <p className="text-sm sm:text-lg text-gray-500 mx-auto w-full px-2 sm:px-4 lg:w-11/12 lg:px-8">
              +91-933 616 6483
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

export const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        await apiSendEmail({
          email: values.email,
          subject: `Smart Salon Bot : Contact Form Submission from ${values.firstName} ${values.lastName}`,
          text: `
Name: ${values.firstName} ${values.lastName}
Email: ${values.email}
Contact: ${values.contact || "Not provided"}
Message: ${values.message || "No message provided"}
          `.trim(),
        });
        resetForm();
        Swal.fire({
          title: "Message Sent",
          text: "Your message has been sent successfully. We will get back to you soon.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        console.error("Error sending message:", error);
        Swal.fire({
          title: "Error",
          text: "There was an error sending your message. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const inputClass =
    "mt-2 w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base min-h-[40px] sm:min-h-[44px]";
  const errorClass = "text-xs text-red-600 mt-1";

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
      <div className="relative">
        <div className="absolute -inset-1 rounded-md blur-xl opacity-50 bg-gradient-to-br from-cyan-300 via-white to-yellow-200"></div>

        <form
          onSubmit={formik.handleSubmit}
          className="relative z-10 bg-white p-3 sm:p-4 md:p-6 rounded-md shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
                First Name <span className="text-red-600">*</span>
              </span>
              <input
                type="text"
                name="firstName"
                placeholder="Type first name here"
                className={inputClass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className={errorClass}>{formik.errors.firstName}</p>
              ) : (
                <p className="text-xs text-gray-500 mt-1">Required</p>
              )}
            </div>

            <div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
                Last Name <span className="text-red-600">*</span>
              </span>
              <input
                type="text"
                name="lastName"
                placeholder="Type last name here"
                className={inputClass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className={errorClass}>{formik.errors.lastName}</p>
              ) : (
                <p className="text-xs text-gray-500 mt-1">Required</p>
              )}
            </div>

            <div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
                Contact Number
              </span>
              <input
                type="tel"
                name="contact"
                placeholder="Type contact number here"
                className={inputClass}
                onChange={formik.handleChange}
                value={formik.values.contact}
              />
              <p className="text-xs text-gray-500 mt-1">Optional</p>
            </div>

            <div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
                Email <span className="text-red-600">*</span>
              </span>
              <input
                type="email"
                name="email"
                placeholder="Type email here"
                className={inputClass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className={errorClass}>{formik.errors.email}</p>
              ) : (
                <p className="text-xs text-gray-500 mt-1">Required</p>
              )}
            </div>
          </div>

          <div className="mt-3 sm:mt-4">
            <span className="text-xs sm:text-sm font-medium text-gray-700 px-1">
              Message
            </span>
            <textarea
              name="message"
              placeholder="Type your message here"
              className={`${inputClass} resize-none`}
              rows={4}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <p className="text-xs text-gray-500 mt-1">Optional</p>
          </div>

          <div className="mt-4 sm:mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gradient-btn px-6 py-2 sm:py-3 text-white rounded-md font-medium text-sm sm:text-base min-h-[40px] sm:min-h-[44px] disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
