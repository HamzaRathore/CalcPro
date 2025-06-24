import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { DateTime } from "luxon";
import {
  timeZones,
  convertTimeZone,
  getTimeDifference,
  getCurrentTimeInZone,
} from "../../utils/dailyLife";
import { MdSwapHoriz, MdAccessTime } from "react-icons/md";

const TimeZoneConverter = () => {
  const [inputTime, setInputTime] = useState(
    DateTime.local().toISO({ suppressMilliseconds: true })
  );
  const [fromZone, setFromZone] = useState("Asia/Karachi");
  const [toZone, setToZone] = useState("America/New_York");
  const [convertedTime, setConvertedTime] = useState("");
  const [difference, setDifference] = useState("");
  const [liveTimeFrom, setLiveTimeFrom] = useState("");
  const [liveTimeTo, setLiveTimeTo] = useState("");

  const handleSwap = () => {
    const temp = fromZone;
    setFromZone(toZone);
    setToZone(temp);
  };

  const handleConvert = () => {
    const result = convertTimeZone(inputTime, fromZone, toZone);
    const diff = getTimeDifference(fromZone, toZone);
    setConvertedTime(result);
    setDifference(diff);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTimeFrom(getCurrentTimeInZone(fromZone));
      setLiveTimeTo(getCurrentTimeInZone(toZone));
    }, 1000);

    return () => clearInterval(interval);
  }, [fromZone, toZone]);

  return (
    <>
      <Helmet>
        <title>Time Zone Converter | CalPro</title>
        <meta
          name="description"
          content="Convert time between different time zones. See time difference, live clocks, and swap zones easily."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/tools/time-zone-calculator"
        />
      </Helmet>

      <div className="w-full flex flex-col items-center">
        <div className="self-start mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Time Zone Converter
        </h2>
        <p className="text-md text-gray-600 pb-6">
          Convert time between time zones, view live clocks, and calculate
          differences.
        </p>
        </div>

        <div className="w-full max-w-2xl p-6 bg-white shadow-xl border border-gray-200 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-gray-600">From Time Zone</label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                value={fromZone}
                onChange={(e) => setFromZone(e.target.value)}
              >
                {timeZones.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">To Time Zone</label>
              <select
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                value={toZone}
                onChange={(e) => setToZone(e.target.value)}
              >
                {timeZones.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">Select Time</label>
            <input
              type="datetime-local"
              value={inputTime.slice(0, 16)}
              onChange={(e) => setInputTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleSwap}
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
            >
              <MdSwapHoriz className="text-lg" /> Swap Zones
            </button>

            <button
              onClick={handleConvert}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
            >
              Convert Time
            </button>
          </div>

          {convertedTime && (
            <div className="text-center">
              <p className="text-gray-600">Converted Time in {toZone}:</p>
              <p className="text-2xl font-bold text-green-600">
                {convertedTime}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Time Difference: {difference}
              </p>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <MdAccessTime className="mx-auto text-gray-500 text-2xl" />
              <p className="text-sm text-gray-600 mt-1">
                Live Time in {fromZone}
              </p>
              <p className="font-mono text-lg text-blue-600">{liveTimeFrom}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <MdAccessTime className="mx-auto text-gray-500 text-2xl" />
              <p className="text-sm text-gray-600 mt-1">
                Live Time in {toZone}
              </p>
              <p className="font-mono text-lg text-blue-600">{liveTimeTo}</p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            Our Time Zone Converter helps you quickly convert any time between
            global time zones. Whether you're coordinating meetings, travel, or
            working with remote teams, this tool provides accurate conversions,
            time differences, and live clocks across regions. Just pick your
            source and target time zones, select a time, and instantly see the
            converted result.
          </p>
        </div>
      </div>
    </>
  );
};

export default TimeZoneConverter;
