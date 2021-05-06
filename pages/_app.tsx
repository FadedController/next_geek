import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
