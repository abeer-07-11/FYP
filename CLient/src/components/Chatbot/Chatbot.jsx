import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import Config from './Config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './chatbot.css'
import lgu from '../../Images/LGU_BG.jpg';

export default function chatbot () {
    return(
    <div className="flex ">
        <div className="w-3/5">
            <img src={lgu} className='h-full' />
        </div>
            <div className="mt-8">
                <Chatbot 
                className="w-full"
                config={Config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    </div>        
    )

}