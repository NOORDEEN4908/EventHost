
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventCard from './components/EventCard'
import TopReasons from './components/TopReasons'
import Speakers from './components/Speakers'
import Timeline from './components/Timeline'
import AboutEvent from './components/AboutEvent'
import About from './components/About'
import Register from './components/Register'
import Footer from './components/Footer'

const App = () => {



  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Navbar />
      <div id="home">
      <Hero />
      </div>
<div id="event">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.2 }}>
        <EventCard />
      </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true, amount: 0.2 }}>
        <TopReasons />
      </motion.div>
<div id="#agenda">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}>
        <AboutEvent />
      </motion.div>
      </div>
<div id="speakers">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true, amount: 0.2 }}>
        <Speakers />
      </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true, amount: 0.2 }}>
        <Timeline />
      </motion.div>
<div id="about">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} viewport={{ once: true, amount: 0.2 }}>
        <About />
      </motion.div>
</div>
 <div id="register">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <Register />
  </motion.div>
</div>

<div id="Contact">
      <Footer />
      </div>
    </motion.div>
  )
}

export default App
