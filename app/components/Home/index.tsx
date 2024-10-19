import React from "react";
import Navbar from "../ui/FloatingNavbar";
import Footer from "./Footer";
import Hero from "./Hero";
import { ThemeProvider } from "../../provider";

const HomePage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <Navbar />
        <Hero />
        <Footer />
        </ThemeProvider>
      </div>
    </main>
  );
};

export default HomePage;
