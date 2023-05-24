"use client";

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Navbar = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
 
  /* Set Providers using next.js */
  
  //Has Call back function that only runs at start
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

  }, [])

  return (
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="Prompto Logo" width={30} height={30}
        className="object-contain"
        />
        <p className="logo_text">Prompto</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt"
              className="black_btn">
                Create Post
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
              </button>

              <Link href="/profile">
                <Image
                  src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
            </div>
          ): (
            <>
            {/* Set up providers */ }
            {providers &&
              Object.values(providers).map((provider) => (
                <button type="button" className="black_btn" key={provider.name} onClick={() => signIn(provider.id)}>
              Sign In
            </button>
              ))}
            </>
          )}
        </div>
      </nav>
      
  )
}

export default Navbar