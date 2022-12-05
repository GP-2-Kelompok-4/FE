import React from "react";
import Input from "./Input";

const Modal = () => {
  return (
    <>
      <label htmlFor={`my-modal-6`} className="btn normal-case bg-blue-600 hover:bg-biruAltera">
        + Add New User
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  flex flex-col justify-center items-center">
          <h3 className="font-bold text-2xl text-biruAltera text-center font-Inter">Add New User</h3>
          <Input label={"Name :"} placeholder={"Name"} type={"text"} />
          <Input label={"Email :"} placeholder={"name@gmail.com"} type={"email"} />
          <Input label={"Role :"} placeholder={"User"} />
          <Input label={"Password :"} type={"password"} placeholder={"password"} />
          <div className="grid grid-cols-2  max-w-md w-full mt-3">
            <label htmlFor="my-modal-6" className="btn bg-red-600 normal-case font-Inter border-none mx-1 hover:bg-red-900">
              Cancel
            </label>

            <label htmlFor="my-modal-6" className="btn bg-blue-600 normal-case font-Inter border-none mx-1 hover:bg-biruAltera">
              Add
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;