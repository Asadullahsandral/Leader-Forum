import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function Members() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "forumUsers"));

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-6 px-16">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-xl p-4 shadow">
            {/* ✅ ImgBB image — just use src directly */}
            <img
              src={user.profileImage} // this is already the ImgBB URL stored in Firestore
              alt={user.fullName}
              className="w-20 h-20 rounded-full object-cover"
              onError={(e) => {
                e.target.src = "/fallback-avatar.png"; // show fallback if image fails
              }}
            />

            <h3 className="text-lg font-semibold mt-2">{user.fullName}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.role}</p>
            <p className="text-sm text-gray-500">{user.industry}</p>
            <p className="text-sm text-gray-500">{user.location}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Members;
