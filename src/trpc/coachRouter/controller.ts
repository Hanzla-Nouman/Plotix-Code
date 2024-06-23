import { prisma } from "@/prisma";
import {
  TGetInfiniteCoachesInputValidator,
  TCoachUpdateArgsSchema,
  TUpdateCoachFAQsInputValidator,
  TCoachFindUniqueArgsSchema,
  TCoachListInputValidator,
} from "./schema";
import { CoachWithRelations } from "@/TSChema";

export const getInfiniteCoaches = async ({
  input,
}: {
  input: TGetInfiniteCoachesInputValidator;
}) => {
  const { query = {}, cursor, sort, take = 15 } = input;
  const cursorOpt = cursor ? { id: cursor } : undefined;
  const coaches = await prisma.coach.findMany({
    where: {
      approvedForSale: "approved" as const,
      ...query,
    },
    orderBy: {
      createdAt: sort,
    },
    include: {
      focusAreas: true,
      workHistory: true,
      user: {
        include: {
          avatar: true,
        },
      },
    },
    take,
    cursor: cursorOpt,
  });

  let nextCursor: typeof cursor | undefined = undefined;
  if (coaches.length > take) {
    const nextItem = coaches.pop();
    nextCursor = nextItem!.id;
  }

  return {
    items: coaches,
    nextCursor,
  };
};

export const updateCoach = async ({
  input,
}: {
  input: TCoachUpdateArgsSchema;
}) => {
  console.log("I am input",input)
  console.log("I am input",input.data.focusAreas)
  const updatedCoach = await prisma.coach.update(input);

  return {
    coach: updatedCoach,
  };
};

export const updateCoachFAQs = async ({
  input,
}: {
  input: TUpdateCoachFAQsInputValidator;
}) => {
  const { coachId, coachFAQs } = input;
  const existingFAQs = await prisma.coachFAQ.findMany({
    where: { coachId },
  });

  const existingFAQIds = new Set(existingFAQs.map((faq) => faq.id));
  const updatedFAQIds = new Set(
    coachFAQs.filter((faq) => faq.id).map((faq) => faq.id)
  );

  const toDelete = existingFAQs.filter((faq) => !updatedFAQIds.has(faq.id));
  const toCreate = coachFAQs.filter((faq) => !faq.id);
  const toUpdate = coachFAQs.filter(
    (faq) => faq.id && existingFAQIds.has(faq.id)
  );

  await prisma.$transaction([
    ...toDelete.map((faq) =>
      prisma.coachFAQ.delete({
        where: { id: faq.id },
      })
    ),
    ...toCreate.map((faq) =>
      prisma.coachFAQ.create({
        data: {
          question: faq.question,
          answer: faq.answer,
          order: faq.order,
          coachId: coachId,
        },
      })
    ),
    ...toUpdate.map((faq) =>
      prisma.coachFAQ.update({
        where: { id: faq.id },
        data: {
          question: faq.question,
          answer: faq.answer,
          order: faq.order,
        },
      })
    ),
  ]);
};

export const getCoach = async ({
  input,
}: {
  input: TCoachFindUniqueArgsSchema;
}) => {
  const coach = await prisma.coach.findUnique(input);

  return coach as CoachWithRelations;
};

export const getCoachList = async ({
  input,
}: {
  input: TCoachListInputValidator;
}) => {
  const { categories, take } = input;

  const promises = categories.map(async (category) => {
    const coaches = await prisma.coach.findMany({
      where: {
        approvedForSale: "approved" as const,
        coachingCategories: {
          has: category,
        },
      },
      take,
      include: {
        focusAreas: true,
        workHistory: true,
      },
    });

    // Add category name to each coach
    return coaches.map((coach) => ({
      ...coach,
      categoryName: category,
    }));
  });

  const results = await Promise.all(promises);

  return results;
};
