const Review = ({ review }) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={review?.userImage}
            />
          </div>
        </div>
        <div className="chat-header text-[#EEEEEE]">
          {review?.userEmail}
          <time className="text-xs ml-1 opacity-50">{review?.reviewTime}</time>
        </div>
        <div className="chat-bubble bg-[#00ADB5]">{review?.review}</div>
      </div>
    </div>
  );
};

export default Review;
