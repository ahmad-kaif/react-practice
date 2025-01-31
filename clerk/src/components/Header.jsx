
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Application</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/services" className="hover:text-gray-400">Services</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
      <div>
        <SignedOut>
          <SignInButton className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
            Sign In
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
