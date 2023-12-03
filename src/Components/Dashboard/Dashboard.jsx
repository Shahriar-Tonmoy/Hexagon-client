import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import AgentDashboard from "../AgentDashboard/AgentDashboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import UserDashboard from "../UserDashboard/UserDashboard";

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const { user, signOutUser } = useContext(AuthContext);
    const userEmail = user.email;

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const currentUser = users.find(user => user.email === userEmail)
    console.log(currentUser?.photo);
    const role = currentUser?.role;
    return (
        <div className="min-h-screen">
            {
                (role === 'agent' && 
                <AgentDashboard currentUser={currentUser}></AgentDashboard>)
            }
            {
                (role === 'admin' && 
                <AdminDashboard currentUser={currentUser}></AdminDashboard>)
            }
            {
                (role === 'user' && <UserDashboard currentUser={currentUser}></UserDashboard>)
            }
        </div>
    );
};

export default Dashboard;