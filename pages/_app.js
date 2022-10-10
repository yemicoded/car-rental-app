import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GeneralLayout from "../layouts/general-layout";

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='class'>
          <GeneralLayout>
            <Component {...pageProps} />
          </GeneralLayout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default MyApp;
