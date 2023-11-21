import React from 'react'
import { TfiClose } from 'react-icons/tfi'
import { BsTrash3 } from 'react-icons/bs'

const Delete = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
    bg-black bg-opacity-50 transform z-[3000] transition-transform duration-300 scale-0`}
    >
      <div className="bg-white shadow-lg shadow-slate-900 rounded-xl w-11/12 md:w-1/5 h-7/12 p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row justify-between items-center">
            <p className="font-medium text-2xl">Delete</p>
            <button type="button" className="border-0 bg-transparent focus:outline-none">
              <TfiClose className="text-black" />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center rounded-xl mb-5">
            <BsTrash3 size={30} className="text-red-700 " />
            <p className="text-center p-2">
              Are you sure you want to delete <br />
              <span className="italic font-semibold">{'Charity Name'}</span>
            </p>
          </div>

          <div className="mx-auto">
            <button
              type="submit"
              className="bg-gray-100 text-red-600 px-4 space-x-1
              flex justify-center items-center rounded-full text-center py-3
              transition-all duration-300 ease-in-out
              hover:bg-red-600 hover:text-white font-medium"
            >
              Delete & Unlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete