import { useLoaderData, useParams } from "react-router-dom";

const Profile = () => {
  const allUsers = useLoaderData();
  const { id } = useParams();
  const selectedUser = allUsers.find((user) => user._id == id);
  return (
    <div className="min-h-screen">
      <div className="hero min-h-screen bg-[#222831]">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={selectedUser?.photo}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-[#EEEEEE] text-5xl font-bold"><span className="text-[#00ADB5] text-7xl font-semibold">Name:</span> {selectedUser?.name}</h1>
            <p className={`py-6 text-[#EEEEEE] text-5xl font-bold ${(selectedUser?.role === 'user') && 'hidden' }`}>
            <span className={`text-[#00ADB5]  text-7xl font-semibold`}>Role:</span> {selectedUser?.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
