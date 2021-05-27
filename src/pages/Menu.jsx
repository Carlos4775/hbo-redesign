import Content from "../components/Content";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Component = styled.div`
  color: blue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #fff;
`;

const Menu = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <div className="flex flex-row min-h-screen bg-black text-gray-400">
      <Sidebar open={sidebarIsOpen} />
      <div className="flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <div className="p-4">
          <div className="flex items-center flex-row">
            <form action="/">
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="flex items-center justify-center h-10 w-10 border-transparent"
                  onClick={() => {
                    setSidebarIsOpen(!sidebarIsOpen);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className="flex ml-auto">
              <span className="flex flex-col ml-5 text-right">
                <span className="truncate text-white tracking-wide pt-1">
                  <span>Hello, </span>
                  <span className="font-semibold">Franklin</span>
                </span>
                <span className="truncate text-gray-400 text-xs leading-none mt-2">
                  Editor
                </span>
              </span>
              <div className="pl-4">
                <Component
                  as="button"
                  className="flex justify-center items-center"
                >
                  <Link to="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#000"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </Link>
                </Component>
              </div>
              <div className="pl-4">
                <Component
                  as="button"
                  className="flex justify-center items-center"
                >
                  <Link to="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#000"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Link>
                </Component>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow p-4">
          <div
            className="flex flex-col flex-grow rounded mt-4"
            style={{ backgroundColor: "#0a0c0f" }}
          >
            <div className="p-5">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;