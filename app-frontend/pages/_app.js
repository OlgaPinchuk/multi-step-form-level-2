import { StrictMode } from "react";

import "tailwindcss/tailwind.css";

import FormProvider from "../context/FormContext";
import { Layout } from "../components/ui";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <FormProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FormProvider>
    </StrictMode>
  );
}

export default MyApp;
