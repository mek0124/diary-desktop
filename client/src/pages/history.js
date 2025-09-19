import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import api from "../hooks/api";


export default function History() {
  const [previousEntries, setPreviousEntries] = useState(null);

  useEffect(() => {
    async function fetchEntries() {
      try {
        const response = await api.get("/diary/entries");

        if (response.status === 200) {
          setPreviousEntries(response.data.entries);
        };
      } catch (err) {
        console.error(err);
        setPreviousEntries(null);
      };
    };

    fetchEntries();
  }, []);

  const deleteEntry = async (entryId) => {
    try {
      await api.delete(`/diary/${entryId}`);
      window.location.reload();
    } catch (err) {
      console.error(err);
    };
  };

  const displayEntries = () => {
    return previousEntries.map((entry) => {
      const entryDate = entry.createdAt;
      const date = entryDate.split("T")[0];
      const time = entryDate.split("T")[1];

      return (
        <div
          key={entry._id} 
          className="flex flex-col items-center justify-center w-[25%] border-2 border-colorAccent rounded-xl min-h-72">
          
          <div className="flex flex-row items-start justify-center w-full ml-3">
            <label className="font-bold italic text-2xl text-center w-full text-colorTextPrimary max-h-1/3">
              {entry.title}
            </label>

            <label className="italic text-xs text-center w-full text-colorTextPrimary mr-0 max-h-1/3">
              {date}
            </label>

            <label className="italic text-xs text-center w-full text-colorTextPrimary ml-0 max-h-1/3">
              {time}
            </label>
          </div>

          <div className="flex flex-col items-center justify-center w-full text-wrap text-[#a9a9a9] mr-4 flex-grow">
            <label className="italic text-sm text-colorTextPrimary">
              {entry.details}
            </label>
          </div>

          <div className="flex flex-row items-center justify-evenly w-1/3">
            <button
              type="button"
              onClick=""
              className="text-colorTextPrimary text-sm m-2">

              <FontAwesomeIcon icon={faPencil} />
            </button>

            <button
              type="button"
              onClick={() => deleteEntry(entry._id)}
              className="text-colorTextPrimary text-sm m-2">

              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      );
    });
  };

  if (!previousEntries) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <span className="font-bold italic text-3xl text-center text-colorTextPrimary w-full">
          No Previous Entries Found...
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full mt-5 mb-5">
        <h1 className="font-bold italic text-3xl text-center text-colorTextPrimary">
          Previous Entries
        </h1>
      </div>

      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-row flex-wrap items-start justify-center w-[95%] border-2 border-colorAccent rounded-xl overflow-y-auto min-h-[650px] gap-5 p-2">
          { displayEntries() }
        </div>
      </div>
    </div>
  );
};
