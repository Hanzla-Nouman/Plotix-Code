// "use client";
// import React from "react";
// import { toast } from "sonner";
// import { trpc } from "@/trpc/client";
// import {
//   FormWrapper,
//   FormInput,
//   FormFocusAreaSelect,
//   FormTextArea,
//   FormSelect,
//   FormCoachCategoriesSelect,
// } from "@/components/FormElements";
// import { Session } from "next-auth";
// import { z } from "zod";
// import { LanguageOptionsSchema } from "@/TSChema";
// import { useForm } from "react-hook-form";
// import { CoachCategories, languageOptions } from "@/constants/Coach";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@/components/ui/button";
// import { AvatarPicker } from "@/components/AvatarPicker";
// import { Loader2 } from "lucide-react";

// interface EditUserFormProps {
//   currentUser: Session["user"];
// }

// const EditUserFormValidator = z.object({
//   name: z.string().min(3),
//   preferedCurrency: z.string().optional(),
//   preferedLanguages: z.array(LanguageOptionsSchema),
//   focusAreas: z.array(z.string()),
//   preferedCoachCategories: z.array(z.nativeEnum(CoachCategories)),
// });

// type TEditUserFormValidator = z.infer<typeof EditUserFormValidator>;

// export const EditUserForm = ({ currentUser }: EditUserFormProps) => {
//   const { data: user } = trpc.user.get.useQuery({
//     where: { id: currentUser.id },
//     include: {
//       avatar: true,
//       focusAreas: true,
//       coach: true,
//     },
//   });
//   const updateUserMutation = trpc.user.update.useMutation();

//   const queryClient = trpc.useUtils();
//   const form = useForm<TEditUserFormValidator>({
//     resolver: zodResolver(EditUserFormValidator),
//     defaultValues: {
//       name: "",
//       preferedLanguages: [],
//       preferedCurrency: "USD",
//       focusAreas: [],
//       preferedCoachCategories: [],
//     },
//   });

//   React.useEffect(() => {
//     form.reset({
//       name: user?.name || "",
//       preferedCurrency: user?.preferedCurrency || "USD",
//       preferedLanguages: user?.preferedLanguages || [],
//       focusAreas: user?.focusAreas?.map((focusArea) => focusArea.id) || [],
//       preferedCoachCategories:
//         (user?.preferedCoachCategories as CoachCategories[]) || [],
//     });
//   }, [user]);

//   const onSubmit = form.handleSubmit(async (values) => {
//     try {
//       const mappedFocusAreas = values?.focusAreas?.map((focusArea) => ({
//         id: focusArea,
//       }));
//       const mappedCategories = values?.preferedCoachCategories?.map(
//         (category) => ({
//           id: category,
//         })
//       );

//       await updateUserMutation.mutateAsync({
//         id: currentUser.id,
//         ...values,
//         focusAreas: mappedFocusAreas?.length
//           ? { set: mappedFocusAreas }
//           : undefined,
//       });

//       queryClient.user.get.invalidate({
//         where: { id: currentUser.id },
//       });
//       toast.success("User updated");
//     } catch (error) {
//       toast.error("Failed to update user");
//     }
//   });

//   return (
//     <section className="flex gap-4 flex-col lg:flex-row justify-center">
//       {user ? (
//         <AvatarPicker
//           media={user?.avatar}
//           name={user?.name || ""}
//           userId={currentUser.id}
//         />
//       ) : (
//         <Loader2 className="animate-spin h-8 w-8" />
//       )}
//       <div className="w-full max-w-[400px]">
//         <FormWrapper<TEditUserFormValidator> {...form} onSubmit={onSubmit}>
//           <FormInput name="name" required label="Legal Name" />
  
//           <FormSelect
//             name="preferedLanguages"
//             mode="multiple"
//             label="Languages"
//             options={languageOptions}
//           />
//           <FormCoachCategoriesSelect
//             name="preferedCoachCategories"
//             label="Prefered Coaching Categories"
//             mode="multiple"
//           />
//           {user?.coach?.id && (
//             <FormSelect
//               name="preferedCurrency"
//               mode="single"
//               label="Currency"
//               options={[
//                 { label: "USD", value: "USD" },
//                 { label: "EUR", value: "EUR" },
//                 { label: "GBP", value: "GBP" },
//               ]}
//             />
//           )}
//           <FormFocusAreaSelect
//             name="focusAreas"
//             mode="multiple"
//             label="Focus Areas"
//           />

//           <Button
//             disabled={!form.formState.isDirty}
//             isLoading={updateUserMutation.isLoading}
//             type="submit"
//           >
//             Save
//           </Button>
//         </FormWrapper>
//       </div>
//     </section>
//   );
// };
"use client"
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { trpc } from "@/trpc/client";
import { CoachCategories, languageOptions,location } from "@/constants/Coach";
import { Button } from "@/components/ui/button";
import { AvatarPicker } from "@/components/AvatarPicker";
import { Loader2 } from "lucide-react";
import { Session } from "next-auth";
import {
  FormWrapper,
  FormInput,
  FormFocusAreaSelect,
  FormTextArea,
  FormSelect,
  FormCoachCategoriesSelect,
} from "@/components/FormElements";
import { z } from "zod";
import { CoachAggregateArgsSchema, LanguageOptionsSchema } from "@/TSChema";

interface EditUserFormProps {
  currentUser: Session["user"];
}

const EditUserFormValidator = z.object({
  name: z.string().min(3),
  aboutMe: z.string().optional(),
  hourlyRate: z.number().optional(),
  preferedCurrency: z.string().optional(),
  location: z.string().optional(),
  preferedLanguages: z.array(LanguageOptionsSchema),
  focusAreas: z.array(z.string()),
  preferedCoachCategories: z.array(z.nativeEnum(CoachCategories)),
});

type TEditUserFormValidator = z.infer<typeof EditUserFormValidator>;

export const EditUserForm = ({ currentUser }: EditUserFormProps) => {
  const { data: user } = trpc.user.get.useQuery({
    where: { id: currentUser.id },
    include: {
      avatar: true,
      focusAreas: true,
      coach: true,
    },
  });
  const updateUserMutation = trpc.user.update.useMutation();
  const queryClient = trpc.useUtils();

  const form = useForm<TEditUserFormValidator>({
    resolver: zodResolver(EditUserFormValidator),
    defaultValues: {
      name: "",
      aboutMe: "",
      preferedLanguages: [],
      preferedCurrency: "USD",
      focusAreas: [],
      location: "USA",
      preferedCoachCategories: [],
      hourlyRate: 0, // Default value for hourlyRate
    },
  });

  useEffect(() => {
    form.reset({
      name: user?.name || "",
      aboutMe: user?.coach?.aboutMe || "",
      preferedCurrency: user?.preferedCurrency || "USD",
      location: user?.coach?. location || "USA",
      preferedLanguages: user?.preferedLanguages || [],
      hourlyRate: user?.coach?.hourlyRate || 0, 
      focusAreas: user?.focusAreas?.map((focusArea) => focusArea.id) || [],
      preferedCoachCategories:
        (user?.preferedCoachCategories as CoachCategories[]) || [],
    });
  }, [user]);

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      const mappedFocusAreas = values?.focusAreas?.map((focusArea) => ({
        id: focusArea,
      }));
      const mappedCategories = values?.preferedCoachCategories?.map(
        (category) => ({
          id: category,
        })
      );

      await updateUserMutation.mutateAsync({
        id: currentUser.id,
        ...values,
        focusAreas: mappedFocusAreas?.length
          ? { set: mappedFocusAreas }
          : undefined,
      });

      queryClient.user.get.invalidate({
        where: { id: currentUser.id },
      });
      toast.success("User updated");
    } catch (error) {
      toast.error("Failed to update user");
    }
  });
console.log("here is user on form",user)
  return (
    <section className="flex gap-4 flex-col lg:flex-row justify-center">
      {user ? ( 
        <AvatarPicker
          media={user?.avatar}
          name={user?.name || ""}
          userId={currentUser.id}
        />
      ) : (
        <Loader2 className="animate-spin h-8 w-8" />
      )}
      <div className="w-full max-w-[400px]">
        <FormWrapper<TEditUserFormValidator> {...form} onSubmit={onSubmit}>
          <FormInput name="name" required label="Legal Name" />
          <FormInput name="aboutMe" label="About Me" />
          <FormInput name="hourlyRate" label="Hourly Rate" type="number" min={0} />

          <FormSelect
            name="preferedLanguages"
            mode="multiple"
            label="Languages"
            options={languageOptions}
          />
          <FormSelect
            name="location"
            mode="single"
            label="Location"
            options={location}
          />
          <FormCoachCategoriesSelect
            name="preferedCoachCategories"
            label="Preferred Coaching Categories"
            mode="multiple"
          />
          {user?.coach?.id && (
            <FormSelect
              name="preferedCurrency"
              mode="single"
              label="Currency"
              options={[
                { label: "USD", value: "USD" },
                { label: "EUR", value: "EUR" },
                { label: "GBP", value: "GBP" },
              ]}
            />
          )}
          <FormFocusAreaSelect
            name="focusAreas"
            mode="multiple"
            label="Focus Areas"
          />

          <Button
            disabled={!form.formState.isDirty}
            isLoading={updateUserMutation.isLoading}
            type="submit"
            className="w-full"
          >
            Save
          </Button>
        </FormWrapper>
      </div>
    </section>
  );
};
