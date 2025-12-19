const EventLoadingPage = () => {
  return (
    <div className="max-w-7xl mx-auto pb-8 md:pb-12 px-4 animate-pulse">
      <div className="h-8 w-12 bg-gray-100 rounded mx-auto mb-4" />
      <div className="w-32 h-1 bg-gold mx-auto" />
      <div className="w-60 h-5 bg-gray-100 mt-6 mx-auto" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="bg-gray-100 rounded-lg h-64 "></div>
        ))}
      </div>
    </div>
  );
};

export default EventLoadingPage;
