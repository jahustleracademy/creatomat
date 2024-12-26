import ButtonLogin from "@/components/ButtonLogin";
import ListItem from "@/components/ListItem";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import product_demo from "@/public/assets/product_demo.png";
import clientPromise from "@/libs/mongo";
import { auth } from "@/auth";

export default async function Home() {
  const isLoggedIn = true;
  const name = "Artur";
  const pricingFeaturesList = [
    "Creative Skripte in Sekunden und nicht Stunden",
    "Unendliche Anzahl an Creatives",
    "24/7 Support",
  ];

  const session = await auth();

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
          <div className="font-bold text-xl">Creatomat</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Preise
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <ButtonLogin session={session} />
        </div>
      </section>
      {/* HERO */}
      <section
        className="text-center lg:text-left py-32 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start"
        id="hero"
      >
        <Image
          src={product_demo}
          alt="Product demo"
          className="rounded-3xl grayscale"
        />
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Creatomat
          </h1>
          <div className="opacity-90 mb-10">
            Hier kannst du deine Creatives erstellen, egal ob Video oder
            Bildcreatives. <br />
            Erstelle Creatives in Minuten und nicht Stunden!
          </div>
          <br></br>
          <ButtonLogin session={session} />
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-base-200 py-32" id="pricing">
        <div className="py-32 px-6 max-w-7xl mx-auto">
          <p className="text-sm uppercase text-center font-medium text-center text-primary">
            Preise
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-center">
            Preise, die sich dir anpassen
          </h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black"> 19€</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /Monat
              </div>
            </div>

            <ul className="space-y-2">
              {/* Generates List Items from Array */}
              {pricingFeaturesList.map((priceItem) => (
                <ListItem key={priceItem}>{priceItem}</ListItem>
              ))}
            </ul>
            <ButtonLogin session={session} extraStyle={"w-full"} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-200 pb-32" id="faq">
        <div className="py-32 px-6 max-w-7xl mx-auto">
          <p className="text-sm uppercase text-center font-medium text-center text-primary">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-center">
            Häufig gestellte Fragen
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question:
                  "Wie lange brauche ich, um ein Creative zu erstellen?",
                answer: "Lorem Ipseum",
              },
              {
                question: "Wo kann ich euch kontaktieren?",
                answer: "Lorem Ipseum",
              },
              {
                question: "Habe ich ein Rückgaberecht?",
                answer: "Lorem Ipseum",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
