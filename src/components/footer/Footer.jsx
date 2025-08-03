import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-sm ">
      {/* <div className="w-full flex flex-col items-center justify-center text-cyan-300"> */}
        <p
          className="text-center"
          style={{ textAlign: 'center', width: '100%' }}
        >
          © 2025 QAI. All Rights Reserved.
        </p>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
