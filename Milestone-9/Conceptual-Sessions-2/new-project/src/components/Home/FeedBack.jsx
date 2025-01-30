/* eslint-disable react/prop-types */
const FeedBack = ({ feedBackData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-10">
      {feedBackData.map((feed, i) => (
        <div
          key={i}
          className="border rounded-lg shadow-md p-4 bg-white flex gap-4 items-start"
        >
          {/* User Image */}
          <img
            src={feed.image}
            alt={feed.name}
            className="w-16 h-16 rounded-full object-cover"
          />

          {/* Content Section */}
          <div>
            {/* Name and Date */}
            <h3 className="text-lg font-semibold text-gray-800">{feed.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(feed.date).toLocaleDateString()}
            </p>

            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, star) => (
                <span
                  key={star}
                  className={`${
                    star < feed.rating ? "text-yellow-400" : "text-gray-300"
                  } text-lg`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-600 mt-2 text-sm">{feed.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;
