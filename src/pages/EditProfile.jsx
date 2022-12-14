import React from "react";
import Input from "../components/Input";
import { DropDownTwo, DropDown } from "../components/DropDown";
import Layout from "../components/Layout";
import { Navbar } from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function EditProfile() {
  return (
    <Layout>
      <div className="lg:grid grid-cols-6">
        <div className="lg:grid hidden">
          <Sidebar profileShadow={"shadow-lg"} profileStyle={"font-bold"} />
        </div>
        <div className="grid col-span-5">
          <div className="bg-abuAltera h-screen overflow-auto rounded-r-3xl">
            <Navbar title={"Update Profile"} name={"John Doe"} />
            <div className=" p-5">
              <div className="bg-white rounded-3xl shadow-lg p-3">
                <div className="grid lg:grid-cols-2 md:grid-col-2">
                  <div className="flex justify-center">
                    <Input label={"Nama :"} type={"text"} value={"John Doe"} w={"w-md"} />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-col-2">
                  <div className="flex justify-center">
                    <Input label={"Email :"} type={"email"} value={"johndoe@gmail.com"} w={"w-md"} />
                  </div>
                  <div className="flex justify-center">
                    <Input label={"Password :"} type={"password"} w={"w-md"} />
                  </div>
                </div>
                <div className="grid  lg:grid-cols-2 md:grid-col-2">
                  <div className="flex justify-center">
                    <Input label={"Phone Number :"} value={"0852342312"} w={"w-md"} />
                  </div>
                  <div className="flex justify-center">
                    <DropDownTwo name={"Role :"} optionOne={"User"} optionTwo={"Admin"} />
                  </div>
                </div>
                <div className="flex justify-center lg:px-6 md:px-6 w-full">
                  <div className=" lg:w-11/12 w-full flex justify-center">
                    <div className="form-control w-2/3 lg:w-full   ">
                      <label className="label">
                        <span className="label-text  font-Inter text-biruAltera">Address According the ID Card :</span>
                      </label>
                      <textarea className="textarea textarea-bordered h-24 focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera"></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:px-6 md:px-6 w-full">
                  <div className=" lg:w-11/12 w-full flex justify-center">
                    <div className="form-control w-2/3 lg:w-full   ">
                      <label className="label">
                        <span className="label-text  font-Inter text-biruAltera">Domicile Address :</span>
                      </label>
                      <textarea className="textarea textarea-bordered h-24 focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera"></textarea>
                    </div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 md:lg:grid-cols-2">
                  <div className="flex justify-center">
                    <DropDown name={"Team :"} optionOne={"Academic"} optionTwo={"People Skill"} optionThree={"Placement"} />
                  </div>
                  <div className="flex justify-center">
                    <DropDownTwo name={"Status :"} optionOne={"Active"} optionTwo={"InActive"} />
                  </div>
                </div>
                <div className=" grid lg:grid-cols-2 md:lg:grid-cols-2">
                  <div className="flex justify-center">
                    <DropDownTwo name={"Gender :"} optionOne={"Male"} optionTwo={"Female"} optionThree={"Placement"} />
                  </div>
                  <div className="grid grid-cols-2 mt-4 px-6 pb-1">
                    <div className="flex justify-center items-end mr-1">
                      <button className="btn normal-case w-2/3 bg-orangeAltera hover:bg-red-900">Cancel</button>
                    </div>
                    <div className="flex justify-center items-end ml-1">
                      <button className="btn normal-case lg:w-2/3 md:w-2/3 w-full bg-biruAltera hover:bg-green-900">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    // <Layout>
    //   <div className="w-full">
    //     <div className="w-full h-screen grid grid-cols-4 ">
    //       <div>
    //         <div className="flex flex-col items-center justify-center bg-abuAltera h-64">
    //           <img src="https://placeimg.com/80/80/people" alt="Foto Profil" width={110} height={110} className="rounded-full mb-2" />
    //           <h2 className="text-biruAltera font-Inter font-bold text-2xl">John Doe</h2>
    //           <p className="text-biruAltera font-Inter ">johndoe@gmail.com</p>
    //         </div>
    //         <div className="w-full p-5 flex items-end h-3/5">
    //           <a href={"/dashboard"} className="w-full">
    //             <button className="btn w-full normal-case bg-orangeAltera hover:bg-orangeAltera">Back</button>
    //           </a>
    //         </div>
    //       </div>
    //       <div className=" col-span-3 overflow-auto ">
    //         <div className="h-64 bg-abuAltera p-10   sticky  w-full top-0">
    //           <h1 className="text-biruAltera font-Inter font-bold text-4xl">Update Profile</h1>
    //         </div>
    //         <div className=" p-5 z-10 ">

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
  );
}

export default EditProfile;
