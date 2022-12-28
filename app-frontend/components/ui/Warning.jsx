import { useRouter } from "next/router";

import { Button } from "./Button";

export const Warning = () => {
  const router = useRouter();

  return (
    <div class="text-center text-gray-800 py-20 px-6">
      <h3 class="text-3xl font-bold mb-10">Please fill in the form</h3>
      <Button onClick={() => router.push("/")}>Back to the form</Button>
    </div>
  );
};
