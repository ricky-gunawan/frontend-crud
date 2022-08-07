import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "../features/customerSlice";
import { customersList } from "./customersList";
import Loader from "./Loader";

export default function DataSection() {
  const { isLoading, allCustomers } = useSelector((store) => store.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);
  return (
    <div className="mt-[27.5rem] xs:mt-[22.3rem] sm:mt-[14.5rem] md:mt-[9.2rem]">
      {isLoading ? (
        <div className="w-full h-[40vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        allCustomers.map(({ id, name, address, country, phone_number, job_title, status }, index) => (
          <div key={id} className="relative mt-1 p-4 pl-7 bg-[#f7f7f7] rounded-md shadow-md grid gap-3 md:gap-1 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-12">
            <span className="absolute left-4 top-4">{index + 1}.</span>
            <div className="text-center md:col-start-1 md:col-span-2">{name}</div>
            <div className="text-center md:col-start-3 md:col-span-3">{address}</div>
            <div className="text-center md:col-start-6">{country}</div>
            <div className="text-center md:col-start-7 md:col-span-2">{phone_number}</div>
            <div className="text-center md:col-start-9 md:col-span-2">{job_title}</div>
            <div className="text-center md:col-start-11">{status ? <div className="text-green-700">Active</div> : <div className="text-red-700">Non Active</div>}</div>
            <div className="mt-4 md:m-0 text-center flex gap-4 justify-center xs:col-span-2 sm:col-span-3 md:col-start-12">
              <PencilIcon className="text-green-700 w-5 h-5" />
              <TrashIcon className="text-red-700 w-5 h-5" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
