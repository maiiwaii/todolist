import React from "react";

const UpdateForm = ({ updateData, updateTask, cancelUpdate, changeTask }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-lg btn-success mr-20"
            onClick={() => updateTask()}
          >
            Update
          </button>
          <button className="btn btn-lg btn-secondary" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
