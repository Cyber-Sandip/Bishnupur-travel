import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Nav(){
    const navigate = useNavigate();
    return(
        <div className="flex flex-row justify-between">
            <div className="flex p-5">
                <img src="./img1.jpg" alt="profile img 1" className="w-12 h-12 rounded-full object-cover"/>
            </div>
            <div className=" flex gap-4 pt-4">

                <div className="flex gap-4">
                
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => navigate('/')}
                    >
                        Home
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => navigate('/Temple')}
                    >
                        Temple
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => navigate('/art')}
                    >
                        Art & craft                    
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => navigate('/Natural-view')}
                    >
                        Natural View
                    </button>

                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => navigate('/Contact')}
                    >
                        Contact us
                    </button>
                    
                
                   

                </div>                 
                
            </div>
            <div className="Flex p-5">
                <img src="./img2.jpg" alt="profile img 2" className="w-12 h-12 rounded-full object-cover"/>
            </div>

        </div>
        
    );
}