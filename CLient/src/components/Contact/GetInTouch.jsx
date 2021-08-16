import React from 'react';

const GetnTouch = () => {

    return ( 
        <div className="flex flex-col mb-4">
            <div className="p-4 flex flex-col md:flex-row mt-4 rounded-lg mb-4 ">
                <div className="flex-col ml-10">
                    <h1 className="font-bold text-4xl">Get In Touch</h1>
                    <div className="flex mb-4"><hr className ="border-t-4 border-solid border-red-700 rounded-full w-16"/></div>
                </div>
            </div>
            <div className="p-4 text-xl">
                <div className="flex justify-center">
                    <p className="text-gray-600 ">
                    Want to get in touch?
                    </p>
                </div>
                <div className="flex justify-center">
                    <p className="text-gray-600">
                        Fill out the form to send a message
                    </p>
                </div>
                <div className="flex justify-center">
                    <p className="text-gray-600">
                        We will get back to you as soon as possible!
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default GetnTouch;