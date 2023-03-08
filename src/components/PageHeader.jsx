const PageHeader = ({ title, description }) => {
  return (
    <div className="sm:flex sm:items-center mt-2">
      <div className="sm:flex-auto ">
        <h1 className="font-semibold leading-6 text-gray-900 text-3xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-gray-700 ">{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
