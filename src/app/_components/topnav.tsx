"use client";
import { SignedIn } from "@clerk/clerk-react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default TopNav;
