import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import { getCurrentUser } from "@/actions/getCurrentUser";
import UserAccountNav from "./UserAccountNav";
import {
  Bell,
  CalendarDays,
  MessagesSquare,
  SearchIcon,
  UserPlusIcon,
  CalendarIcon,
  BookOpenIcon,
  InfoIcon,
} from "lucide-react";

const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <div className="bg-white sticky top-0 z-50 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="z-50 ml-4 flex lg:ml-0">
                <Link href={"/"} className="flex" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-origami"
                  >
                    <path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" />
                    <path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" />
                    <path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" />
                  </svg>
                  <h1 className="font-bold text-lg ml-1">Plotix</h1>
                </Link>
              </div>
              <div className="hidden lg:ml-8 lg:block">
                <NavItems />
              </div>

              {user && (
                <div className="hidden lg:flex absolute inset-x-0 justify-center items-center h-full space-x-4">
                  <SearchIcon className="w-4 h-4" />
                  <Link href="#" className="text-xs">
                    Find a Coach
                  </Link>
                  <UserPlusIcon className="w-4 h-4" />
                  <Link href="#" className="text-xs">
                    Become a Coach
                  </Link>
                  <CalendarIcon className="w-4 h-4" />
                  <Link href="#" className="text-xs">
                    Free Events
                  </Link>
                </div>
              )}

              <div className="top-auto ml-auto absolute right-8  flex  items-center">
                <div className="hidden  lg:flex lg:items-center lg:justify-end lg:space-x-6">
                  {!user && (
                    <Link href="/apply" className={buttonVariants({ variant: "ghost" })}>
                      Coach with Plotix
                    </Link>
                  )}

                  {!user && (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {!user && (
                    <Link href="/sign-in" className={buttonVariants({ variant: "ghost" })}>
                      Sign in
                    </Link>
                  )}

                  {!user && (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user && (
                    <>
                      <Link href="/">
                        <Bell className="text-gray-500 cursor-pointer" />
                      </Link>
                      <Link href="/">
                        <MessagesSquare className="text-gray-500 cursor-pointer" />
                      </Link>
                      <Link href="/bookings">
                        <CalendarDays className="text-gray-500 cursor-pointer" />
                      </Link>
                      <UserAccountNav />
                    </>
                  )}

                  {!user && (
                    <Link href="/sign-up" className={buttonVariants({ variant: "ghost" })}>
                      Create account
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;


