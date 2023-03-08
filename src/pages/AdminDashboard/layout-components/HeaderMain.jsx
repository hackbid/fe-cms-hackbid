const HeaderMain = ({ path }) => {
  return (
    <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="min-w-0 flex-1">
        <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
          {path}
        </h1>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Workcation is a property rental website. Etiam ullamcorper massa
          viverra consequat, consectetur id nulla tempus. Fringilla egestas
          justo massa purus sagittis malesuada.
        </p>
      </div>
    </div>
  );
};

export default HeaderMain;
