import React from "react";

function MainButton() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl md:max-h-32 p-6 w-full bg-gradient-to-r from-violet-950 via-violet-800 to-violet-600 rounded-3xl flex flex-col lg:flex-row cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <div className="flex items-center gap-6">
          <div>
            <img
              className="w-13 h-13 lg:w-15 lg:h-15"
              src="./Images/localizacao.png"
              alt="user photo"
            />
          </div>
          <div>
            <a href="#">
              <h5 className="mb-1 text-lg lg:text-2xl font-bold tracking-tight text-white">
                Animal Abandonado
              </h5>
            </a>
            <p className="mb-2 text-sm lg:text-base font-normal text-white">
              Nos ajude a encontrar pets abandonados
            </p>
          </div>
          <div className="ml-5">
            <img
              className="w-3"
              src="./Images/seta.png"
              alt="user photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainButton;
