import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from '../hooks/api';


export default function NewEntry() {
  const [newEntry, setNewEntry] = useState({
    title: '',
    details: '',
    createdAt: new Date().toISOString()
  });

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resultText, setResultText] = useState('');

  const navigate = useNavigate('');

  const handleErrorSuccess = (msg, is_error) => {
    setResultText(msg);
    is_error ? setIsError(true) : setIsSuccess(true);

    setTimeout(() => {
      is_error ? setIsError(false) : setIsSuccess(false);
      setResultText('');

      if (!is_error) {
        return navigate("/");
      }
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewEntry({
      ...newEntry,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      newEntry.title.trim() === "" ||
      newEntry.details.trim() === ""
    ) {
      return handleErrorSuccess(
        "Title & Details Are Required!",
        true,
      );
    };

    try {
      const response = await api.post("/diary/create", newEntry);

      if (response.status === 200) {
        return handleErrorSuccess(
          response.data.message,
          false,
        );
      } else {
        return handleErrorSuccess(
          response.data.message,
          true,
        );
      };
    } catch (err) {
      console.error(err);

      return handleErrorSuccess(
        err.response?.data?.message,
        true,
      );
    };
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen overflow-x-hidden">
      <form
        onSubmit={handleSubmit} 
        className="flex flex-col items-center p-2 justify-center w-2/3 flex-1">

        <div className="flex flex-row items-center justify-center w-full p-6">
          <label
            htmlFor="title"
            className="font-bold italic text-colorTextPrimary w-2/3 text-start text-xl ml-2">

            Title
          </label>

          <input
            type="text"
            name="title"
            value={newEntry.title}
            onChange={handleChange}
            placeholder="Enter Title Here..."
            required
            className="border-2 border-surface rounded-xl bg-gray-500 hover:bg-gray-400 text-black placeholder:text-black text-center text-xl py-1 w-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <label
            htmlFor="details"
            className="font-bold italic text-colorTextPrimary w-full text-start text-xl ml-16 mb-2"
          >

            Details
          </label>

          <textarea
            type="text"
            name="details"
            value={newEntry.details}
            onChange={handleChange}
            placeholder="Enter Details Here..."
            className="border-2 border-surface rounded-xl bg-gray-500 hover:bg-gray-400 text-black placeholder:text-black pl-2 pr-2 text-xl py-1 w-[95%] h-72 mb-5" 
          />
        </div>

        {isError && (
          <div className="flex flex-col items-center justify-center w-1/3 bg-red-600 border-2 border-black rounded-2xl mt-5 mb-5">
            {resultText}
          </div>
        )}

        {isSuccess && (
          <div className="flex flex-col items-center justify-center w-1/3 bg-green-600 border-2 border-black rounded-2xl mt-5 mb-5">
            {resultText}
          </div>
        )}

        <div className="flex flex-row items-center justify-evenly w-2/3">
          <button
            type="submit"
            className="border-2 border-surface py-2 px-28 rounded-xl bg-colorSurface text-colorTextPrimary font-bold italic hover:bg-colorAccent hover:text-black hover:border-black">
              
            Create Entry
          </button>
        </div>
      </form>
    </div>
  );
};