import React from 'react';

export const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer className="footer">
      <small className="copyright">&copy; Sanae Sugiyama{date}</small>
    </footer>
  );
};
