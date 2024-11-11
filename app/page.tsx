import Image from "next/image";

export default function Home() {
  return (
    <header className= "h-screen gap-5">
      <nav className="flex items-center justify-center w-full bg-black h-32 ">
        <div className="bg-purple-700 h-10 w-96"></div>
        

        <div className="flex justify-end items-center w-3/5 ">
          <div className="bg-green-700 h-10 w-44 text-center content-center">Home </div>
          <div className="bg-yellow-700 h-10 w-44"></div>
          <div className="bg-orange-700 h-10 w-44"></div>
        </div>
      </nav>
      <section className="flex flex-col h-screen gap-3 mt-4 mb-0 mr-14 ml-14 pr-10 pl-10">
        <div className="flex justify-center gap-3 ">
          <div className="bg-red-700    h-72 w-1/3 rounded-md"></div>
          <div className="bg-yellow-300 h-72 w-1/3 rounded-md"></div>
          <div className="bg-purple-700 h-72 w-1/3 rounded-md"></div>
        </div>
        <div className="flex gap-3 ">
          <div className="bg-green-500  h-48 w-1/2 rounded-md"></div>
          <div className="bg-blue-700   h-48 w-1/2 rounded-md"></div>
        </div>
      </section>
    </header>
  );
}