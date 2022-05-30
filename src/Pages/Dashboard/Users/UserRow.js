import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://infinite-lake-36259.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }

        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <th>{email}</th>
      <th>
        {role === "admin" ? (
          <span className="text-secondary font-bold">Already an admin</span>
        ) : (
          <button onClick={makeAdmin} className="btn btn-xs btn-primary text-white">
            Make Admin
          </button>
        )}
      </th>
      <th>
        <button className="btn btn-xs btn-secondary text-white">Remove User</button>
      </th>
    </tr>
  );
};

export default UserRow;
