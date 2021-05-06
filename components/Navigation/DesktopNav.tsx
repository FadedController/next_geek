const DesktopNav = (): JSX.Element => {
  return (
    <nav className="flex w-full bg-gray-100 dark:bg-gray-800 dark:text-gray-50 shadow-lg justify-center">
      <div className="flex max-w-7xl space-x-8 flex-1 px-5">
        <div>logo</div>
        <div className="flex flex-1 justify-end">
          <ul className="flex">
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
