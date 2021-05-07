import "tailwindcss/tailwind.css";
import "../styles/styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
