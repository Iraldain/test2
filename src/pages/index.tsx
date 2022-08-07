import type { NextPage } from "next";
import Head from "next/head";
import { weaponClasses } from "../data/WeaponClasses";


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
        <title>Sunbreak Matchup Calculator</title>
        <meta name="description" content="A tool for nerds and hunters." />
        <link rel="icon" href="" />
      </Head>

      <main>
        <WeaponCard />
        <SkillCard />
        <MonsterCard />
        <ResultsCard />
      </main>


    </>
  );
};

const WeaponCard = () => {
  return (
    <div className='w-1/3 bg-black inline-grid'>
      <WeaponClassSelector />
      <WeaponSelector />
    </div>
    );
};

const SkillCard = () => {
  return (
    <div className="w-1/3 bg-black border border-white rounded-lg my-3 p-3 inline-grid" />
  );
};

const MonsterCard = () => {
  return (
    <div className="w-1/3 bg-black border border-white rounded-lg my-3 p-3 inline-grid" />
  );
};

const ResultsCard = () => {
  return (
    <div className="w-screen m-3 bg-red-900">
      <table></table>
    </div>
    )
};

async function loadWeaponListJSON(
  listId: number
  ) {
  const response = await fetch("../data/weaponlist" + listId + ".json");
  const json = await response.json();
  console.log(json);
}

const WeaponClassSelector = () => {
  const options: Array<string> = []
  for (const weapon in weaponClasses) {
    options[options.length] = weapon
  };

  return (
  <div className='min-w-fit max-w-fill m-3 bg-gray-700 border border-black rounded-lg hover:bg-gray-600 hover:border-white inline-grid'>
    <select id='weaponClassSelector' className="bg-gray-300 rounded-sm m-2 place-self-center">
      {options.map((element, index) => <option key={index}>{element}</option>)}
    </select>
  </div>
  );
};

const WeaponSelector = () => {
  const weaponlist = loadWeaponListJSON(2)
  const options: Array<string> = []
  for (const weapon in weaponClasses) {
    options[options.length] = weapon
  };

  return (
  <div className='min-w-fit max-w-fill m-3 bg-gray-700 border border-black rounded-lg hover:bg-gray-600 hover:border-white inline-grid'>
    <select id='weaponClassSelector' className="bg-gray-300 rounded-sm m-2 place-self-center">
      {options.map((element, index) => <option key={index}>{element}</option>)}
    </select>
  </div>
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

export default Home;
