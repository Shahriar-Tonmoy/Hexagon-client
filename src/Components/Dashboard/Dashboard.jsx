import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";
import AgentDashboard from "../AgentDashboard/AgentDashboard";

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
    console.log(currentUser?.role);
    const role = currentUser?.role;
    const agentDashBoard = <div>
                                <div></div>
                            </div>
    const adminDashBoard = <div><h1>Admin Dashboard</h1></div>
    const userDashBoard = <div><h1>User Dashboard</h1></div>
    return (
        <div className="min-h-screen">
            {
                (role === 'agent' && 
                <AgentDashboard currentUser={currentUser}></AgentDashboard>)
            }
            {
                (role === 'admin' && adminDashBoard)
            }
            {
                (role === 'user' && userDashBoard)
            }
        </div>
    );
};

export default Dashboard;