import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Tooltip } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'
import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard'

interface Props {
  classes?: string
}

export default function Profile({classes}: Props) {
  const { user,
    isAuthenticated,
    logout,
    loginWithRedirect } = useAuth0();

  return (
    <div className={classes}>
      {user ? (
        <a href="#" className="group block flex-shrink-0">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src={user.picture}
                alt="profile picture"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-subText group-hover:text-textPrimary">{user.name}</p>
              {/* @ts-ignore */}
              <p onClick={logout} className="text-xs font-medium text-subText group-hover:text-tetPrimary">Logout</p>
            </div>
          </div>
        </a>
      ) : (
        <Tooltip content="Login">
          <button
            type="button"
            // @ts-ignore
            onClick={loginWithRedirect}
            className="inline-flex items-center gap-x-1.5 rounded-md bg-sapphire px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            LogIn
            <FontAwesomeIcon icon={faIdCard} className="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </button>
        </Tooltip>
      )}
    </div>
  )
}