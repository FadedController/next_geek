const BackToTop = (): JSX.Element => {
  return (
    <a
      href="#"
      className="fixed flex items-center justify-center bottom-8 left-6 h-12 w-12 bg-black opacity-50 hover:opacity-80 rounded-xl"
    >
      <span className="material-icons transform -rotate-90 text-gray-50 font-semibold text-xl">
        arrow_forward_ios
      </span>
    </a>
  );
};

export default BackToTop;
