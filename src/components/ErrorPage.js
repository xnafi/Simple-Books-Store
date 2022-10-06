import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex justify-center items-center w-screen h-screen text-2xl font-bold flex-col bg-black text-red-900'>
            <h1>Oops An Error Found</h1>
            <p>Status : {error.status}</p>
            <p>{error.statusText}</p>
        </div>
    )
}
