import React from "react";
import Showphotos from "./Showphotos";
function Showdata({users}){
  async function fetchUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  }
  
    return(
      
       <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          User List
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition duration-300"
            >
              <img src="{user.photos}"></img>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {user.name}
              </h2>

              <p className="text-gray-600 mb-1">
                📧 {user.email}
              </p>

              <p className="text-gray-500">
                📞 {user.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}
export default Showdata;