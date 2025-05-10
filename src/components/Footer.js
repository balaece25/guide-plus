import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-3 bg-light border-top mt-auto shadow-sm">
    <small className="text-muted">&copy; {new Date().getFullYear()} Guide Plus. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
