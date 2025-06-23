import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative isolate flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6 md:px-12 min-h-[70vh]">
        {/* Parisian Decorative Elements */}
        <div className="eiffel-motif top-20 left-10" />
        <div className="eiffel-motif bottom-10 right-10 transform scale-y-[-1]" />
        <div className="fleur-bg" />

        {/* Decorative BG */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/paris-pastry-bg.jpg"
            alt="Parisian pastry background"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/80 to-rose-100/90" />
        </div>

        {/* Main Content */}
        <div className="z-10 flex-1 text-center md:text-left">
          <h1 className="parisienne-font text-6xl md:text-7xl font-bold mb-4 text-rose-darker leading-tight drop-shadow-sm">
            SugarMuse
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-noir/80 max-w-lg font-medium">
            <span className="parisienne-font text-2xl md:text-3xl text-mauve-dark">
              Freshly Baked | Sweetly Delivered
            </span>{" "}
            <br />
            Indulge in Parisian-inspired cakes, dreamy pastries, and blissful
            desserts—all made with love, all delivered to your door.
          </p>
          <Link
            href="/products"
            className="paris-btn text-lg font-semibold py-3 px-8 hover:scale-105 transition-all"
          >
            Browse Our Menu
          </Link>
        </div>

        {/* Side Dessert Art */}
        <div className="hidden md:block flex-1 z-10 relative">
          <Image
            src="/images/macaron-tower.jpg"
            alt="Macaron Tower"
            width={350}
            height={263}
            className="w-[350px] rounded-3xl shadow-lg ring-4 ring-rose-200 mb-6 animate-float"
            priority
          />
          <Image
            src="/images/eclair-assortment.jpg"
            alt="Éclair Assortment"
            width={350}
            height={263}
            className="w-32 rounded-xl shadow-md absolute left-[-3rem] top-[60%] ring-2 ring-rose-100 animate-float delay-200"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
