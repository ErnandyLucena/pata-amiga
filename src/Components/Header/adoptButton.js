import React from "react";

function AdoptButton() {
  return (
    <div className="flex justify-center">
      <div className="max-w-2xl p-6 w-full bg-gradient-to-r from-violet-950 via-violet-800 to-violet-600 rounded-3xl flex flex-col lg:flex-row cursor-pointer"> {/* flex-col para telas pequenas, flex-row para grandes */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <a href="#">
              <h5 className="mb-1 text-2xl lg:text-4xl p-4 font-bold tracking-tight text-white">
                Adote um amigo!
              </h5>
            </a>
            <p className="mb-2 w-full lg:w-9/12 font-normal text-md lg:text-lg text-white p-4">
              Participe já da Campanha ativa para a adoção de animais e faça a diferença na vida de um amigo de quatro patas!
            </p>
            <button 
              type="submit" 
              className="px-9 bg-white ml-3 mt-4 text-indigo-900 hover:bg-white focus:ring-4 focus:outline-none hover:text-white focus:ring-blue-300 font-medium rounded-2xl text-sm py-2 dark:bg-white dark:hover:bg-violet-500 dark:focus:ring-violet-800"
            >
              Saiba Mais
            </button>
          </div>

          {/* Imagens ficam empilhadas em telas pequenas e lado a lado em telas grandes */}
          <div className="flex lg:flex-col flex-row gap-8 p-2 mt-10">
            <div className="relative flex justify-center lg:ml-5">
              <div className="absolute inset-0   lg:w-48 lg:h-48 bg-violet-500 rounded-xl transform translate-x-2 translate-y-2"></div>
              <img
                className="relative w-36 h-36 md:w-48 md:h-48 rounded-xl object-cover z-10"
                src="./Images/gato2.jpg"
                alt="user photo"
              />
            </div>
            <div className="relative flex justify-center lg:ml-5">
              <div className="absolute inset-0   lg:w-48 lg:h-48 bg-violet-500 rounded-xl transform translate-x-2 translate-y-2"></div>
              <img
                className="relative w-36 h-36 md:w-48 md:h-48 rounded-xl object-cover z-10"
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
