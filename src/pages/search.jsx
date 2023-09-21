import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import Maps from "@/components/Maps";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Search = ({ searchResults }) => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  useEffect(() => {
    const storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme) setSelectedTheme(storedTheme);
  }, []);

  const themes = [
    "light",
    "dark",
    "synthwave",
    "dracula",
    "halloween",
    "coffee",
    "aqua",
    "luxury",
    "retro",
    "valentine",
    "night",
    "forest",
    "business",
    "black",
    "cyberpunk",
    "garden",
    "cupcake",
    "bumblebee",
    "lofi",
    "emerald",
    "corporate",
    "pastel",
    "fantasy",
    "wireframe",
    "cmyk",
    "autumn",
    "acid",
    "lemonade",
    "winter",
  ];

  return (
    <div data-theme={selectedTheme} className="min-h-screen">
      <Header
        themes={themes}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        placeholder={`${location} | ${range} | ${noOfGuests} guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <button className="search-button">Cancellation Flexibility</button>
            <button className="search-button">Type of Place</button>
            <button className="search-button">Price</button>
            <button className="search-button">Rooms and Beds</button>
            <button className="search-button">More filters</button>
          </div>
          <div className="flex flex-col">
            {searchResults.map((item, i) => (
              <InfoCard
                key={i}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
{/* hidden lg:inline md::min-w-[600px] */}
        {/* <section className="hidden lg:inline md::min-w-[600px]">
          <Maps searchResults={searchResults}/>
        </section> */}
      </main>

      <Footer className="" />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
