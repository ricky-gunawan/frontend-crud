import { ChevronDownIcon, ChevronUpIcon, PlusIcon, SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayedCustomers } from "../features/customerSlice";
import { setAddModal, setSlider } from "../features/modalSlice";

export default function Header() {
  const dispatch = useDispatch();
  const slider = useSelector((store) => store.modal.slider);

  const searchRef = useRef("");
  const filterRef = useRef("");
  const sortRef = useRef("");

  const handleForm = () => {
    dispatch(
      setDisplayedCustomers({
        search: searchRef.current.value,
        filter: filterRef.current.value,
        sort: sortRef.current.value,
      })
    );
  };

  return (
    <div className="fixed z-10 top-0 left-0 p-4 w-full">
      <div className="p-4 flex flex-col items-center justify-center sm:flex-row gap-4 bg-[#f7f7f7] rounded-t-md shadow-lg">
        <h1 className="text-2xl text-center font-semibold min-w-[9rem] w-full max-w-[10rem] lg:max-w-[14rem] self-start sm:self-center">Customers List</h1>
        <div className="flex flex-col gap-2 items-center justify-center w-full md:flex-row">
          <div className="flex items-center w-full">
            <SearchIcon className="w-[48px] h-[42px] p-2 border border-[#c7c7c7] bg-[#d7d7d7] rounded-l-md" />
            <input
              ref={searchRef}
              onChange={handleForm}
              name="search"
              type="text"
              placeholder="Search name, address, country, etc.."
              className="w-full rounded-r-md bg-white border-0 border-y border-r border-[#c7c7c7] focus:border-[#6b6b6b] focus:ring-0"
            />
          </div>
          <div className="flex gap-2 items-center justify-center w-full lg:w-fit">
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-fit">
              <select ref={filterRef} onChange={handleForm} name="filter" id="filter" className="rounded-md bg-white border-[#c7c7c7] focus:border-[#6b6b6b] focus:ring-0">
                <option value="">All Customers</option>
                <option value="active">Active</option>
                <option value="non_active">Non Active</option>
              </select>
              <select ref={sortRef} onChange={handleForm} name="sort" id="sort" className="rounded-md bg-white border-[#c7c7c7] focus:border-[#6b6b6b] focus:ring-0">
                <option value="">Unsorted</option>
                <option value="asc">Sort by Name (ASC)</option>
                <option value="dsc">Sort by Name (DSC)</option>
              </select>
            </div>
            <div onClick={() => dispatch(setAddModal(true))} className="bg-green-700 hover:bg-green-800 w-fit sm:w-full sm:max-w-[8rem] rounded-md self-stretch flex items-center justify-center cursor-pointer">
              <PlusIcon className="lg:hidden text-white mx-4 w-8 h-8" />
              <button className="hidden lg:block text-sm text-[#f7f7f7] font-semibold mx-2 min-w-[7rem]">ADD CUSTOMER</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`relative ${slider ? "" : "-translate-y-[11rem]"} -z-10 xs:-translate-y-0 p-4 pl-7 bg-[#d7d7d7] rounded-b-md shadow-lg grid gap-1 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-12`}>
        <div className="text-center md:col-start-1 md:col-span-2">Name</div>
        <div className="text-center md:col-start-3 md:col-span-3">Address</div>
        <div className="text-center md:col-start-6">Country</div>
        <div className="text-center md:col-start-7 md:col-span-2">Phone</div>
        <div className="text-center md:col-start-9 md:col-span-2">Job Title</div>
        <div className="text-center md:col-start-11">Status</div>
        <div className="text-center flex gap-4 justify-center xs:col-span-2 sm:col-span-3 md:col-start-12"></div>
        <ChevronDownIcon onClick={() => dispatch(setSlider(true))} className={`${slider ? "hidden" : ""} xs:hidden w-6 h-6 text-black mx-auto`} />
        <ChevronUpIcon onClick={() => dispatch(setSlider(false))} className={`${slider ? "" : "hidden"} xs:hidden w-6 h-6 text-black mx-auto`} />
      </div>
    </div>
  );
}
