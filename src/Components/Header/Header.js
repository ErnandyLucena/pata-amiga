import React from "react";
import MainButton from "./MainButton";
import ButtonLong from "./ButtonLong";
import SearchBar from "./SearchBar";
import AdoptButton from "./adoptButton";

function ContainerHeader() {
  return (
    <div className="w-full">
      <div className="mb-20">
        <SearchBar />
      </div>
      <div className="flex gap-5 m-10 justify-center">
        <div>
          <AdoptButton />
        </div>
        <div className="space-y-5"> {/* Espaçamento vertical entre os botões */}
          <MainButton />
          <MainButton />
          <MainButton />
        </div>
      </div>
    </div>
  );
}

export default ContainerHeader;
