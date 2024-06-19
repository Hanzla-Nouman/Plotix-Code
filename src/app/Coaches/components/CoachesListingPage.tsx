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
export default function CoachesListingPage({ filteredCoachesData,allCoaches }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const allCoachesData = allCoaches.items.map(i=>i).filter(c=>c.name.toLowerCase().includes(searchValue.toLowerCase()))
  useEffect(()=>{

  },[searchValue])
  return (
    <>
      <CoachListingHeader searchValue={searchValue} setSearchValue={setSearchValue}/>

   { !searchValue &&  <CoachListingFilters />}
      {console.log("HERE IS COACHES",allCoachesData)}
<div className="mt-10 px-10">
      { searchValue && <AllCoaches coaches={allCoachesData}/>}
      </div>
     {!searchValue && <CoachesPageListing coachesList={filteredCoachesData} />}

      <Footer />
    </>
  );
}
