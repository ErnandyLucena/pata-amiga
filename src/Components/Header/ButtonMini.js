import React from "react";


function ButtonMini() {
    return (
        <div className="flex justify-center items-center">
        <div className="w-32 h-32 md:w-40 md:h-40  bg-white border-4 border-violet-950 rounded-lg flex justify-center items-center">
          {/* Imagem centralizada */}
          <img
            src="./Images/exemplo.png"
            alt="Imagem Centralizada"
            className="w-20 h-20 object-cover"
          />
        </div>
      </div>
    );
}

export default ButtonMini;
