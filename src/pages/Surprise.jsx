import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Surprise() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="surprise-page">

      <AnimatePresence mode="wait">

        {!opened ? (
          <motion.div
            key="closed"
            className="gift-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.7 }}
          >

            <p className="gift-label">
              One more thing...
            </p>

            <h1>
              I made a little something
              <br />
              for your journey. ✨
            </h1>

            <motion.div
              className="gift-box"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="gift-lid"></div>
              <div className="gift-body"></div>
              <div className="gift-ribbon vertical"></div>
              <div className="gift-ribbon horizontal"></div>
            </motion.div>

            <motion.button
              className="open-gift-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(true)}
            >
              Open your gift 🎁
            </motion.button>

            <p className="gift-hint">
              I hope this one is useful too. ♡
            </p>

          </motion.div>

        ) : (

          <motion.div
            key="opened"
            className="gift-opened"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.3,
            }}
          >

            <div className="gift-sparkles">
              ✨ ✨ ✨
            </div>

            <h1>
              Your GATE Kit 📚
            </h1>

            <p>
              A little something to help you
              <br />
              with the journey ahead.
            </p>

            <div className="gift-cards">

              {/* =========================
                  NOTES PDF
              ========================= */}

              <motion.a
                href="/resources/gate-notes.pdf"
                download="GATE-Notes.pdf"
                className="gift-resource-card pdf-card notes-pdf-card"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >

                <div className="resource-icon">
                  📖
                </div>

                <p className="pdf-label">
                  YOUR STUDY KIT
                </p>

                <h2>
                  GATE Notes
                </h2>

                <p>
                  13 subjects, collected into
                  one little study kit.
                </p>

                <div className="pdf-download">
                  <span>
                    Download PDF
                  </span>

                  <span>
                    ↓
                  </span>
                </div>

              </motion.a>


              {/* =========================
                  LECTURES PDF
              ========================= */}

              <motion.a
                href="/resources/gate-lectures.pdf"
                download="GATE-Lectures.pdf"
                className="gift-resource-card pdf-card lectures-pdf-card"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >

                <div className="resource-icon">
                  🎥
                </div>

                <p className="pdf-label">
                  YOUR LECTURE KIT
                </p>

                <h2>
                  GATE Lectures
                </h2>

                <p>
                  Your lecture collection,
                  all in one place.
                </p>

                <div className="pdf-download">
                  <span>
                    Download PDF
                  </span>

                  <span>
                    ↓
                  </span>
                </div>

              </motion.a>

            </div>


            <button
              className="resource-hub-button"
              onClick={() => navigate("/resources")}
            >
              Explore your study corner →
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}

export default Surprise;