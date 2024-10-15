import React from "react";
import MainButton from "./MainButton";
import ButtonLong from "./ButtonLong";
import SearchBar from "./SearchBar";


function ContainerHeader() {
    return (
    <div className="w-full  mx-auto">
        <div className="mb-20">
        <SearchBar />
        </div>
      
        <MainButton />
        <ButtonLong />
    </div>
    );
}

export default ContainerHeader;
