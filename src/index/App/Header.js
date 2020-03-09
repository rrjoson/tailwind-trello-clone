import React from "react";
import Card from "./Header/Card";

const Header = () => (
  <>
    <div class="flex p-2 items-center">
      <div class="mx-0 md:mx-auto">
        <h1 class="text-blue-lighter text-xl flex items-center font-sans italic">
          <svg
            class="fill-current h-8 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z" />
          </svg>
          Trello
        </h1>
      </div>
      <div class="flex items-center ml-auto">
        <button class="bg-blue-light rounded h-8 w-8 font-bold text-white text-sm mr-2">
          +
        </button>
        <button class="bg-blue-light rounded h-8 w-8 font-bold text-white text-sm mr-2">
          i
        </button>
        <button class="bg-red rounded h-8 w-8 font-bold text-white text-sm mr-2">
          <svg
            class="h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z" />
          </svg>
        </button>
        <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full" />
      </div>
    </div>
    <Card />
  </>
);

export default Header;
