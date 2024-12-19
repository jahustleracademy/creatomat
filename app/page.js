"use client"; // Fügt Client-Side Interaktivität hinzu
import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Artur";

  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold text-xl">Creatomat</div>
          <div className="space-x-4 max-md:hidden">
            <a class="link link-hover">Videos-Ads</a>
            <a class="link link-hover">Bild-Ads</a>
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Creatomat</h1>
        <div className="opacity-90 mb-10">
          Hier kannst du deine Creatives erstellen, egal ob Video oder
          Bildcreatives. <br />
          Erstelle Creatives in Minuten und nicht Stunden!
        </div>
        <br></br>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
