'use client';

import {routeData, BusRoute} from "@/lib/data/routeData";
import { useState } from "react";


const RouteInfo = () => {
  const [routeNo, setRouteNo] = useState<string>("");
  const [routeInfo, setRouteInfo] = useState<BusRoute>();

  const findRouteInfo = () => {
    const info = routeData.routes.find((route) => route.route_no === routeNo);
    setRouteInfo(info);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center text-indigo-700">
          Route Info - PMPML
        </h1>

        <div className="mb-6">
          <label
            htmlFor="route"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select Route
          </label>
          <select
            id="route"
            value={routeNo}
            onChange={(e) => setRouteNo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option disabled value="">-- SELECT ROUTE NO --</option>
            {routeData.routes.map((route) => (
              <option key={route.route_no} value={route.route_no}>
                {route.route_no}: {route.from} to {route.to}
              </option>
            ))}
          </select>

          <button
            onClick={findRouteInfo}
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Find Route
          </button>
        </div>

        {routeInfo && (
          <div className="border border-gray-200 rounded-md p-4 bg-gray-100 mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Route Details
          </h2>
          <div className="space-y-2 text-sm text-gray-800">
            <p><span className="font-semibold">Route No:</span> {routeInfo.route_no}</p>
            <p><span className="font-semibold">From:</span> {routeInfo.from}</p>
            <p><span className="font-semibold">To:</span> {routeInfo.to}</p>
            <p><span className="font-semibold">Stops:</span> {routeInfo.stops.join(", ")}</p>
            <p><span className="font-semibold">Start Time:</span> {routeInfo.start_time}</p>
            <p><span className="font-semibold">End Time:</span> {routeInfo.end_time}</p>
            <p><span className="font-semibold">Frequency:</span> {routeInfo.frequency}</p>
          </div>
        </div>
        
        )}
      </div>
    </div>
  );
};

export default RouteInfo;
