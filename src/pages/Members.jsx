import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { MdOutlinePeopleAlt } from "react-icons/md";
import Spinner from "../components/Spinner";

const filters = ["ALL", "STRATEGIC STUDIES", "ECONOMICS", "DIGITAL POLICY"];

function Members() {
  const [active, setActive] = useState("ALL");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const totalMembers = 248;

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

  //   if (loading) {
  //     return (
  //       <div className="flex justify-center items-center py-20">
  //         <Spinner size="lg" variant="border" />
  //       </div>
  //     );
  //   }
  return (
    <>
      <Header />

      <section className="mt-6">
        <div
          className="relative h-[450px] w-full bg-cover bg-center overflow-hidden"
          style={{
            // backgroundImage: `url(${Banner})`,
            backgroundColor: "rgba(0, 77, 39, 1)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-[rgba(0,104,55,0.75)] to-green-600 opacity-80"></div>
          <div className="relative md:px-36 md:py-24 px-4 py-6">
            {/* <p className="text-emerald-300 uppercase text-2xl ">
              INSTITUTIONAL ACCESS
            </p> */}
            <h1 className="text-white text-5xl font-bold my-12">
              Our Distinguished Members
            </h1>
            <p className="md:text-3xl text-xl text-white/80 max-w-3xl   ">
              A collective of visionary leaders, scholars, and policy makers
              dedicated to advancing national and global discourse.
            </p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between px-6 py-3 bg-gray-100 rounded-xl border border-gray-200 flex-wrap gap-4">
        {/* Left — filters */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm text-gray-500 whitespace-nowrap">
            Browse by Faculty:
          </span>
          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                  active === filter
                    ? "bg-green-900 text-white border-green-900"
                    : "bg-transparent text-gray-700 border-gray-400 hover:border-gray-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Right — member count */}
        <div className="flex items-center gap-2">
          <MdOutlinePeopleAlt />
          <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
            {totalMembers} Active Members
          </span>
        </div>
      </div>

      {/* <section className="bg-gray-100 flex w-full h-16 px-12 py-4">
        <span className="">
          <MdOutlinePeopleAlt />
        </span>
        <span>248 Members</span>
      </section> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 my-16">
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-20">
            <Spinner size="lg" variant="border" />
          </div>
        ) : (
          users.map((user) => (
            <div key={user.id} className="bg-white rounded-xl p-4 shadow-xl">
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
          ))
        )}
      </div>

      <section className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
        <p className="max-w-xl text-3xl font-[Manrope] font-bold ">
          "The collective wisdom of our members is our nation's greatest asset.
          We don't just discuss policy; we define the intellectual landscape of
          the future."
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Members;
