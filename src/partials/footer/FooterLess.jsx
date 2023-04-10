import React from 'react'

const FooterLess = () => {
  return (
    <footer className="bottom-0 left-0 z-20 w-full items-center justify-center border-t text-center md:flex md:items-center md:justify-between md:p-2 bg-gray-600">
      <span className="text-sm text-gray-50 sm:text-center text-center w-full p-3 ">
        Bản quyền © 2023{" "}
        <a
          href="https://FirstEMS.com"
          className="hover:underline hover:text-blue-600"
        >
          FirstEMS
        </a>{" "}
        IT SOLUTION Co., LTD.
      </span>
    </footer>
  );
}

export default FooterLess