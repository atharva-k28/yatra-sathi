'use client';

import stops from "@/lib/data/stops";
import { routeData, BusRoute } from "@/lib/data/routeData";
import { useState } from "react";

const StopInfo = () => {
  const [stop, setStop] = useState<string>("");
  const [matchingRoutes, setMatchingRoutes] = useState<BusRoute[]>();

  const findStopInfo = () => {
    const favourableRoutes = routeData.routes.filter((route) =>
      route.stops.includes(stop)
    );
    setMatchingRoutes(favourableRoutes);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-indigo-700 mb-4">
          Stop Info - PMPML
        </h1>

        <div className="mb-6">
          <label htmlFor="stop" className="block text-sm font-medium text-gray-700 mb-2">
            Select Stop
          </label>
          <select
            id="stop"
            value={stop}
            onChange={(e) => setStop(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option disabled value="">
              -- SELECT STOP --
            </option>
            {stops.map((stop) => (
              <option value={stop} key={stop}>
                {stop}
              </option>
            ))}
          </select>
          <button
            onClick={findStopInfo}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Find Stop Info
          </button>
        </div>

        {matchingRoutes && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Bus Routes for: <span className="text-indigo-600">{stop}</span>
            </h2>
            <div className="space-y-6">
              {matchingRoutes.map((routeInfo) => (
                <div
                  key={routeInfo.route_no}
                  className="border border-gray-200 rounded-md p-4 bg-gray-100"
                >
                  <p><span className="font-semibold">Route No:</span> {routeInfo.route_no}</p>
                  <p><span className="font-semibold">From:</span> {routeInfo.from}</p>
                  <p><span className="font-semibold">To:</span> {routeInfo.to}</p>
                  <p><span className="font-semibold">Stops:</span> {routeInfo.stops.join(", ")}</p>
                  <p><span className="font-semibold">Start Time:</span> {routeInfo.start_time}</p>
                  <p><span className="font-semibold">End Time:</span> {routeInfo.end_time}</p>
                  <p><span className="font-semibold">Frequency:</span> {routeInfo.frequency}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StopInfo;
