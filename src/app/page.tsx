'use client';
import { useState } from "react";

interface WeatherData {
  name?: string;
  main?: {
    temp?: number;
  };
  weather?: Array<{
    description?: string;
  }>;
  wind?: {
    speed?: number;
  };
}

const api = {
  key: "4dfe765bd809bdb3d566a075c1123ba1",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Home(){

  // STATE

  // FUNCTION SEARCH

  return(
    <main className="bg-purple-600">
      <div className="">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
        </svg> */}
        <input />
      </div>
      <button
        className=""
      >Search
      </button>

      {/*
      SHOW:
      - CITY NAME
      - TEMPERATURE
      - DESCRIPTION
      - WIND SPEED
      */}

    </main>
  )
}