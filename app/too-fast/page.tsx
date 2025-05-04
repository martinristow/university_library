import React from 'react'

const Page = () => {
    return (
        <main
            className="root-container flex min-h-screen flex-col items-center justify-center bg-gray-900 p-6 text-center">
            <div className="max-w-2xl rounded-lg bg-gray-800 p-8 shadow-xl">
                <h1 className="font-serif text-5xl font-bold text-white mb-6">Whoa, Slow Down There, Speedy!</h1>
                <p className="text-xl text-gray-300 mb-6">
                    You're making requests too quickly. Please wait a moment before trying again.
                    Our servers need a little breather to keep providing you with the best service.
                </p>
                <p className="text-center mt-3 max-w-xl text-gray-400">
                    This limit helps us protect our resources and ensure everyone gets fair access.
                    Try again in about 60 seconds.
                </p>
            </div>
        </main>
    )
}

export default Page