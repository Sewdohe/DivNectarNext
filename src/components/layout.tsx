import { GatsbyNode } from "gatsby"
import React, { FC, ReactNode } from "react"

interface MyProps {
  children?: ReactNode;
}

//@ts-ignore
export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className='dark '>
      { children }
    </div>
  )
}