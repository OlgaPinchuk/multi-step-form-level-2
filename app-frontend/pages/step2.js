import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormInput, FormNavigation } from "../components/ui";
import { useFormData } from "../context/FormContext";
import { userContactsValidationSchema } from "../validation/schema";

export default function UserContact() {
  const { data, setFormValues } = useFormData();
  const router = useRouter();
  const dataKey = "userData";

  const UserContactFormConfig = {
    defaultValues: {
      phone: data[dataKey]?.phone,
      email: data[dataKey]?.email,
    },
    mode: "onBlur",
    resolver: yupResolver(userContactsValidationSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(UserContactFormConfig);

  const nextStep = "step3";
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
        Step 2
      </h2>
      <FormInput
        id="phone"
        label="Phone"
        type="tel"
        register={register}
        required
        autoComplete="on"
        errors={errors}
      />
      <FormInput
        id="email"
        label="Email"
        type="email"
        register={register}
        required
        autoComplete="on"
        errors={errors}
      />
      <FormNavigation />
    </form>
  );
}
