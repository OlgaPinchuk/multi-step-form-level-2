import { useFormData } from "../context/FormContext";
import { FormNavigation, ResultList, Warning } from "../components/ui";

export default function Result() {
  const { data } = useFormData();

  if (Object.keys(data).length === 0) {
    return <Warning />;
  }

  const { firstName, lastName, age, phone, email } = data?.userData;
  const { seat, food, allergies } = data?.orderData;

  const userInfo = [
    { label: "First name", testId: "firstName", value: firstName },
    { label: "Last name", testId: "lastName", value: lastName },
    { label: "Age", testId: "age", value: age },
    { label: "Phone", testId: "phone", value: phone },
    { label: "Email", testId: "email", value: email },
  ];

  const orderInfo = [
    { label: "Seat", testId: "seat", value: seat },
    { label: "Food", testId: "food", value: food },
    { label: "Allergies", testId: "allergies", value: allergies },
  ];

  return (
    <>
      <ResultList items={userInfo} title="User Information" />
      <ResultList items={orderInfo} title="Order Information" />
      <FormNavigation isLastStep={true} />
    </>
  );
}
