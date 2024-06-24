// // "use client";

// // import Footer from "@/components/ui/footer";
// // import CoachesPageListing from "./CoachesPageListing";
// // import CoachListingFilters from "./CoachListingFilters";
// // import CoachListingHeader from "./CoachListingHeader";
// // import { CoachWithRelations } from "@/TSChema";
// // import { useEffect, useState } from "react";
// // import AllCoaches from "./AllCoaches";

// // interface Props {
// //   filteredCoachesData: (
// //     | (CoachWithRelations & { categoryName: string })
// //     | null
// //   )[][];
// // }
// // export default function CoachesListingPage({ filteredCoachesData,allCoaches }: Props) {
// //   const [searchValue, setSearchValue] = useState("");
// //   const [location, setlocation] = useState("");
// //   const [language, setlanguage] = useState("");
// //   const [category, setcategory] = useState("");

// // const handleResetFilters=()=>{
// //   setlocation("")
// //   setlanguage("")
// //   setcategory("")
// // }
// // let filteredData;
// // const handleApplyFilters = () => {
// //   console.log("applied")
// //    if(location){
// //     filteredData = allCoaches.items.map(i=>i).filter(c=>c.location.toLowerCase() === location.toLowerCase())
// //    }
// //    console.log("Filtered Data 1",filteredData)
// //    if(language){
// //     filteredData = allCoaches.items.map(i=>i).filter(c=>c.language.includes(language))
// //    }
// //    console.log("Filtered Data 2",filteredData)
// //    if(category){
// //     filteredData = allCoaches.items.map(i=>i).filter(c=>c.coachingCategories.includes(category))
// //    }
// //    console.log("Filtered Data 3",filteredData)
// // };

// //   const allCoachesData = allCoaches.items.map(i=>i).filter(c=>c.name.toLowerCase().includes(searchValue.toLowerCase()))
// //   useEffect(()=>{

// //   },[searchValue])
// //   return (
// //     <>
// //       <CoachListingHeader searchValue={searchValue} setSearchValue={setSearchValue}/>

// //    { !searchValue &&  <CoachListingFilters handleApplyFilters={handleApplyFilters}  handleResetFilters={handleResetFilters} setlocation={setlocation} setlanguage={setlanguage} setcategory={setcategory}/>}
// //    {location}
// //    {language}
// //    {category}
// //       {console.log("HERE IS COACHES",allCoachesData)}
// // <div className="mt-10 px-10">
// //       { searchValue && <AllCoaches coaches={allCoachesData}/>}
// //       </div>
// //      {!searchValue && <CoachesPageListing coachesList={filteredCoachesData} />}

// //       <Footer />
// //     </>
// //   );
// // }
// "use client";

// import Footer from "@/components/ui/footer";
// import CoachesPageListing from "./CoachesPageListing";
// import CoachListingFilters from "./CoachListingFilters";
// import CoachListingHeader from "./CoachListingHeader";
// import { CoachWithRelations } from "@/TSChema";
// import { useEffect, useState } from "react";
// import AllCoaches from "./AllCoaches";
// import { ComboboxOption } from "@/components/ui/combobox";
// import { trpc } from "@/trpc/client";


// interface Props {
//   filteredCoachesData: (
//     | (CoachWithRelations & { categoryName: string })
//     | null
//   )[][];
// }

// export default function CoachesListingPage({ filteredCoachesData, allCoaches }: Props) {
//   const { data, isLoading } = trpc.focusArea.list.useQuery({});
//   const [searchValue, setSearchValue] = useState("");
//   const [focusAreaOptions, setFocusAreaOptions] = useState<ComboboxOption[]>(
//     []
//   );
//   useEffect(() => {
//     setFocusAreaOptions(
//       data?.map((focusArea) => ({
//         value: focusArea.id,
//         label: focusArea.name,
//       })) || []
//     );
//   }, [data]);
//   const [location, setlocation] = useState("");
//   const [language, setlanguage] = useState("");
//   const [category, setcategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [filteredCoaches, setFilteredCoaches] = useState(allCoaches.items);

//   const handleResetFilters = () => {
//     setlocation("");
//     setlanguage("");
//     setcategory("");
//     setFilteredCoaches(allCoaches.items); // Reset to show all coaches
//   }

// const handleApplyFilters = () => {
  
//   let filteredData = allCoaches.items;
//   if(price){
//      if(price === "10 to 100"){
//       filteredData = filteredData.filter(c => c.hourlyRate >= 10 && c.hourlyRate <= 100);
//      }else if(price === "100 to 200"){
//       filteredData = filteredData.filter(c => c.hourlyRate >= 101 && c.hourlyRate <= 200);
//      }else if(price === "200 to 300"){
//       filteredData = filteredData.filter(c => c.hourlyRate >= 201 && c.hourlyRate <= 300);
//      }else if(price === "300 to 400"){
//       filteredData = filteredData.filter(c => c.hourlyRate >= 301 && c.hourlyRate <= 400);
//      }else{
//         filteredData = filteredData.filter(c => c.hourlyRate >= 401 && c.hourlyRate <= 500);
//      }
//   }

//     if (location) {
//       filteredData = filteredData.filter(c => c.location.toLowerCase() === location.toLowerCase());
//     }

//     console.log("Filtered by location:", filteredData);

//     if (language) {
//       filteredData = filteredData.filter(c => c.language.includes(language));
//     }

//     console.log("Filtered by language:", filteredData);

//     if (category) {
//       filteredData = filteredData.filter(c => c.coachingCategories.includes(category));
//     }
//     console.log("Filtered by category:", filteredData);
//     if (focusAreaOptions) {
//       filteredData = filteredData.filter(c => c.focusAreas.map(i=>i.name).includes(focusAreaOptions));
//     }

//     console.log("Filtered by focus area options:", filteredData);

//     setFilteredCoaches(filteredData);
//   };

//   const allCoachesData = allCoaches.items.filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase()));

//   useEffect(() => {}, [searchValue]);

//   return (
//     <>
//       <CoachListingHeader searchValue={searchValue} setSearchValue={setSearchValue} />
//       {!searchValue && (
//         <CoachListingFilters
//         allCoaches={allCoaches}
//           handleApplyFilters={handleApplyFilters}
//           handleResetFilters={handleResetFilters}
//           setlocation={setlocation}
//           setlanguage={setlanguage}
//           setcategory={setcategory}
//           setPrice={setPrice}
//           focusAreaOptions={focusAreaOptions}
//         />
//       )}

//       <div className="mt-10 px-10">
//         {searchValue ? (
//           <AllCoaches coaches={allCoachesData} />
//         ) : filteredCoaches !== allCoaches.items ? (
//           <AllCoaches coaches={filteredCoaches} />
//         ) : (
//           <CoachesPageListing coachesList={filteredCoachesData} />
//         )}
//       </div>
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
      console.log("filtered by pricing",filteredData);

    }

    // Filter by location
    if (location) {
      filteredData = filteredData.filter(c => c.location.toLowerCase() === location.toLowerCase());
      console.log("filtered by location",filteredData);

    }

    // Filter by language
    if (language) {
      filteredData = filteredData.filter(c => c.language.includes(language));
      console.log("filtered by language",filteredData);

    }

    // Filter by category
    if (category) {
      filteredData = filteredData.filter(c => c.coachingCategories.includes(category));
      console.log("filtered by category",filteredData);

    }

    // Filter by focus area options
    // if (focusAreaOptions.length > 0) {
    //   const selectedFocusAreas = focusAreaOptions.map(option => option.label);
    //   filteredData = filteredData.filter(c => c.focusAreas.some(fa => selectedFocusAreas.includes(fa.name)));
    // }
    {console.log("focusAreaOptions",focusAreaOptions)}
    if (focusArea) {
            filteredData = filteredData.filter(c => c.focusAreas.map(i=>i.name).includes(focusArea));
            console.log("filtered by focus A",filteredData);
          }
    setFilteredCoaches(filteredData);
  };

  const allCoachesData = allCoaches.items.filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase()));

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
        />
      )}
{focusArea}
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
