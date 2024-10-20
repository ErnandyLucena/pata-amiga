import React from "react";
import MainButton from "./MainButton";
import AdoptButton from "./adoptButton";
import SearchBar from "./SearchBar";
import ButtonMini from "./ButtonMini";

function ContainerHeader() {
  return (
    <div className="w-full">
      <div className="mb-20 px-4">
        {/* Adicionado padding para evitar o conteúdo colado nas bordas */}
        <SearchBar />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start md:px-10 gap-10 m-5">
        {/* flex-col em telas pequenas, flex-row em telas grandes */}

        {/* Div principal dos botões e AdoptButton */}
        <div className="w-full flex flex-col lg:flex-row justify-center gap-10">
          
          {/* Botões pequenos empilhados verticalmente */}
          <div className="md:space-y-5 flex flex-row md:flex-col items-center lg:w-auto justify-center gap-5">
            <ButtonMini />
            <ButtonMini />
            <ButtonMini />
          </div>
          
          {/* Botão de adoção centralizado */}
          <div className="flex justify-center">
            <AdoptButton />
          </div>

          {/* Botões principais empilhados verticalmente */}
          <div className="space-y-5 flex flex-col items-center lg:w-auto">
            <MainButton />
            <MainButton />
            <MainButton />
            <MainButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerHeader;
