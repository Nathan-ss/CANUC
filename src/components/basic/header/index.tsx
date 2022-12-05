import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  function close() {
    setOpen(false);
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 fixed w-full z-10 top-0 drop-shadow-2xl ">
      <Drawer open={open} onClose={close} sx={{ width: "20%" }}>
        <Button onClick={close}>X</Button>
        <Box sx={{ display: "flex", width: "20rem", background: "white" }}>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </Box>
      </Drawer>
      <div className="flex items-center flex-shrink-0 text-white ">
        <a
          className="text-black no-underline hover:text-zinc-800 hover:no-underline justify-center items-center mr-6"
          href="#"
        >
          <div className="flex w-full h-12 justify-center items-center">
            <img
              src="/images/logo/logo canunc.png"
              className="flex object-contain w-full h-full"
            />
            <h3 className="font-bold text-4xl ml-3">CANUC</h3>
          </div>
        </a>
      </div>

      <div className="block lg:hidden">
        <Button
          id="nav-toggle"
          onClick={() => setOpen(true)}
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Button>
      </div>

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-black no-underline"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              link
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              link
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="#"
            >
              link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
