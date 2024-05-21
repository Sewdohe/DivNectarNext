import React from "react"

//@ts-ignore
export default function PaddedContainer({ children }: React.PropsWithChildren) {
    return (
        <div className="px-3 md:px-16 md:max-w-[50%] mx-auto">
            {children}
        </div>
    )
}