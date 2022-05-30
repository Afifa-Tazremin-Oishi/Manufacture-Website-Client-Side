import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ToolRow from "./ToolRow";

const ManageProducts = () => {
  const [deletingTool, setDeletingTool] = useState(null);

  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://infinite-lake-36259.herokuapp.com/tools", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Doctors: {tools?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool, index) => (
              <ToolRow
                key={tool._id}
                tool={tool}
                index={index}
                setDeletingTool={setDeletingTool}
              ></ToolRow>
            ))}
          </tbody>
        </table>
        {deletingTool && (
          <DeleteConfirmModal
            deletingTool={deletingTool}
            refetch={refetch}
            setDeletingTool={setDeletingTool}
          ></DeleteConfirmModal>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
