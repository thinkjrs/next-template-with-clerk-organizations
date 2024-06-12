"use client";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar(props: {
  navigationItems?: { name: string; href: string }[];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white dark:bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/*<img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              />*/}
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {typeof props?.navigationItems?.length !== "undefined"
              ? props?.navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:bg-gray-100 rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 hover:dark:bg-slate-900"
                  >
                    {item.name}
                  </a>
                ))
              : null}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-slate-200 hover:dark:text-slate-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex">
          <SignedOut>
            <a
              href="/sign-up"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 hover:dark:bg-slate-900 px-3 py-2 rounded-lg mr-4 border border-black dark:border-gray-200 hover:dark:border-gray-100"
            >
              Sign up
            </a>

            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 hover:dark:bg-slate-900 px-3 py-2 rounded-lg border border-transparent hover:border-black hover:dark:border-gray-200 hover:dark:border-gray-100"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </SignedOut>
          <SignedIn>
            <div className="flex justify-center items-center h-full">
              <OrganizationSwitcher />
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-black dark:text-slate-200 hover:dark:text-slate-300">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/*<img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />*/}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {typeof props?.navigationItems?.length !== "undefined"
                  ? props?.navigationItems?.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:dark:bg-slate-900 dark:text-slate-200"
                      >
                        {item.name}
                      </a>
                    ))
                  : null}
              </div>
              <div className="py-6">
                <SignedOut>
                  <a
                    href="/sign-up"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 dark:text-gray-200 hover:dark:bg-slate-900 rounded-lg px-3 py-2"
                  >
                    Sign up
                  </a>

                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 dark:text-gray-200 hover:dark:bg-slate-900 rounded-lg px-3 py-2"
                  >
                    Log in
                  </a>
                </SignedOut>
                <SignedIn>
                  <OrganizationSwitcher />
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
