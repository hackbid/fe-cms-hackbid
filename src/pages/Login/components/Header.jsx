const Header = ({ title }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        className="mx-auto h-12 w-auto sm:h-20"
        src="https://i.imgur.com/KpZjtls.png"
        alt="HackBid Logo"
      />
      <h2 className="text-hackbid-primary mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
    </div>
  );
};

export default Header;
