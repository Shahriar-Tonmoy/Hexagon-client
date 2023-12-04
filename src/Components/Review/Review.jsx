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
        <div className="chat-header">
          {review?.userEmail}
        </div>
        <div className="chat-bubble bg-[#1B9C85]">{review?.review}</div>
      </div>
    </div>
  );
};

export default Review;
