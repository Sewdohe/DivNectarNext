import React from "react"

//@ts-ignore
export default function PaddedContainer({ children }: React.PropsWithChildren) {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}