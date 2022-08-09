import type { NextPage } from "next";
import Head from "next/head";
import { weaponClasses } from "./WeaponClasses";
import { bestiary } from "../data/bestiary";


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

      <main className="flex-col ">
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
    <div className='w-1/3 h-1/2 bg-black inline-grid'>
      <WeaponClassSelector />
      <WeaponSelector />
    </div>
    );
};

const SkillCard = () => {
  return (
    <div className="w-1/3 h-1/2 bg-black border border-white rounded-lg inline-grid" />
  );
};

const MonsterCard = () => {
  return (
    <div className="w-1/3 h-1/2 bg-black border border-white rounded-lg inline-grid" />
  );
};

const ResultsCard = () => {
  return (
    <div className="w-screen h-1/2 bg-red-900">
      <table></table>
    </div>
    )
};

const WeaponClassSelector = () => {
  const options: Array<string> = []
  for (const weaponclass in weaponClasses) {
    options[options.length] = weaponclass
  };

  return (
  <div className='min-w-fit bg-gray-700 border border-black rounded-lg hover:bg-gray-600 hover:border-white inline-grid'>
    <select id='weaponClassSelector' onChange={populateWeaponSelector} className="bg-gray-300 rounded-sm place-self-center">
      {options.map((element, index) => <option key={index}>{element}</option>)}
    </select>
  </div>
  );
};

const WeaponSelector = () => {
  //const weaponlist = loadWeaponListJSON(2)
  const options: Array<string> = []
  for (const weapon in weaponClasses) {
    options[options.length] = weapon
  };

  return (
  <div className='min-w-fit bg-gray-700 border border-black rounded-lg hover:bg-gray-600 hover:border-white inline-grid'>
    <select id='weaponClassSelector' className="bg-gray-300 w-fit rounded-sm place-self-center">
      {options.map((element, index) => <option key={index}>{element}</option>)}
    </select>
  </div>
  );
};

const populateWeaponSelector = (weaponListName: string) => {
  const selector = document.getElementById("WeaponSelector");
  
}


export default Home;
