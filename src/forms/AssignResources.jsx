import React from "react";

const AssignResources = ({onSubmit}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Assign Resources</h3>
      <p>Dummy content for resource assignment.</p>
      <button
        onClick={()=>onSubmit()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default AssignResources;
