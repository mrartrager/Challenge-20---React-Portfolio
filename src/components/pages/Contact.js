import React from 'react';

const Contact = () => {
    return (
        <section className='flex justify-center'>
            <div className='about-info bg-gray-200 p-5 shadow-2xl rounded-2xl border-double border-4 border-sky-500'>
                <h2 className="flex justify-center m-5 text-2xl">
                    Contact Me:
                </h2>
                <p className="flex justify-center my-20 text-xl">
                    I am actively seeking a position as a Front-End Developer. Should you be interested in contacting me, my contact information is provided below. I sincerely appreciate your consideration and thank you for taking the time to review this material. I hope that the Star Wars references throughout were found to be entertaining.
                </p>

                <p >
                    <span>Email:</span> Matthew.d.waldron@gmail.com
                </p>
                <p >
                    <span>Phone:</span> 414-897-6640
                </p>
                <h2>Use this form to send  me an email!</h2>
                <section className="flex justify-center">
                    <form className="bg-neutral-300 p-10 rounded-3xl drop-shadow-lg" action="" >
                        <div >
                            <div >
                                <label for="">First Name</label>
                                <input className="m-5 p-1 rounded-xl" type="text" />
                            </div>
                        </div>
                        <div >
                            <div >
                                <label for="">Last Name</label>
                                <input className="m-5 p-1 rounded-xl" type="text" />
                            </div>
                        </div>
                        <div >
                            <div >
                                <label for="">Email</label>
                                <input className="m-5 p-1 rounded-xl" type="text" />
                            </div>
                        </div>
                        <div>
                            <div >
                                <label for="">Message Subject</label>
                                <input className="m-5 p-1 rounded-xl" type="text" />
                            </div>
                        </div>
                        <div >
                            <div>
                                <label for="">Drop your message here</label>
                                <textarea rows="3" type="text" ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center pt-5 mt-5">
                            <button className="p-5 m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">This is the Way</button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default Contact;