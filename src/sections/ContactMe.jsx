import React from "react";
import { contactLinks } from "../utils/data";
import { useForm, ValidationError } from "@formspree/react";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("mwkgwvbr");
  if (state.succeeded) {
    return (
      <div className="bg-white dark:bg-slate-600 shadow-md rounded-lg overflow-hidden max-w-md mx-auto my-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Thank You!</h2>
          <p className="text-gray-700 dark:text-gray-400 text-center">
            Thanks for your message! We've received it and will get back to you
            as soon as possible.
          </p>
          
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="mb-32">
      <div className="pb-20">
        <h2 className="text-center text-4xl font-semibold">Contact Me</h2>
        <p className="text-center text-[#B8B6C1]">
          Want to connect? My inbox is always open!{" "}
        </p>
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-1/2 flex flex-col gap-6">
          {/* links */}
          {contactLinks.map((link) => (
            <a
              key={link.title}
              className="w-full flex flex-row justify-start items-center gap-4"
              target="_blank"
              href={link.address}
            >
              {link.icon}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.address}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="w-1/2">
          {/* form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <div>
              {/* <label className="">Your Name</label> */}
              <input
                name="username"
                className="bg-transparent w-full px-4 py-2 border-[#6E57E0] border-2 rounded-lg focus:outline-none"
                type="text"
                placeholder="Name"
                autoComplete="off"
                required
              />
            </div>
            <div>
              {/* <label className="">Email</label> */}
              <input
                type="email"
                name="email"
                className="bg-transparent w-full px-4 py-2 border-[#6E57E0] border-2 rounded-lg focus:outline-none"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              {/* <label className="">Subject</label> */}
              <input
                type="text"
                className="bg-transparent w-full px-4 py-2 border-[#6E57E0] border-2 rounded-lg focus:outline-none"
                placeholder="Subject"
                name="subject"
                autoComplete="off"
                required
              />
            </div>
            <div>
              {/* <label className="">Message</label> */}
              <textarea
                placeholder="Type your message here"
                name="textarea"
                id=""
                rows="6"
                autoComplete="off"
                minLength={5}
                className="bg-transparent max-h-52 min-h-20 w-full px-4 py-2 border-[#6E57E0] border-2 rounded-lg focus:outline-none"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="textarea"
                errors={state.errors}
              />
            </div>
            <button
              className="hover:bg-[#5A43CB] bg-[#6E57E0] text-white flex justify-center items-center w-full gap-2 py-3 rounded-lg"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
