import { useState, useEffect } from "react";

import api from "../hooks/api";


export default function History() {
  const [previousEntries, setPreviousEntries] = useState();

  useEffect(() => {
    async function fetchEntries() {
      try {
        const response = await api.get("/diary/entries");

        if (response.status === 200) {
          setPreviousEntries(response.data.entries);
        };
      } catch (err) {
        console.error(err);
        setPreviousEntries([]);
      };
    };

    fetchEntries();
  }, []);

  const displayEntries = () => {
    return previousEntries.map((entry) => {
      return (
        <div className="flex flex-row items-center justify-center w-[30%] border-2 border-accent rounded"></div>
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
        <div className="flex flex-col items-center justify-start w-[90%] border-2 border-colorAccent rounded-xl overflow-y-auto min-h-[650px]">
          { displayEntries() }
        </div>
      </div>
    </div>
  );
};
