import { XCircleIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { setAddModal } from "../features/modalSlice";

export default function AddModal() {
  const addModal = useSelector((store) => store.modal.addModal);
  const dispatch = useDispatch();

  return (
    <div className={`${addModal ? "" : "hidden"} fixed top-0 left-0 z-20 h-screen w-screen bg-black/60`}>
      <div className="absolute left-1/2 top-1/2 w-[94%] max-w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#9aa19c]">
        <XCircleIcon onClick={() => dispatch(setAddModal(false))} className="absolute top-3 right-3 cursor-pointer font-bold text-red-700 hover:text-red-800 w-8 h-8" />
        <div className="m-3 mt-4 text-[#f7f7f7] font-semibold text-center">ADD CUSTOMER</div>
        <form className="m-3 mb-4">
          <input
            // value={name}
            // onChange={handleName}
            type="text"
            // name="name"
            // id="signUp_name"
            className="w-full mb-4 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Name"
            required
          />
          <input
            // value={name}
            // onChange={handleName}
            type="text"
            // name="name"
            // id="signUp_name"
            className="w-full mb-4 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Address"
            required
          />
          <input
            // value={name}
            // onChange={handleName}
            type="text"
            // name="name"
            // id="signUp_name"
            className="w-full mb-4 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Country"
            required
          />
          <input
            // value={name}
            // onChange={handleName}
            type="text"
            // name="name"
            // id="signUp_name"
            className="w-full mb-4 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Phone"
            required
          />
          <input
            // value={name}
            // onChange={handleName}
            type="text"
            // name="name"
            // id="signUp_name"
            className="w-full mb-2 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Job Title"
            required
          />
          <div className="ml-4 mb-4 flex gap-6 items-center">
            <div className="flex items-center">
              <input className="rounded-md focus:ring-2 text-green-700 focus:ring-green-700" type="radio" name="radio" id="radio_1" />
              <label htmlFor="radio_1" className="ml-2 ">
                Active
              </label>
            </div>
            <div className="flex items-center">
              <input className="rounded-md focus:ring-2 text-green-700 focus:ring-green-700" type="radio" name="radio" id="radio_2" />
              <label htmlFor="radio_2" className="ml-2 ">
                Non Active
              </label>
            </div>
          </div>
          <input type="submit" value="Submit" className="w-full h-8 cursor-pointer rounded-md bg-green-600 text-[#f7f7f7] text-semibold uppercase hover:bg-green-700" />
        </form>
      </div>
    </div>
  );
}
