import { XCircleIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { setAddModal } from "../features/modalSlice";
import { useState } from "react";
import { addCustomer } from "../features/customerSlice";

export default function AddModal() {
  const {
    user: { token },
    modal: { addModal },
  } = useSelector((store) => store);
  const dispatch = useDispatch();

  const initialFormState = {
    name: "",
    address: "",
    country: "",
    phone_number: "",
    job_title: "",
    status: true,
  };

  const [form, setForm] = useState(initialFormState);

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClose = () => {
    dispatch(setAddModal(false));
    setForm(initialFormState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomer({ token, newCustomer: form }));
    setForm(initialFormState);
  };

  return (
    <div className={`${addModal ? "" : "hidden"} fixed top-0 left-0 z-20 h-screen w-screen bg-black/60`}>
      <div className="absolute left-1/2 top-1/2 w-[94%] max-w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#9aa19c]">
        <XCircleIcon onClick={handleClose} className="absolute top-3 right-3 cursor-pointer font-bold text-red-700 hover:text-red-800 w-8 h-8" />
        <div className="m-3 mt-4 text-[#f7f7f7] font-semibold text-center">ADD CUSTOMER</div>
        <form onSubmit={handleSubmit} className="m-3 mb-4">
          <input
            value={form.name}
            onChange={handleForm}
            type="text"
            name="name"
            id="add_name"
            className="w-full mb-4 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Name"
            required
          />
          <input
            value={form.address}
            onChange={handleForm}
            type="text"
            name="address"
            id="add_address"
            className="w-full mb-4 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Address"
            required
          />
          <input
            value={form.country}
            onChange={handleForm}
            type="text"
            name="country"
            id="add_country"
            className="w-full mb-4 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Country"
            required
          />
          <input
            value={form.phone_number}
            onChange={handleForm}
            type="text"
            name="phone_number"
            id="add_phone_number"
            className="w-full mb-4 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Phone"
            required
          />
          <input
            value={form.job_title}
            onChange={handleForm}
            type="text"
            name="job_title"
            id="add_job_title"
            className="w-full mb-2 rounded-sm bg-slate-100 border border-slate-300 focus:border-green-700 focus:ring-green-700"
            placeholder="Job Title"
            required
          />
          <div className="ml-2 mb-4 flex items-center">
            <input checked={form.status} onChange={handleForm} className="rounded-md focus:ring-2 text-green-700 focus:ring-green-700" type="checkbox" name="status" id="add_checkbox" />
            <label htmlFor="add_checkbox" className="ml-2 ">
              Active
            </label>
          </div>
          <input type="submit" value="Submit" className="w-full h-8 cursor-pointer rounded-md bg-green-600 text-[#f7f7f7] text-semibold uppercase hover:bg-green-700" />
        </form>
      </div>
    </div>
  );
}
