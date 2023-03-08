const HackbidLoading = () => {
  return (
    <div className="w-full flex justify-center items-center h-[80vh]">
      <div
        className="animate-spin inline-block w-10 h-10 border-[4px] border-current border-t-transparent text-hackbid-primary rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default HackbidLoading;
