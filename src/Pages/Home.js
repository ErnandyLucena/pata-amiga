import React from "react";
import Navbar from "../Components/navbar";
import ContainerHeader from "../Components/Header/Header";

function Home() {
    return (
      <div className="flex flex-col justify-center gap-28">
        <div>
        <Navbar />
        </div>
        <div className="flex justify-center w-full">
        <ContainerHeader />
        </div>
      </div>
    );
}

export default Home;
