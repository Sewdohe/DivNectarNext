import React from "react"

//@ts-ignore
export default function P({ children }: React.PropsWithChildren) {
    return (
        <h1 className="text-2xl py-3 px-2 md:text-4xl pl-2 md:pl-6 font-extrabold text-peach">
            {children}
        </h1>
    )
}