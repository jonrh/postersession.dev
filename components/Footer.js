import React from "react";

const gh = "https://github.com/jonrh/postersession.dev";

const Footer = (props) => {
  return (
    <footer>
      <p className="p-10 text-gray-600 text-center">
        <a href={gh} className="underline">Created</a> with passion and ❤️<br />
        Jón Rúnar Helgason, <a href="https://jonrh.is" className="underline">jonrh.is</a>
      </p>
    </footer>
  )
};

export default Footer;