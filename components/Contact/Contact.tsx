import React, { useContext } from "react";
import ContactContext from "./ContactContext";

const Contact: React.FC = () => {
  const [form, setForm] = useContext(ContactContext);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(form);
    handleReset();
  };

  const handleReset = () => {
    setForm({
      email: "",
      message: "",
      name: "",
      phone: "",
      subject: "",
    });
  };

  return (
    <div className="flex justify-center" id="contact">
      <div className="max-w-7xl w-full px-5 py-12">
        <form
          className="flex flex-col md:flex-row md:space-x-12 md:space-y-0 space-y-4 bg-gray-200 rounded-md shadow-2xl p-5"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <div className="flex flex-col space-y-2 flex-1">
            <h1 className="text-5xl w-full px-1 font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 pb-1">
              Contact Us
            </h1>
            {/*           <h1 className="text-5xl text-gray-50 font-semibold tracking-wide">
            Contact Us
          </h1> */}
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 p-2">
                Subject
              </h2>
              <input
                required
                className="rounded-full h-10 px-5 font-light"
                value={form.subject}
                type="text"
                name="subject"
                placeholder="Subject*"
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 p-2">
                Name
              </h2>
              <input
                required
                className="rounded-full h-10 px-5 font-light"
                value={form.name}
                type="text"
                name="name"
                placeholder="Enter your name*"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="flex md:space-x-5 space-y-2 md:space-y-0 md:flex-row flex-col">
              <div className="flex flex-1 flex-col">
                <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 p-2">
                  Email
                </h2>
                <input
                  required
                  className="rounded-full h-10 px-5 font-light"
                  value={form.email}
                  type="email"
                  name="email"
                  placeholder="Enter yout email*"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 p-2">
                  Phone
                </h2>
                <input
                  value={form.phone}
                  className="rounded-full h-10 px-5 font-light"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 p-2">
                Message
              </h2>
              <textarea
                required
                className="rounded-2xl h-24 px-5 py-2 font-light"
                value={form.message}
                name="message"
                placeholder="Enter your message*"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div className="flex space-x-4 justify-center pt-2">
              <button
                type="submit"
                className="transition ease-in-out duration-500 transform hover:scale-110 px-8 py-2 text-lg rounded-full text-gray-900 bg-yellow-400 hover:bg-yellow-500 font-semibold tracking-wide"
              >
                Submit
              </button>
              <button
                type="reset"
                className="transition ease-in-out duration-500 transform hover:scale-110 px-8 py-2 text-lg rounded-full text-gray-50 bg-blue-800 hover:bg-blue-900 font-semibold tracking-wide"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5 h-full">
            <h1 className="text-5xl w-full md:px-2 px-5 font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 pb-1">
              Find Us
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7533.1023092517635!2d72.97481711614647!3d19.25838371340115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9e46b55a8ecedd2!2sTara%20stationery!5e0!3m2!1ses-419!2suk!4v1620613026283!5m2!1ses-419!2suk"
              className="w-11/12"
              height="450"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
