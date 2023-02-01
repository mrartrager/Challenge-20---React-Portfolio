import React from 'react';
import myResume from '../../assets/MyResume.pdf'

export default function Resume() {
    return (
        <div className="flex justify-center bg-gradient-to-b from-neutral-300 bg-cover to-neutral-50 p-10 rounded-3xl m-5">
            <div className=''>
            <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">Resume</h1>
            <button className="">
                <a href={myResume} target="_blank"
                    rel="noreferrer">
                    <h2 className="bg-blue-500 hover:bg-zinc-900 hover:text-yellow-400 hover:border-red-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded">
                        This is the way.
                    </h2>
                </a>
        
            </button>
            <p className="text-2xl m-5 pb-5">
                Hit the contact page to learn more!
            </p>
            </div>
        </div>
    );
}