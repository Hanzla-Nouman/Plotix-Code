import CategoryIcon from "@/components/CategoryIcon";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { COACH_CATEGORIES, languageOptions } from "@/constants/Coach";
import prepareDataForMapping from "@/helpers/prepareDataForMapping";
import { trpc } from "@/trpc/client";
import { CoachingCategories } from "@prisma/client";
import { ListFilter } from "lucide-react";
import React, { useState } from "react";

export default function CoachListingFilters({setlocation,setlanguage,setcategory}) {
  const { data: queryResults, isLoading } =
    trpc.category.getCategoriesList.useQuery({});

  const categories = queryResults || [];
  // const categoriesToMap: (CoachCategory | null)[] = prepareDataForMapping({
  //   data: categories,
  //   isLoading,
  //   take: 5,
  // });
  const [toggleFilters, settoggleFilters] = useState(false);
  return (
    <MaxWidthWrapper className="mt-24 flex gap-8">
      <Button
        variant="outline"
        size="sm"
        className="flex gap-2 rounded-full hover:text-primary"
        onClick={() => settoggleFilters(!toggleFilters)}
      >
        <ListFilter width={20} height={20} />
        Filters
      </Button>
      {toggleFilters && (
        <div className="flex">
          <div>
            <label htmlFor="" className=" font-semibold">
              Location
            </label>
            <select name="" id="">
              <option value="London">London</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
              <option value="Saudi Araibia">Saudi Araibia</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className=" font-semibold">
              Language
            </label>
            <select name="" id="" onChange={(e)=>setlanguage(e.target.value)}>
              {languageOptions.map((i) => (
                <option value={i.value}>{i.label}</option>
              ))}
            </select>
          </div>
          <div className="">
            <label htmlFor="" className=" font-semibold">
              Categories
            </label>
            <select name="" id="" >
              {COACH_CATEGORIES.map((i) => (
                <option value={i.value}>{i.label}</option>
              ))}
            </select>
          </div>
          <div className="">
            <button className="p-2 bg-slate-400 rounded-full mx-4">
              Reset
            </button>
            <button className="p-2 bg-slate-400 rounded-full mx-4">
              Apply Filters
            </button>
          </div>
        </div>
      )}
      {!toggleFilters && (
        <div className="flex gap-4 sm:gap-6 max-w-max overflow-x-auto lg:max-w-full">
          <Button variant="ghost" className="text-primary hover:text-primary">
            All
          </Button>

          <div className="flex gap-2 items-center">
            {Object.values(CoachingCategories).map((category, i) =>
              category ? (
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-2 w-max hover:text-primary"
                  key={category}
                >
                  <CategoryIcon name={category} />

                  <p className="text-muted-foreground hover:text-primary">
                    {category}
                  </p>
                </Button>
              ) : (
                <div key={i} className="w-24 h-8 bg-slate-100 rounded-2" />
              )
            )}
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
