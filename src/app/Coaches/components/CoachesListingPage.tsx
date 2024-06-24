"use client";

import Footer from "@/components/ui/footer";
import CoachesPageListing from "./CoachesPageListing";
import CoachListingFilters from "./CoachListingFilters";
import CoachListingHeader from "./CoachListingHeader";
import { CoachWithRelations } from "@/TSChema";
import { useEffect, useState } from "react";
import AllCoaches from "./AllCoaches";
import { ComboboxOption } from "@/components/ui/combobox";
import { trpc } from "@/trpc/client";

interface Props {
  filteredCoachesData: (
    | (CoachWithRelations & { categoryName: string })
    | null
  )[][];
  allCoaches: { items: CoachWithRelations[] };
}

export default function CoachesListingPage({ filteredCoachesData, allCoaches }: Props) {
  const { data } = trpc.focusArea.list.useQuery({});
  const [searchValue, setSearchValue] = useState("");
  const [focusAreaOptions, setFocusAreaOptions] = useState<ComboboxOption[]>([]);
  const [focusArea, setFocusArea] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [filteredCoaches, setFilteredCoaches] = useState(allCoaches.items);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setFocusAreaOptions(
      data?.map((focusArea) => ({
        value: focusArea.id,
        label: focusArea.name,
      })) || []
    );
  }, [data]);

  const handleResetFilters = () => {
    setLocation("");
    setLanguage("");
    setCategory("");
    setPrice("");
    setFocusArea("");
    setSelectedOptions([]);
    setFilteredCoaches(allCoaches.items); // Reset to show all coaches
  };

  const handleApplyFilters = () => {
    let filteredData = allCoaches.items;

    // Filter by price range
    if (price) {
      if (price === "10 to 100") {
        filteredData = filteredData.filter(c => c.hourlyRate >= 10 && c.hourlyRate <= 100);
      } else if (price === "100 to 200") {
        filteredData = filteredData.filter(c => c.hourlyRate >= 101 && c.hourlyRate <= 200);
      } else if (price === "200 to 300") {
        filteredData = filteredData.filter(c => c.hourlyRate >= 201 && c.hourlyRate <= 300);
      } else if (price === "300 to 400") {
        filteredData = filteredData.filter(c => c.hourlyRate >= 301 && c.hourlyRate <= 400);
      } else {
        filteredData = filteredData.filter(c => c.hourlyRate >= 401 && c.hourlyRate <= 500);
      }
      console.log("filtered by pricing", filteredData);
    }

    // Filter by location
    if (location) {
      filteredData = filteredData.filter(c => c.location.toLowerCase() === location.toLowerCase());
      console.log("filtered by location", filteredData);
    }

    // Filter by language
    if (language) {
      filteredData = filteredData.filter(c => c.language.includes(language));
      console.log("filtered by language", filteredData);
    }

    // Filter by category
    if (category) {
      filteredData = filteredData.filter(c => c.coachingCategories.includes(category));
      console.log("filtered by category", filteredData);
    }

    // Filter by focus area options
    console.log("selected Options", selectedOptions);
    const mainArray = ["hanzla", "hamza", "ali", "ahmad"];
    const checkArray = ["hanzla", "hamza"];
    const res = checkArray.every(name => mainArray.includes(name));
    console.log("result", res);
    if (selectedOptions) {
      filteredData = filteredData.filter(coach => {
        const coachFocusAreas = coach.focusAreas.map(i => i.name);
        return selectedOptions.every(option => coachFocusAreas.includes(option));
      });
    }
    setFilteredCoaches(filteredData);
  };

  useEffect(() => {
    if (searchValue) {
      setFilteredCoaches(allCoaches.items.filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setFilteredCoaches(allCoaches.items);
    }
  }, [searchValue, allCoaches]);

  return (
    <>
      <CoachListingHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      {!searchValue && (
        <CoachListingFilters
          allCoaches={allCoaches}
          handleApplyFilters={handleApplyFilters}
          handleResetFilters={handleResetFilters}
          setLocation={setLocation}
          setLanguage={setLanguage}
          setCategory={setCategory}
          setPrice={setPrice}
          setFocusArea={setFocusArea}
          focusAreaOptions={focusAreaOptions}
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
        />
      )}
      {selectedOptions && selectedOptions.map(i => <h1 key={i}>{i}</h1>)}
      <div className="mt-10 px-10">
        {searchValue ? (
          <AllCoaches coaches={filteredCoaches} />
        ) : filteredCoaches !== allCoaches.items ? (
          <AllCoaches coaches={filteredCoaches} />
        ) : (
          <CoachesPageListing coachesList={filteredCoachesData} />
        )}
      </div>
      <Footer />
    </>
  );
}
