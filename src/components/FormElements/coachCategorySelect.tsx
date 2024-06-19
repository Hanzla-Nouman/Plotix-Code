"use client";

import { useState, useEffect } from "react";
import {
  ComboboxOption,
  ComboboxExternalProps,
} from "@/components/ui/combobox";
import { trpc } from "@/trpc/client";
import FormSelect from "./select";
import { CoachCategories } from "@/constants/Coach";

interface TFormCoachCategoriesSelectProps
  extends Omit<ComboboxExternalProps, "options"> {
  name: string;
  label: string;
  className?: string;
}

const FormCoachCategoriesSelect = (props: TFormCoachCategoriesSelectProps) => {
  const { name, label, className, ...comboboxProps } = props;
  // const { data, isLoading } = trpc.category.getCategoriesList.useQuery({});
  // const [CoachCategoriesOptions, setCoachCategoriesOptions] = useState<
  //   ComboboxOption[]
  // >([]);

  // useEffect(() => {
  //   setCoachCategoriesOptions(
  //     data?.map((category) => ({
  //       value: category.id,
  //       label: category.name,
  //     })) || []
  //   );
  // }, [data]);

  const CoachCategoriesOptions = Object.values(CoachCategories).map(
    (category) =>
      ({
        value: category.valueOf(),
        label: category.valueOf(),
      } as ComboboxOption)
  );

  return (
    <FormSelect
      name={name}
      label={label}
      // isLoading={isLoading}
      className={className}
      options={CoachCategoriesOptions}
      {...comboboxProps}
    />
  );
};

export default FormCoachCategoriesSelect;
