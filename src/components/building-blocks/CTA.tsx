import React from "react"

//@ts-ignore
export default function CTA({ children }: React.PropsWithChildren) {
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Join Our Discord</h2>
                    <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Our Discord is a nice little community! We have a very nice Discord bot that allows users to level up and earn community rewards for taking place 
                        in discussions and playing built-in games made available by the bot. Come on in and check us out!
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Join
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}