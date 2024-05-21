import React from "react"

//@ts-ignore
export default function P({ children }: React.PropsWithChildren) {
    return (
        <h1 className="text-2xl font-extrabold text-sky">
            {children}
        </h1>
    )
}