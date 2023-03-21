import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global_style";
import { store } from "../feature/store";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Provider store={store}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Provider>
      </RecoilRoot>
    </>
  );
}
