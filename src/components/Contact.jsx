import React, { useState } from "react";
import CarThree from "../components/three/CarThree";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", form);

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div  id="contact" className="bg-black text-white min-h-screen px-6 md:px-16 py-20">

      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold mb-6 text-center md:text-left">
        CONTACT
      </h1>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

        <div className="flex justify-center items-center h-[350px] md:h-[500px] border border-white/10 rounded-xl overflow-hidden">
          <CarThree />
        </div>

        <div className="flex justify-center">
          <div className="w-full  bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10 shadow-lg">

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block mb-1 text-sm">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 transition"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block mb-1 text-sm">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 transition"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block mb-1 text-sm">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 transition"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block mb-1 text-sm">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 transition"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300 font-medium"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-green-500 text-center text-sm">
                  Message sent successfully!
                </p>
              )}

            </form>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;