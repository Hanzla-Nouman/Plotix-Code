import CategoryIcon from "@/components/CategoryIcon";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { COACH_CATEGORIES, languageOptions, location } from "@/constants/Coach";
import prepareDataForMapping from "@/helpers/prepareDataForMapping";
import { trpc } from "@/trpc/client";
import { CoachingCategories } from "@prisma/client";
import { ListFilter } from "lucide-react";
import React, { useState } from "react";

export default function CoachListingFilters({
  handleApplyFilters,
  handleResetFilters,
  setLocation,
  setLanguage,
  setCategory,
  allCoaches,
  setPrice,
  focusAreaOptions,
  selectedOptions,
  setSelectedOptions,
  setFocusArea
}) {
  const { data: queryResults, isLoading } =
    trpc.category.getCategoriesList.useQuery({});
    const handleOptionClick = (value) => {
      if (selectedOptions.includes(value)) {
        setSelectedOptions(selectedOptions.filter(option => option !== value));
      } else {
        setSelectedOptions([...selectedOptions, value]);
      }
    };
    const isSelected = (value) => selectedOptions.includes(value);

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
        <div className="flex gap-4">
          <div className="max-w-sm mx-auto">
            <select
              name=""
              id=""
              onChange={(e) => setLocation(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Location</option>
              {location.map((i) => (
                <option value={i.label}>{i.label}</option>
              ))}
            </select>
          </div>
              
          <div className="relative">
      <button
        type="button"
        className="hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
      >
        Expertise
        <div className="absolute top-1/2 end-3 -translate-y-1/2">
          <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </div>
      </button>
      <div className="mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700">
        {focusAreaOptions.map(option => (
          <div
            key={option.label}
            className={`py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800 ${isSelected(option.value) ? 'bg-gray-100 dark:bg-neutral-800' : ''}`}
            onClick={() => handleOptionClick(option.label)}
          >
            <div className="flex justify-between items-center w-full">
              <span>{option.label}</span>
              {isSelected(option.label) && (
                <svg className="flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
          <div className="max-w-sm mx-auto">
            <select
              id="countries"
              onChange={(e) => setPrice(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Pricing</option>
              <option value="10 to 100">From 10 to 100</option>
              <option value="100 to 200">From 100 to 200</option>
              <option value="200 to 300">From 200 to 300</option>
              <option value="300 to 400">From 300 to 400</option>
              <option value="400 to 500">From 400 to 500</option>
            </select>
          </div>
          <div className="max-w-sm mx-auto">
            <select
              id="countries"
              onChange={(e) => setFocusArea(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Focus Areas</option>
              {focusAreaOptions.map((i) => (
                <option value={i.label}>{i.label}</option>
              ))}
            </select>
          </div>
          <div className="gap-2 flex">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-orange-600 h-10 px-4 py-2"
              onClick={handleResetFilters}
            >
              Reset
            </button>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-orange-600 h-10 px-4 py-2"
              onClick={handleApplyFilters}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      {!toggleFilters && (
        <div className="flex gap-4 sm:gap-6 max-w-max overflow-x-auto lg:max-w-full">
          <Button variant="ghost" className="text-primary hover:text-primary">
            All
          </Button>
          {/* {console.log("CoachingCategories",allCoaches)} */}
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
