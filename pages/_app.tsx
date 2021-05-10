import { useState } from "react";
import "tailwindcss/tailwind.css";
import ContactContext from "../components/Contact/ContactContext";
import "../styles/styles.css";

interface Form {
  subject: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const MyApp = ({ Component, pageProps }) => {
  const [form, setForm] = useState<Form>({
    email: "",
    message: "",
    name: "",
    phone: "",
    subject: "",
  });

  return (
    <ContactContext.Provider value={[form, setForm]}>
      <div className="bg-gray-100 min-h-screen">
        <Component {...pageProps} />
      </div>
    </ContactContext.Provider>
  );
};

export default MyApp;
