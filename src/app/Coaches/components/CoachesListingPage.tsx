// "use client";

// import Footer from "@/components/ui/footer";
// import CoachesPageListing from "./CoachesPageListing";
// import CoachListingFilters from "./CoachListingFilters";
// import CoachListingHeader from "./CoachListingHeader";
// import { CoachWithRelations } from "@/TSChema";
// import { useEffect, useState } from "react";
// import AllCoaches from "./AllCoaches";

// interface Props {
//   filteredCoachesData: (
//     | (CoachWithRelations & { categoryName: string })
//     | null
//   )[][];
// }
// export default function CoachesListingPage({ filteredCoachesData,allCoaches }: Props) {
//   const [searchValue, setSearchValue] = useState("");
//   const [location, setlocation] = useState("");
//   const [language, setlanguage] = useState("");
//   const [category, setcategory] = useState("");

// const handleResetFilters=()=>{
//   setlocation("")
//   setlanguage("")
//   setcategory("")
// }
// let filteredData;
// const handleApplyFilters = () => {
//   console.log("applied")
//    if(location){
//     filteredData = allCoaches.items.map(i=>i).filter(c=>c.location.toLowerCase() === location.toLowerCase())
//    }
//    console.log("Filtered Data 1",filteredData)
//    if(language){
//     filteredData = allCoaches.items.map(i=>i).filter(c=>c.language.includes(language))
//    }
//    console.log("Filtered Data 2",filteredData)
//    if(category){
//     filteredData = allCoaches.items.map(i=>i).filter(c=>c.coachingCategories.includes(category))
//    }
//    console.log("Filtered Data 3",filteredData)
// };

//   const allCoachesData = allCoaches.items.map(i=>i).filter(c=>c.name.toLowerCase().includes(searchValue.toLowerCase()))
//   useEffect(()=>{

//   },[searchValue])
//   return (
//     <>
//       <CoachListingHeader searchValue={searchValue} setSearchValue={setSearchValue}/>

//    { !searchValue &&  <CoachListingFilters handleApplyFilters={handleApplyFilters}  handleResetFilters={handleResetFilters} setlocation={setlocation} setlanguage={setlanguage} setcategory={setcategory}/>}
//    {location}
//    {language}
//    {category}
//       {console.log("HERE IS COACHES",allCoachesData)}
// <div className="mt-10 px-10">
//       { searchValue && <AllCoaches coaches={allCoachesData}/>}
//       </div>
//      {!searchValue && <CoachesPageListing coachesList={filteredCoachesData} />}

//       <Footer />
//     </>
//   );
// }
"use client";

import Footer from "@/components/ui/footer";
import CoachesPageListing from "./CoachesPageListing";
import CoachListingFilters from "./CoachListingFilters";
import CoachListingHeader from "./CoachListingHeader";
import { CoachWithRelations } from "@/TSChema";
import { useEffect, useState } from "react";
import AllCoaches from "./AllCoaches";

interface Props {
  filteredCoachesData: (
    | (CoachWithRelations & { categoryName: string })
    | null
  )[][];
}

export default function CoachesListingPage({ filteredCoachesData, allCoaches }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [location, setlocation] = useState("");
  const [language, setlanguage] = useState("");
  const [category, setcategory] = useState("");
  const [filteredCoaches, setFilteredCoaches] = useState(allCoaches.items);

  const handleResetFilters = () => {
    setlocation("");
    setlanguage("");
    setcategory("");
    setFilteredCoaches(allCoaches.items); // Reset to show all coaches
  }

  const handleApplyFilters = () => {
    console.log("Applying filters");

    let filteredData = allCoaches.items;

    if (location) {
      filteredData = filteredData.filter(c => c.location.toLowerCase() === location.toLowerCase());
    }

    console.log("Filtered by location:", filteredData);

    if (language) {
      filteredData = filteredData.filter(c => c.language.includes(language));
    }

    console.log("Filtered by language:", filteredData);

    if (category) {
      filteredData = filteredData.filter(c => c.coachingCategories.includes(category));
    }

    console.log("Filtered by category:", filteredData);

    setFilteredCoaches(filteredData);
  };

  const allCoachesData = allCoaches.items.filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase()));

  useEffect(() => {}, [searchValue]);

  return (
    <>
      <CoachListingHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      {!searchValue && (
        <CoachListingFilters
          handleApplyFilters={handleApplyFilters}
          handleResetFilters={handleResetFilters}
          setlocation={setlocation}
          setlanguage={setlanguage}
          setcategory={setcategory}
        />
      )}

      <div className="mt-10 px-10">
        {searchValue ? (
          <AllCoaches coaches={allCoachesData} />
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
