import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Letter() {
  const navigate = useNavigate();

  return (
    <main className="letter-page">
      <motion.div
        className="letter-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="letter-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
        >
          💌
        </motion.div>

        <p className="letter-label">
          A little letter for you
        </p>

        <div className="letter-card">
          <h1>Dear Prayukta, 💗</h1>

          <div className="letter-text">
            <p>
              Happiest Birthday Prayukta🎂💗🥳🥳🥳🥳✨✨✨✨
              <br />
              Many, many happy returns of the day! 🥳🌷✨
            </p>

            <p>
              Sabse pehle toh I wish tere sabhi din bahut saari khushiyon,
              smiles, laughter aur beautiful moments se bhara ho. May your
              day be as wonderful as you deserve, aur tujhe hamesha bohot
              saari happiness aur reason to smile milein.l🫶🏻✨✨💯💯💯💯😊😊
            </p>

            <p>
              Meri wish hai ki tumhari life ke aane wale sabhi year bahut
              ache ho bohot beautiful ho, tujhe new opportunities milein,
              tere sabhi dreams poore ho, tu bohot hardwaroking hai tujhe
              life main voh sab achieve karegi jo tujhe chahiye pakka💯💯💯💯✨✨
              Life mein kabhi things easy hongi aur kabhi difficult, but tu
              hamesha khud par believe karna tu har problem ko solve karegi
              and success milegi✨✨✨💯💯💯💯🌸
            </p>

            <p>
              And tujhe sabhi future goals ke liye aur Gate ke liye bhi all
              the very very best💯💯💯💯 📚💫 I hope teri mehnat ache results
              mein convert ho aur tujhe apne dreams pure ho. Bas padhai aur
              responsibilities ke beech apne liye time nikalna, relax karna
              rest karna health ka dhyan rakhna. I hope tumhari life mein
              happiness sirf special days par nahi, balki sabhi days mein
              bhi bani rahe💯💯🥳😊 💗
            </p>

            <p>
              And thank youuuu so muchhhh yaar thank you thank youuu meri
              hamesha help karne ke liye tu hi hamesha meri bohot help karti
              hai hamesha support karti hai care karti hai jab bhi mujhe
              kuch problem aata hai tu hamesha mujhe solve karne mai help
              karti hai thank you so much always for everything😊💯💯✨✨✨✨❤️
              And agar kabhi mere se kuch bhi galti hui ho ya kuch bhi jane
              anjane mai galti hua ho toh uske liye sach mai sach mai dil se
              sorry yaar and thank you hamesha support karne ke liye mai
              bohot thankful sach mai hu mujhe teri jaisi dost mili sach mai tu
              bohot achi hai✨✨💯💯💯😊🌸❤️ all the very best for everything💯💯
            </p>

            <p>
              Maine tere liye ek chhota sa birthday gift banaya hai ye
              perfect toh nahi hai but ye tere preparation mai pakka help
              karega It's my little effort to make your special day a bit
              different and meaningful I hope tujhe ye pakka pasand aayega
              🎁✨✨💯💯💯💯
            </p>

            <p>
              Aur ek baat tujhe kabhi bhi kuch bhi kisi bhi time pe kuch bhi
              lage toh mai hamesha tere help ke liye available rahuga anytime
              kuch bhi ho batana kabhi tension mat lena hamesha smile karte
              rahna hamesha happy rahna sab acha hoga pakka💯💯💯💯
            </p>

            <p className="letter-ending">
              Once again, happiest birthday, Prayukta! 🥳💯💯✨💖 all the
              very best may this new chapter bring you happiness, success,
              beautiful memories, wonderful opportunities, aur countless
              reasons to smile. Keep believing in yourself, keep growing,
              and keep shining. Stay happy, stay blessed, and have an amazing
              year ahead🌸✨✨✨💯💯🥳🥳✨🎉🎉
            </p>
          </div>


        </div>

        <motion.button
          className="surprise-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/surprise")}
        >
          There's something waiting for you
          <span>→</span>
        </motion.button>
      </motion.div>
    </main>
  );
}

export default Letter;