import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="bg-slate-600 flex flex-row justify-center hover:bg-slate-700 hover:shadow-inner rounded-3xl m-10 text-xl font-semibold">
      <div className="">
        <div className="">
        <nav className="text-neutral-200 justify-center flex flex-row nav nav-tabs">
      <li className="hover:scale-[1.2] hover:text-amber-500 hover:drop-shadow-lg m-5 p-5 nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="hover:scale-[1.2] hover:text-blue-500 hover:drop-shadow-lg m-5 p-5 nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="hover:scale-[1.2] hover:text-emerald-500 hover:drop-shadow-lg text m-5 p-5 nav-item">
        <a
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="hover:scale-[1.2] hover:text-indigo-500 hover:drop-shadow-lg m-5 p-5 nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </nav>
    
        </div>
      </div>
    </div>
    
  );
}

export default NavTabs;