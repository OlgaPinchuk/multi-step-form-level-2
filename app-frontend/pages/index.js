import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { userInfoValidationSchema } from "../validation/schema";
import { FormInput, FormNavigation } from "./../components/ui";
import { useFormData } from "../context/FormContext";

export default function UserInfo() {
  const { data, setFormValues } = useFormData();
  const router = useRouter();
  const dataKey = "userData";

  const userInfoFormConfig = {
    defaultValues: {
      firstName: data[dataKey]?.firstName,
      lastName: data[dataKey]?.lastName,
      age: data[dataKey]?.age,
    },
    mode: "onBlur",
    resolver: yupResolver(userInfoValidationSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(userInfoFormConfig);

  const nextStep = "step2";

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
        Step 1
      </h2>
      <FormInput
        id="firstName"
        label="First name"
        register={register}
        required
        autoComplete="on"
        errors={errors}
      />
      <FormInput
        id="lastName"
        label="Last name"
        register={register}
        autoComplete="on"
        required
        errors={errors}
      />
      <FormInput
        id="age"
        label="Age"
        type="number"
        register={register}
        required
        autoComplete="on"
        errors={errors}
      />
      <FormNavigation isFirstStep={true} />
    </form>
  );
}
