"use client";

// CoachListing.tsx
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CoachWithRelations } from "@/TSChema";
import truncateText from "@/helpers/truncateText";
import { CoachCategories } from "@/constants/Coach";

interface CoachListingProps {
  coach: (CoachWithRelations & { categoryName: string }) | null;
  index: number;
  className?: string;
}

const CoachListing: React.FC<CoachListingProps> = ({
  coach,
  index,
  className,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Reverse the order of rendering coach
  const reversedIndex = 1 - index; // Assuming you have a fixed number of coach (5 in this case)

  // Show coach card in order of index (loading up)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, reversedIndex * 75);

    return () => clearTimeout(timer);
  }, [reversedIndex]);

  if (!coach || !isVisible) return <CoachPlaceholder className={className} />;

  const validUrls = coach?.user?.avatar ? [coach.user.avatar.url] : [];

  // const CategoryIcon = getCategoryIcon(
  //   coach?.categories[0]?.name as CoachCategoryName
  // );
const CoachCategories = coach.coachingCategories.map(i=>i)

  return (
    <Link
      className={cn(
        "invisible h-full w-full cursor-pointer group/main",
        className,
        {
          "visible animate-in fade-in-5": isVisible,
        }
      )}
      href={`/Coaches/${coach.id}`}
    >
      <div className="p-4 space-y-2 border rounded-xl shadow-lg h-full flex flex-col justify-between relative">
        {/* Free Intro Badge */}
        {coach.freeIntroductionOption && (
          <Badge
            variant="outline"
            className="absolute top-2 left-2 bg-green-200 text-green-700 text-center py-1"
          >
            Free Intro
          </Badge>
        )}

        <div className="flex justify-center">
          {validUrls.length > 0 ? (
            <img
              src={validUrls[0]}
              alt={coach.name}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <Skeleton className="h-16 w-16 rounded-full" />
          )}
        </div>

        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-lg font-bold">{coach.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {coach.location || "Location not specified"}
            </p>
          </div>

{CoachCategories.map(c => <Badge
              variant="outline"
              className="border-orange-700 text-orange-700"
            >
              {c}
            </Badge> )}
          {coach.categoryName && (
            <Badge
              variant="outline"
              className="border-orange-700 text-orange-700"
            >
              {coach.categoryName}
            </Badge>
          )}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {truncateText(coach.aboutMe || "No description available", 11)}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {coach.focusAreas &&
            coach.focusAreas.slice(0, 4).map((focusArea) => (
              <div
                key={`${coach.id}_${focusArea.id}`}
                className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800"
              >
                {focusArea.name}
              </div>
            ))}
        </div>

        <button className="w-full px-4 py-3 text-base bg-black text-white rounded-md mt-2">
          Work with {coach.name.split(" ")[0]}
        </button>
      </div>
    </Link>
  );
};

type Props = { className?: string };

const CoachPlaceholder: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex flex-col max-h-full h-full w-[316px] mx-auto mb-8 ${className}`}
    >
      {/* Card container without border */}
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  );
};

export default CoachListing;
