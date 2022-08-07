import type { NextPage } from "next";
import Head from "next/head";

const weaponClasses = Object.freeze({
  greatSword : Symbol('Great Sword'),
  swordAndShield : Symbol ('Sword and Shield'),
  dualBlades : Symbol('Dual Blades'),
  longSword : Symbol('Long Sword'),
  hammer : Symbol('Hammer'),
  huntingHorn : Symbol('Hunting Horn'),
  lance : Symbol('Lance'),
  switchAxe : Symbol('Switch Axe'),
  chargeBlade : Symbol('Charge Blade'),
  gunLance : Symbol('Gunlance'),
  insectGlaive : Symbol('Insect Glaive'),
  bow : Symbol('Bow'),
  heavyBowgun : Symbol('Heavy Bowgun'),
  lightBowgun : Symbol('Light Bowgun')
})

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

type WeaponProps = {
  name: string;
  id: number;
  imgSrc: string;
  weaponClass: string;
  baseRaw: number;
  baseAffinity: number;
  elements: Map<string, number>
  slots: Array<number>;
  rampageSlot: number;
  defenseBonus: number;
  unique: Array<string>;
  sharpness: {
    startsMaxed: boolean,
    red: number,
    orange: number,
    yellow: number,
    green: number,
    blue: number,
    white: number,
    purple: number
  };
}

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen w-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        <p className="text-2xl text-gray-700">This stack uses:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
          <TechnologyCard
            name="NextJS"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <TechnologyCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
        </div>
        {createWeaponCards()}
      </main>
    </>
  );
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};



function createWeaponCards(){
  
  return
}

const WeaponCard = ({
  name,
  baseRaw,
  baseAffinity,
}: WeaponProps) => {
  return <></>
};

export default Home;