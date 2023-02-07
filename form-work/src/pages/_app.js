import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import {motion as m} from 'framer-motion';

export default function App({ Component, pageProps, router }) {

  return(
    <m.div
    initial={{
      y: 500,
      opacity: 0,
      scale: 0.5
      }}
      animate={{
      y: 0,
      opacity: 1,
      scale: 1
      }}
      transition={{
      duration: 2
      }}
    >
    <AnimatePresence>
    <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
    </m.div>
  )
}
