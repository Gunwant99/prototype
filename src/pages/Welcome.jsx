import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="welcome-page">
      {/* Background decorations */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="floating-heart heart-one">♡</div>
      <div className="floating-heart heart-two">♡</div>
      <div className="floating-heart heart-three">♡</div>

      {/* Main content */}
      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="tiny-line"
          initial={{ width: 0 }}
          animate={{ width: 70 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.p
          className="little-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          A little something made just for you
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Happiest Birthday,
          <br />
          Prayukta! 🩷
        </motion.h1>

        <motion.p
          className="welcome-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          A little surprise made especially for you. ✨
        </motion.p>

        <motion.button
          className="enter-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/birthday")}
        >
          Enter
          <span>→</span>
        </motion.button>

        <motion.p
          className="bottom-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          Made with lots of care, just for you ♡
        </motion.p>
      </motion.div>
    </main>
  );
}

export default Welcome;