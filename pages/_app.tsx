import '../styles/globals.css'
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
