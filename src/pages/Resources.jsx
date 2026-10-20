import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { gateResources } from "../data/resources";
import "../App.css";

/* =========================================================
   RESOURCE DETAIL
   ========================================================= */

function ResourceDetail({
  resource,
  onBack,
  breadcrumb,
}) {
  return (
    <motion.div
      className="resource-detail-container"
      initial={{
        opacity: 0,
        x: 35,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -25,
      }}
      transition={{
        duration: 0.45,
      }}
    >
      <div className="resource-breadcrumb">
        <span>GATE Study Hub</span>
        <b>›</b>

        {breadcrumb && (
          <>
            <span>{breadcrumb}</span>
            <b>›</b>
          </>
        )}

        <strong>{resource.name}</strong>
      </div>

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="detail-header">
        <motion.div
          className="detail-icon"
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {resource.icon}
        </motion.div>

        <p>Your resources</p>

        <h1>{resource.name}</h1>

        <span>
          Choose what you want to open ✨
        </span>
      </div>

      <div className="resource-choice-grid">

        {/* NOTES */}

        <motion.div
          className={`resource-choice-card notes-card ${
            !resource.notes
              ? "unavailable"
              : ""
          }`}
          whileHover={
            resource.notes
              ? {
                  y: -8,
                  scale: 1.02,
                }
              : {}
          }
        >
          <div className="choice-icon">
            📖
          </div>

          <p className="choice-type">
            STUDY MATERIAL
          </p>

          <h2>GATE Notes</h2>

          <p className="choice-description">
            Notes and study material collected
            for your preparation.
          </p>

          {resource.notes ? (
            <a
              href={resource.notes}
              target="_blank"
              rel="noopener noreferrer"
              className="open-resource-button notes-button"
            >
              Open Notes
              <span>↗</span>
            </a>
          ) : (
            <button
              className="open-resource-button disabled-button"
              disabled
            >
              Coming soon
            </button>
          )}
        </motion.div>

        {/* LECTURES */}

        <motion.div
          className={`resource-choice-card lectures-card ${
            !resource.lectures
              ? "unavailable"
              : ""
          }`}
          whileHover={
            resource.lectures
              ? {
                  y: -8,
                  scale: 1.02,
                }
              : {}
          }
        >
          <div className="choice-icon">
            🎥
          </div>

          <p className="choice-type">
            VIDEO MATERIAL
          </p>

          <h2>GATE Lectures</h2>

          <p className="choice-description">
            Your lectures collected in one
            convenient place.
          </p>

          {resource.lectures ? (
            <a
              href={resource.lectures}
              target="_blank"
              rel="noopener noreferrer"
              className="open-resource-button lectures-button"
            >
              Open Lectures
              <span>↗</span>
            </a>
          ) : (
            <button
              className="open-resource-button disabled-button"
              disabled
            >
              Coming soon
            </button>
          )}
        </motion.div>

      </div>
    </motion.div>
  );
}

/* =========================================================
   CATEGORY PAGE
   ========================================================= */

function CategoryPage({
  category,
  onBack,
  onSelectSection,
}) {
  return (
    <motion.div
      className="category-container"
      initial={{
        opacity: 0,
        x: 35,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -25,
      }}
      transition={{
        duration: 0.45,
      }}
    >
      <div className="resource-breadcrumb">
        <span>GATE Study Hub</span>
        <b>›</b>
        <strong>{category.name}</strong>
      </div>

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back to subjects
      </button>

      <div className="category-header">
        <motion.div
          className="category-icon"
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
        >
          {category.icon}
        </motion.div>

        <p>Your resources</p>

        <h1>{category.name}</h1>

        <span>
          Choose a topic to continue ✨
        </span>
      </div>

      <div className="section-grid">
        {category.sections.map(
          (section, index) => (
            <motion.div
              key={section.id}
              className="section-card"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              onClick={() =>
                onSelectSection(section)
              }
            >
              <div className="section-icon">
                {section.icon}
              </div>

              <h2>{section.name}</h2>

              <p className="section-explore">
                Explore resources
                <span> →</span>
              </p>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN STUDY HUB
   ========================================================= */

function Resources() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] =
    useState(null);

  const [selectedSection, setSelectedSection] =
    useState(null);

  const [selectedSubject, setSelectedSubject] =
    useState(null);

  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    if (!query) {
      return gateResources;
    }

    return gateResources.filter(
      (resource) => {
        const mainMatch =
          resource.name
            .toLowerCase()
            .includes(query);

        const sectionMatch =
          resource.sections?.some(
            (section) =>
              section.name
                .toLowerCase()
                .includes(query)
          );

        return (
          mainMatch || sectionMatch
        );
      }
    );
  }, [search]);

  /* =======================================================
     SUBJECT DETAIL
     ======================================================= */

  if (selectedSubject) {
    return (
      <main className="resources-page">
        <AnimatePresence mode="wait">
          <ResourceDetail
            resource={selectedSubject}
            onBack={() =>
              setSelectedSubject(null)
            }
          />
        </AnimatePresence>
      </main>
    );
  }

  /* =======================================================
     SUBCATEGORY DETAIL
     ======================================================= */

  if (selectedSection) {
    return (
      <main className="resources-page">
        <AnimatePresence mode="wait">
          <ResourceDetail
            resource={selectedSection}
            breadcrumb={
              selectedCategory?.name
            }
            onBack={() =>
              setSelectedSection(null)
            }
          />
        </AnimatePresence>
      </main>
    );
  }

  /* =======================================================
     CATEGORY
     ======================================================= */

  if (selectedCategory) {
    return (
      <main className="resources-page">
        <AnimatePresence mode="wait">
          <CategoryPage
            category={selectedCategory}
            onBack={() =>
              setSelectedCategory(null)
            }
            onSelectSection={(section) =>
              setSelectedSection(section)
            }
          />
        </AnimatePresence>
      </main>
    );
  }

  /* =======================================================
     MAIN HUB
     ======================================================= */

  return (
    <main className="resources-page">

      <AnimatePresence mode="wait">

        <motion.div
          className="resources-container"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          {/* BACK */}

          <button
            className="study-back-button"
            onClick={() =>
              navigate("/surprise")
            }
          >
            ← Back to your gift
          </button>

          {/* HEADER */}

          <div className="resources-header">

            <motion.div
              className="resources-icon"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              🎓
            </motion.div>

            <p className="resources-label">
              Your little study corner
            </p>

            <h1>
              GATE Study Hub
              <span>✨</span>
            </h1>

            <p className="resources-description">
              Everything collected in one place,
              just for your preparation.
            </p>

          </div>

          {/* SEARCH */}

          <div className="resource-search">

            <span>🔎</span>

            <input
              type="text"
              placeholder="Search a subject or topic..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {search && (
              <button
                className="clear-search"
                onClick={() =>
                  setSearch("")
                }
                aria-label="Clear search"
              >
                ×
              </button>
            )}

          </div>

          <div className="resource-search-info">

            <p className="subject-count">
              {filteredResources.length} of{" "}
              {gateResources.length} subjects
            </p>

            {search && (
              <p className="search-result-text">
                Showing results for "
                {search}"
              </p>
            )}

          </div>

          {/* SUBJECT GRID */}

          <div className="resource-grid">

            {filteredResources.map(
              (resource, index) => (

                <motion.div
                  key={resource.id}
                  className="subject-card"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.045,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() => {

                    if (
                      resource.type ===
                      "category"
                    ) {
                      setSelectedCategory(
                        resource
                      );
                    } else {
                      setSelectedSubject(
                        resource
                      );
                    }

                  }}
                >

                  <div className="subject-icon">
                    {resource.icon}
                  </div>

                  <h2>
                    {resource.name}
                  </h2>

                  <p>

                    {resource.type ===
                    "category"
                      ? "Explore topics"
                      : "Explore resources"}

                    <span>{" "}→</span>

                  </p>

                </motion.div>

              )
            )}

          </div>

          {/* NO RESULTS */}

          {filteredResources.length === 0 && (

            <motion.div
              className="no-results"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >

              <div>🔎</div>

              <h2>
                No subject found
              </h2>

              <p>
                Try searching for another
                subject or topic.
              </p>

              <button
                onClick={() =>
                  setSearch("")
                }
              >
                Show all subjects
              </button>

            </motion.div>

          )}

          {/* =================================================
              SECRET SURPRISE
              ================================================= */}

          <motion.div
            className="secret-entrance"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
          >

            <div className="secret-line">
              <span></span>
              <span>♡</span>
              <span></span>
            </div>

            <p className="secret-small-text">
              One last little thing...
            </p>

            <h2>
              You found everything I prepared
              <br />
              for you... or did you? 👀
            </h2>

            <p className="secret-description">
              I may have hidden one more little
              surprise here.
            </p>

            <motion.button
              className="secret-button"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() =>
                navigate("/secret")
              }
            >
              <span>♡</span>
              Find the little surprise
              <span>♡</span>
            </motion.button>

            <p className="secret-hint">
              It's not really that hard to find. ✨
            </p>

          </motion.div>

        </motion.div>

      </AnimatePresence>

    </main>
  );
}

export default Resources;