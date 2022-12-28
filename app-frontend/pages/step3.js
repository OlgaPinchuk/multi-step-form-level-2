import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormInput, FormNavigation } from "../components/ui";
import { useFormData } from "../context/FormContext";
import { orderDetailsValidationSchema } from "../validation/schema";

export default function OrderDetails() {
  const { data, setFormValues } = useFormData();
  const router = useRouter();
  const dataKey = "orderData";

  const orderDetailsFormConfig = {
    defaultValues: {
      seat: data[dataKey]?.seat,
      food: data[dataKey]?.food,
      allergies: data[dataKey]?.allergies,
    },
    mode: "onBlur",
    resolver: yupResolver(orderDetailsValidationSchema),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(orderDetailsFormConfig);

  const nextStep = "result";

  const onSubmit = (data) => {
    setFormValues(dataKey, data);
    router.push(`/${nextStep}`);
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <h2
        className="mb-6 text-2xl sm:text-3xl font-bold dark:text-slate-200"
        data-testid="title"
      >
        Step 3
      </h2>
      <FormInput
        id="seat"
        label="Seat"
        register={register}
        required
        autoComplete="on"
        errors={errors}
      />
      <FormInput
        id="food"
        label="Food"
        register={register}
        required
        autoComplete="on"
        errors={errors}
      />
      <FormInput
        id="allergies"
        label="Allergies"
        register={register}
        required
        autoComplete="on"
        errors={errors}
      />
      <FormNavigation />
    </form>
  );
}
