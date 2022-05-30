import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingTool, refetch, setDeletingTool }) => {
  console.log(deletingTool);

  const { _id, name } = deletingTool;

  const handleDelete = () => {
    fetch(`https://aqueous-savannah-68941.herokuapp.com/tool/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${name} is deleted`);

          // close the modal
          setDeletingTool(null);

          // update data in UI
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are You sure to <span className="text-red-600">delete</span>{" "}
            <span className="text-primary font-bold">{name}</span>?
          </h3>
          <p className="py-4">If You Delete One then You can't get back the item.</p>
          <div className="modal-action flex justify-center">
            <button onClick={handleDelete} className="btn btn-error">
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
