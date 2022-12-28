import { useRouter } from "next/router";

import { Button } from "./Button";

export const FormNavigation = ({ isFirstStep = false, isLastStep = false }) => {
  const router = useRouter();
  const prevStep = () => router.back();

  return (
    <div className="flex items-center justify-end mt-4">
      {!isFirstStep && (
        <Button id="back" onClick={prevStep}>
          Back
        </Button>
      )}
      {!isLastStep && (
        <Button id="submit" type="submit">
          Next
        </Button>
      )}
    </div>
  );
};
