import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/global_style'
import { store } from '../feature/store'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'
import { Amplify, Auth } from 'aws-amplify'
import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)
Auth.configure(awsconfig)

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
  )
}
