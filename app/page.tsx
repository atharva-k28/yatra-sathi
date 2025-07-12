'use client';

import { useState } from "react"
import {GoogleGenerativeAI } from "@google/generative-ai";
import routeData from "@/lib/data/routeData";
import stops from "@/lib/data/stops";
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""

const Home = () => {
  const [start,setStart] = useState<string>("")
  const [destination,setDestination] = useState<string>("")
  const [loading,SetLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<string>("")

  const findRoute = async() =>{
    if (!start || !destination) {
      return
    }
    const prompt = `You are a smart local route planner for Pune city.

The user will ask how to travel from one location to another using the PMPML bus system. You are given a dataset of bus routes. Each route includes the route number and the ordered list of stops it covers.

Here are the rules:
1. If the same route includes both the source and destination, suggest that route as a direct option.
2. If no direct route is found, look for possible combinations of two or three routes to complete the journey. You may use intermediate stops (transfer points).
3. Do not suggest circular or repetitive paths. Do not revisit the same stop.
4. Suggest the **shortest valid route with the fewest transfers**.
5. Include route numbers and key stops clearly in your reply.

Here is the dataset:
${JSON.stringify(routeData)}

Now answer this user query:
How can I go from ${start} to ${destination}?

Note: The response will be shown directly inside a <pre> tag on a webpage. Do not use markdown syntax like **bold** or *italic*. Instead, use clear text formatting with line breaks and Use emojis like 🚌, 📍, 🔁, and ✅ for better readability, since this output is shown inside a <pre> tag..`
    try{
    SetLoading(true)
    const genai = new GoogleGenerativeAI(GEMINI_API_KEY)
    const model = genai.getGenerativeModel({model:"gemini-2.5-flash"})
    const response = await model.generateContent(prompt)
    console.log(JSON.stringify(response))
    const text = response?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    SetLoading(false)
    if(text){
      setResponse(text)
    }
  }catch(err){
    console.log(err)
    setResponse("Could not get a valid response!")
  }
  }


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-4 text-center text-indigo-700">
          Yatra Sathi - Your Companion for PMPML
        </h1>
        <h2 className="text-lg font-medium mb-6 text-center text-gray-700">
          Select Start and Destination Stops
        </h2>
  
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label htmlFor="start" className="block text-sm font-medium text-gray-700 mb-1">
              Starting Point
            </label>
            <select
              id="start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option disabled value="">
                -- Select Starting Stop --
              </option>
              {stops.map(
                (stop) =>
                  stop !== destination && (
                    <option value={stop} key={stop}>
                      {stop}
                    </option>
                  )
              )}
            </select>
          </div>
  
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
              Destination
            </label>
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option disabled value="">
                -- Select Destination Stop --
              </option>
              {stops.map(
                (stop) =>
                  stop !== start && (
                    <option value={stop} key={stop}>
                      {stop}
                    </option>
                  )
              )}
            </select>
          </div>
  
          <button
            type="submit"
            onClick={findRoute}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Find Route
          </button>
        </form>
  
        {start && (
          <p className="mt-4 text-sm text-gray-600">
            <strong>Starting Stop:</strong> {start}
          </p>
        )}
        {destination && (
          <p className="text-sm text-gray-600">
            <strong>Destination:</strong> {destination}
          </p>
        )}
  
  {loading && (
  <p className="mt-6 text-center text-sm text-indigo-600 font-medium">
    Finding the best route for you...
  </p>
)}

        {response && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Route Plan:</h3>
            <pre className="whitespace-pre-wrap bg-gray-100 border border-gray-300 rounded-md p-4 overflow-auto text-sm leading-relaxed text-gray-800">
              {response}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default Home