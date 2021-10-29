import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import logoImage from '../../../public/img/logo.png'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Review', href: '#' },
  { name: 'Support', href: '#' },
]

export default function Nav() {
  return (
    <div className="relative z-10 bg-black">
      <Popover>
        <div className="w-full relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center sm:h-10 lg:justify-center" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src={logoImage}
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-28 md:pr-28 md:space-x-16">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-medium text-gray-50 hover:text-gray-100">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="md:flex hidden items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="-mr-2 md:flex items-center hidden">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <SearchIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-black ring-1 ring-white ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src={logoImage}
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:text-gray-100 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-50 hover:text-gray-100 hover:bg-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}