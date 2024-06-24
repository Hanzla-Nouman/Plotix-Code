import React from "react";
import { getTrpcCaller } from "@/trpc";
import { CoachWithRelations } from "@/TSChema";
import prepareDataForMapping from "@/helpers/prepareDataForMapping";
import CoachesListingPage from "./components/CoachesListingPage";
import { CoachingCategories } from "@prisma/client";
// import { trpc } from "@/trpc/client";
import { ComboboxOption } from "@/components/ui/combobox";

const Page = async () => {
  const trpcCaller = await getTrpcCaller();
  const coachList = await trpcCaller.coach.getCoachList({
    categories: [CoachingCategories.Comics, CoachingCategories.Manga],
    take: 4,
  });
  // const { data, isLoading } = trpc.focusArea.list.useQuery({});
  
const allCoaches = await trpcCaller.coach.getInfiniteCoaches({})
console.log("CoachList",coachList);
console.log("All Coaches here",allCoaches);
  const coachesData = coachList || [];
  const filteredCoachesData: (
    | (CoachWithRelations & { categoryName: string })
    | null
  )[][] = prepareDataForMapping({ data: coachesData });

  return <CoachesListingPage allCoaches={allCoaches} filteredCoachesData={filteredCoachesData} />
}

export default Page;
