import { PlusIcon, SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="p-4 flex flex-col items-center justify-center sm:flex-row gap-4 bg-[#f7f7f7] rounded-md shadow-lg">
      <h1 className="text-2xl text-center font-semibold min-w-[9rem] w-full max-w-[10rem] lg:max-w-[14rem] self-start sm:self-center">Customers List</h1>
      <div className="flex flex-col gap-2 items-center justify-center w-full md:flex-row">
        <div className="flex items-center w-full">
          <SearchIcon className="w-[48px] h-[42px] p-2 border border-[#c7c7c7] bg-[#d7d7d7] rounded-l-md" />
          <input type="text" className="w-full rounded-r-md bg-white border-0 border-y border-r border-[#c7c7c7] focus:border-[#6b6b6b] focus:ring-0" />
        </div>
        <div className="flex gap-2 items-center justify-center w-full lg:w-fit">
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-fit">
            <select className="rounded-md bg-white border-[#c7c7c7] focus:border-[#6b6b6b] focus:ring-0" name="filter" id="filter">
              <option value="all">All Customers</option>
              <option value="active">Active</option>
              <option value="non_active">Non active</option>
            </select>
            <select className="rounded-md bg-white border-[#c7c7c7] focus:border-[#6b6b6b] focus:ring-0" name="sort" id="sort">
              <option value="unsorted">Unsorted</option>
              <option value="asc">Sort by Name (ASC)</option>
              <option value="dsc">Sort by Name (DSC)</option>
            </select>
          </div>
          <div className="bg-green-700 w-fit sm:w-full sm:max-w-[8rem] rounded-md self-stretch flex items-center justify-center">
            <PlusIcon className="lg:hidden text-white mx-4 w-8 h-8" />
            <div className="hidden lg:block text-sm text-[#f7f7f7] font-semibold mx-2 min-w-[7rem]">ADD CUSTOMER</div>
          </div>
        </div>
      </div>
    </div>
  );
}
