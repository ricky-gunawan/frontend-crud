import { XCircleIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { setDeleteModal } from "../features/modalSlice";

export default function DeleteModal() {
  const deleteModal = useSelector((store) => store.modal.deleteModal);
  const dispatch = useDispatch();
  return (
    <div className={`${deleteModal ? "" : "hidden"} fixed top-0 left-0 z-20 h-screen w-screen bg-black/60`}>
      <div className="absolute left-1/2 top-1/2 w-[94%] max-w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#9aa19c]">
        <XCircleIcon onClick={() => dispatch(setDeleteModal(false))} className="absolute top-3 right-3 cursor-pointer font-bold text-red-700 hover:text-red-800 w-8 h-8" />
        <div className="mx-3 mt-4 pb-2 text-[#f7f7f7] font-semibold text-center">DELETE CUSTOMER</div>
        <div className="bg-[#f7f7f7] rounded-b-md flex flex-col items-center justify-evenly">
          <div className="my-6">Delete Si Tampan ?</div>
          <div className="flex mb-3 gap-4 text-[#f7f7f7] font-semibold">
            <div className="px-2 py-1 rounded-md border border-red-700 text-[#4b4b4b]">CANCEL</div>
            <div className="px-2 py-1 rounded-md border border-red-700 bg-red-700">DELETE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
