import React from "react"

//@ts-ignore
export default function P({ children }: React.PropsWithChildren) {
    return (
        <p className="my-4 px-2 mx-auto">
            {children}
        </p>
    )
}