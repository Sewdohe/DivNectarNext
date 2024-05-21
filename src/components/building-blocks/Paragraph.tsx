import React from "react"

//@ts-ignore
export default function P({ children }: React.PropsWithChildren) {
    return (
        <p className="px-3 py-2 md:px-16 md:max-w-[50%]">
            {children}
        </p>
    )
}