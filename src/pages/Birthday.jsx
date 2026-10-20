import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Birthday() {
  const [clicks, setClicks] = useState(0);
  const [celebrated, setCelebrated] = useState(false);
  const navigate = useNavigate();

  const handleBirthdayClick = () => {
    if (clicks >= 5) return;

    const nextClick = clicks + 1;
    setClicks(nextClick);

    if (nextClick === 5) {
      setTimeout(() => {
        setCelebrated(true);

        confetti({
          particleCount: 220,
          spread: 120,
          startVelocity: 35,
          origin: {
            x: 0.5,
            y: 0.65,
          },
        });

        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: {
              x: 0.15,
              y: 0.55,
            },
          });

          confetti({
            particleCount: 100,
            spread: 80,
            origin: {
              x: 0.85,
              y: 0.55,
            },
          });
        }, 350);
      }, 700);
    }
  };

  const getButtonText = () => {
    if (clicks === 0) return "Make a wish";
    if (clicks === 1) return "Another one ✨";
    if (clicks === 2) return "Keep going 💗";
    if (clicks === 3) return "Almost there...";
    return "One last wish ✨";
  };

  return (
    <main className="birthday-page">

      {/* Floating background decorations */}
      <div className="birthday-floating birthday-float-one">
        ♡
      </div>

      <div className="birthday-floating birthday-float-two">
        ✦
      </div>

      <div className="birthday-floating birthday-float-three">
        ♡
      </div>

      <div className="birthday-floating birthday-float-four">
        ✧
      </div>

      <div className="birthday-glow birthday-glow-one"></div>
      <div className="birthday-glow birthday-glow-two"></div>

      <AnimatePresence mode="wait">

        {!celebrated ? (

          <motion.div
            key="before"
            className="birthday-content"
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.88,
              y: -20,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <motion.p
              className="birthday-small-text"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
            >
              Okay... now there's a little task for you 👀
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
            >
              Make a little
              <br />
              <span>wish ✨</span>
            </motion.h1>

            <motion.p
              className="birthday-subtitle"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.65,
                duration: 0.8,
              }}
            >
              Five little wishes.
              <br />
              One very special birthday. 💗
            </motion.p>

            {/* Cake */}
            <motion.div
              className={`cake-area ${
                clicks > 0 ? "cake-active" : ""
              }`}
              animate={{
                scale: clicks > 0 ? 1.02 : 1,
              }}
              transition={{
                duration: 0.5,
              }}
            >

              <div className="cake-shadow"></div>

              <div className="cake">

                {/* Candles */}
                <div className="candles">

                  {[1, 2, 3, 4, 5].map((candle) => (

                    <motion.div
                      key={candle}
                      className="candle"
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity:
                          clicks >= candle ? 1 : 0,
                        y:
                          clicks >= candle ? 0 : 20,
                      }}
                      transition={{
                        duration: 0.45,
                        type: "spring",
                        bounce: 0.35,
                      }}
                    >

                      {clicks >= candle && (

                        <motion.span
                          className="flame"
                          initial={{
                            opacity: 0,
                            scale: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            scale: [0, 1.15, 0.95, 1],
                            y: 0,
                          }}
                          transition={{
                            duration: 0.65,
                          }}
                        >
                          🔥
                        </motion.span>

                      )}

                      <div className="candle-stick"></div>

                    </motion.div>

                  ))}

                </div>

                <div className="cake-top">
                  <div className="cake-drip drip-one"></div>
                  <div className="cake-drip drip-two"></div>
                  <div className="cake-drip drip-three"></div>
                </div>

                <div className="cake-middle"></div>

                <div className="cake-bottom">
                  <div className="cake-decoration">
                    ♡　♡　♡
                  </div>
                </div>

              </div>

            </motion.div>

            {/* Progress */}
            <div className="wish-progress">

              {[1, 2, 3, 4, 5].map((number) => (

                <motion.div
                  key={number}
                  className={`wish-dot ${
                    clicks >= number
                      ? "wish-dot-active"
                      : ""
                  }`}
                  animate={
                    clicks >= number
                      ? {
                          scale: [1, 1.3, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.4,
                  }}
                />

              ))}

            </div>

            <motion.p
              className="click-count"
              key={clicks}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >
              {clicks} / 5 wishes
            </motion.p>

            {/* Main button */}
            <motion.button
              className="birthday-button"
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.94,
              }}
              onClick={handleBirthdayClick}
              animate={
                clicks > 0
                  ? {
                      boxShadow: [
                        "0 8px 30px rgba(194, 129, 177, 0.20)",
                        "0 8px 40px rgba(194, 129, 177, 0.38)",
                        "0 8px 30px rgba(194, 129, 177, 0.20)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span>
                {getButtonText()}
              </span>

              <span className="birthday-button-arrow">
                →
              </span>
            </motion.button>

            <motion.p
              className="birthday-hint"
              key={clicks}
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              {clicks === 0
                ? "Something magical happens at the end..."
                : clicks < 5
                ? "Keep making your wishes... ✨"
                : ""}
            </motion.p>

          </motion.div>

        ) : (

          /* Celebration */
          <motion.div
            key="celebration"
            className="celebration-content"
            initial={{
              opacity: 0,
              scale: 0.65,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.1,
              type: "spring",
              bounce: 0.38,
            }}
          >

            <motion.div
              className="celebration-stars"
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
            >
              ✨　💗　✨
            </motion.div>

            <motion.div
              className="big-cake"
              animate={{
                y: [0, -14, 0],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🎂
            </motion.div>

            <motion.div
              className="celebration-glow"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <motion.p
              className="celebration-top-text"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
            >
              Every wish has been made...
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.8,
              }}
            >
              Happy Birthday, Prayukta! 🎉
            </motion.h1>

            <motion.p
              className="celebration-message"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
            >
May all your wishes come true. 💖
<br />
Keep smiling always! 🌸✨   
            </motion.p>

            <motion.div
              className="celebration-hearts"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              💗　✨　💗　✨　💗
            </motion.div>

            <motion.button
              className="continue-button"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.7,
              }}
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => navigate("/letter")}
            >
              Continue to your letter
              <span>→</span>
            </motion.button>

          </motion.div>

        )}

      </AnimatePresence>
    </main>
  );
}

export default Birthday;