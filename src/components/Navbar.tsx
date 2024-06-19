import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import { getCurrentUser } from "@/actions/getCurrentUser";
import UserAccountNav from "./UserAccountNav";
import { Bell, CalendarDays, MessagesSquare, SearchIcon, UserPlusIcon, CalendarIcon, BookOpenIcon, InfoIcon } from "lucide-react";

const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}

              <div className="cursor-pointer ml-4 flex lg:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-origami"><path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"/><path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"/><path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"/></svg>
                <Link href="/">
                <h1 className="font-bold text-lg ml-1" >Plotix</h1>
                  {/* <Icons.logo /> */}
                </Link>
              </div>


              

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              {/* Center Content */}
              {user && (
                <div className="hidden lg:flex absolute inset-x-0 text-center justify-center items-center h-full space-x-4">
                  <SearchIcon className="w-4 h-4" />
                  <Link href="#" className="text-xs">Find a Coach</Link>
                  <UserPlusIcon className="w-4 h-4" />
                  <Link href="#" className="text-xs">Become a Coach</Link>
                  <CalendarIcon className="w-4 h-4" />
                  <Link href="#" className="text-xs">Free Events</Link>
                </div>
              )}

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/apply"
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      Coach with Plotix
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

<div className="ml-auto flex items-center">
  <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
    {user ? null : (
      <Link
        href="/sign-in"
        className={buttonVariants({
          variant: "ghost",
        })}
      >
        Sign in
      </Link>
    )}

    {user ? null : (
      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
    )}

    {/* Icons */}
    {user && (
      <Link href={"/"}>
        <Bell className="text-gray-500 cursor-pointer" />
      </Link>
    )}
    {user && (
      <Link href={"/"}>
        <MessagesSquare className="text-gray-500 cursor-pointer" />
      </Link>
    )}
    {user && (
      <Link href={"/bookings"}>
        <CalendarDays className="text-gray-500 cursor-pointer" />
      </Link>
    )}

    {user ? (
      <UserAccountNav />
    ) : (
      <Link
        href="/sign-up"
        className={buttonVariants({
          variant: "ghost",
        })}
      >
        Create account
      </Link>
    )}

                     
                    </div>
                  </div>
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
