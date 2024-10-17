import React from "react";

function AdoptButton() {
  return (
    <div className="flex justify-center">
      <div className="max-w-2xl p-6 w-full bg-gradient-to-r from-violet-950 via-violet-800 to-violet-600 rounded-3xl flex cursor-pointer">
        <div className="flex">
          <div className="w-1/2">
            <a href="#">
              <h5 className="mb-1 text-4xl p-4 font-bold tracking-tight text-white">
                Adote um amigo!
              </h5>
            </a>
            <p className="mb-2 w-9/12 font-normal text-lg text-white p-4">
              Participe já da Campanha ativa para a adoção de animais e faça a
              diferença na vida de um amigo de quatro patas!
            </p>
            <button 
                    type="submit" 
                    className="px-9 bg-white ml-3 mt-4 text-indigo-900 hover:bg-white focus:ring-4 focus:outline-none hover:text-white focus:ring-blue-300 font-medium rounded-2xl text-sm  py-2 dark:bg-white dark:hover:bg-violet-500 dark:focus:ring-violet-800"
                >
                    Saiba Mais
                </button>
          </div>
   <div className="flex flex-col gap-8 p-2">
          {/* Container for image and background card */}
          <div className="relative ml-5 flex">
            {/* Card behind the image */}
            <div className="absolute inset-0 w-48 h-48 bg-violet-500 rounded-xl transform translate-x-2 translate-y-2"></div>
            
            {/* Image that overlaps the card */}
            <img
              className="relative w-48 h-48 rounded-xl object-cover z-10"
              src="./Images/gato2.jpg"
              alt="user photo"
            />
            
          </div>
          <div className="relative ml-5 flex flex-col">
            {/* Card behind the image */}
            <div className="absolute inset-0 w-48 h-48 bg-violet-500 rounded-xl transform translate-x-2 translate-y-2"></div>
            
            {/* Image that overlaps the card */}
            <img
              className="relative w-48 h-48 rounded-xl object-cover z-10"
              src="./Images/dog1.jpg"
              alt="user photo"
            />
            
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptButton;
