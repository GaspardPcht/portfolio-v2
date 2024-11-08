"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_e6r5l34", // Remplacez par votre service ID
        "template_vu7u33y", // Remplacez par votre template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "a04RyuWoXUIMeDNPc" // Remplacez par votre user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage({
            text: "Your message has been sent successfully! 😀",
            type: "success",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setMessage({
            text: "There was an error sending your message. Please try again later 😢",
            type: "error",
          });
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className=" mx-auto w-64 md:w-80 bg-[#2C2C2C] p-4 shadow-lg rounded-lg"
    >
      <div className="mb-4">
        <label
          className="block text-[#EAEAEA] text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-[#EAEAEA] leading-tight w-full focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-[#EAEAEA] text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-[#EAEAEA] leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="blocktext-[#EAEAEA] text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-[#EAEAEA] leading-tight focus:outline-none focus:shadow-outlin resize-none h-48"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div
        className="flex justify-center mb-4 cursor-pointer"
        onClick={sendEmail}
      >
      </div>
      {message && (
        <p
          className={`text-xs mt-4 text-center ${
            message.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
