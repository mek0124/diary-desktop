import { useState, useEffect } from "react";

import AppIcon from '../assets/images/original.jpeg';


export default function Header() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [is24HourFormat, setIs24HourFormat] = useState(true);

  useEffect(() => {
    async function updateClock() {
      const now = new Date();

      const timeOptions = {
        hour12: !is24HourFormat,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };

      const time = now.toLocaleTimeString('en-US', timeOptions);
      const date = now.toLocaleDateString('en-US');

      setCurrentTime(time);
      setCurrentDate(date);
    };

    updateClock();

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [is24HourFormat]);

  const toggleTimeFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  const buttonActive = 'border-2 border-surface py-1 px-4 text-center m-3 text-sm text-black font-bold bg-colorAccent hover:bg-accentHover rounded-xl';
  const buttonInactive = 'border-2 border-surface py-1 px-4 text-center m-3 text-sm text-colorTextPrimary font-bold hover:bg-accentHover rounded-xl';

  return (
    <div className="flex flex-row items-center justify-center w-full border-b-2 border-b-surfaceBorder">
      <div className="flex flex-row items-center justify-start w-full ml-1">
        <img
          src={AppIcon}
          alt="Diary App Icon"
          width="80"
          height="80"
          className="rounded-full mb-2 p-2"
        />
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center m-0.5">
          <button
            type="button"
            onClick={() => toggleTimeFormat()}
            className={!is24HourFormat ? buttonActive : buttonInactive}
          >

            12H
          </button>

          <button
            type="button"
            onClick={() => toggleTimeFormat()}
            className={is24HourFormat ? buttonActive : buttonInactive}
          >

            24H
          </button>
        </div>

        <span className="font-bold italic text-center text-md m-2 txtShadow text-colorTextPrimary">
          {currentDate}
        </span>

        <span className="font-bold italic text-center text-xl m-2 txtShadow text-colorTextPrimary">
          {currentTime}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center w-full mr-2">
        <h1 className="font-bold italic text-2xl text-end w-full text-colorTextPrimary">
          Diary
        </h1>
      </div>
    </div>
  );
};
