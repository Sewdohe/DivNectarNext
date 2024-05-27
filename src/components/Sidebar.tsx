import {
    Cog6ToothIcon,
    UserCircleIcon,
    QuestionMarkCircleIcon,
    UserGroupIcon
  } from '@heroicons/react/24/outline'
import { Link } from 'gatsby'
  import React from 'react'
  
  const navigation = [
    { name: 'Connection', href: '/servers/forge-connection', icon: QuestionMarkCircleIcon, current: false },
    { name: 'Mods', href: '#', icon: Cog6ToothIcon, count: "25+", current: false },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Sidebar() {
    return (
      <div className="flex transition-all bg-navBG bg-opacity-85 h-[100vh] backdrop-blur-sm absolute top-0 left-0 grow flex-col gap-y-8 overflow-y-auto px-6">
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 mt-24 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 list-image-none space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon className="h-6 w-6 text-green shrink-0" aria-hidden="true" />
                      {item.name}
                      {item.count ? (
                        <span
                          className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-surface px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                          aria-hidden="true"
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
              >
                <img
                  className="h-8 w-8 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    )
  }