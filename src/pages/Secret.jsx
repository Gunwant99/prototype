
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Secret() {
  const navigate = useNavigate();

  return (
    <div className="secret-page">
      {/* Background effects */}
      <div className="secret-background-glow glow-a" />
      <div className="secret-background-glow glow-b" />

      <div className="secret-stars">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.span
            key={index}
            className="secret-star"
            initial={{ opacity: 0.2, scale: 0.7 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.7, 1.1, 0.7],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* Main secret message */}
      <motion.main
        className="secret-content"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="secret-heart"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💗
        </motion.div>

        <motion.p
          className="secret-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A LITTLE SECRET MESSAGE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Happiest Birthday,
          <br />
          <span>Prayukta! 🎂💗</span>
        </motion.h1>

        <motion.p
          className="secret-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          One last little wish, just for you... ✨
        </motion.p>

        <motion.div
          className="secret-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        />

        <motion.div
          className="secret-letter-placeholder"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p>Happy Birthday, Prayukta! 🥳🎉</p>

          <p>
            May all your wishes come true.
            Keep smiling always and stay happy! 🌸✨
          </p>

          <p>
            Here's to a beautiful year ahead,
            filled with happiness and countless reasons to smile. 💖
          </p>
        </motion.div>

        {/* Floating hearts */}
        <div className="secret-floating-hearts">
          {["💗", "💕", "♡", "✨", "💖"].map((heart, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2 + index * 0.3,
                repeat: Infinity,
                delay: index * 0.25,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </div>

        <motion.button
          className="secret-back-button"
          onClick={() => navigate("/resources")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ← Back to your study corner
        </motion.button>
      </motion.main>
    </div>
  );
}
