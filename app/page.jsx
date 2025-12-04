"use client";

import { useMemo, useState } from "react";
import KEY_NODES from "../data/keyNodes";
import QUERCUS_KEY_NODES from "../data/quercusKeyNodes";
import ACER_KEY_NODES from "../data/acerKeyNodes";
import PINUS_KEY_NODES from "../data/pinusKeyNodes";
import ULMUS_KEY_NODES from "../data/ulmusKeyNodes";
import FRAXINUS_KEY_NODES from "../data/fraxinusKeyNodes";
import PICEA_KEY_NODES from "../data/piceaKeyNodes";
import PRUNUS_KEY_NODES from "../data/prunusKeyNodes";
import BETULA_KEY_NODES from "../data/betulaKeyNodes";
import TILIA_KEY_NODES from "../data/tiliaKeyNodes";
import MALUS_KEY_NODES from "../data/malusKeyNodes";
import POPULUS_KEY_NODES from "../data/populusKeyNodes";
import JUGLANS_KEY_NODES from "../data/juglansKeyNodes";
import THUJA_KEY_NODES from "../data/thujaKeyNodes";
import ROBINIA_KEY_NODES from "../data/robiniaKeyNodes";
import GLEDITSIA_KEY_NODES from "../data/gleditsiaKeyNodes";
import SALIX_KEY_NODES from "../data/salixKeyNodes";
import FAGUS_KEY_NODES from "../data/fagusKeyNodes";
import AMELANCHIER_KEY_NODES from "../data/amelanchierKeyNodes";
import SORBUS_KEY_NODES from "../data/sorbusKeyNodes";
import CRATAEGUS_KEY_NODES from "../data/crataegusKeyNodes";
import ABIES_KEY_NODES from "../data/abiesKeyNodes";
import CATALPA_KEY_NODES from "../data/catalpaKeyNodes";
import LARIX_KEY_NODES from "../data/larixKeyNodes";

const imagesContext = require.context("../images", true, /\.(png|jpe?g)$/);

const IMAGES_BY_BASENAME = imagesContext.keys().reduce((acc, key) => {
  const parts = key.split("/");
  const fileName = parts[parts.length - 1];
  if (!fileName) return acc;

  const base = fileName.replace(/\.(png|jpe?g)$/i, "");
  acc[base] = imagesContext(key);
  return acc;
}, {});

// Map active key to its numeric image folder index:
// 1 → GENUS KEY, 2 → ACER, 3 → QUERCUS, 4 → ULMUS, ... 24 → CATALPA
const GENUS_IMAGE_INDEX = {
  main: 1,
  acer: 2,
  quercus: 3,
  ulmus: 4,
  fraxinus: 5,
  picea: 6,
  prunus: 7,
  betula: 8,
  tilia: 9,
  malus: 10,
  populus: 11,
  juglans: 12,
  thuja: 13,
  robinia: 14,
  gleditsia: 15,
  salix: 16,
  fagus: 17,
  amelanchier: 18,
  sorbus: 19,
  crataegus: 20,
  larix: 21,
  pinus: 22,
  abies: 23,
  catalpa: 24
};

function getQuestionNumber(node) {
  if (!node || node.type !== "question") return null;
  return typeof node.questionNumber === "number" ? node.questionNumber : null;
}

function getOptionImageSrc(activeKey, node, optionIndex) {
  const genusIndex = GENUS_IMAGE_INDEX[activeKey] || GENUS_IMAGE_INDEX.main;
  const questionNumber = getQuestionNumber(node);

  if (!questionNumber) return null;

  const baseName = `${genusIndex}.${questionNumber}.${optionIndex + 1}`;
  const asset = IMAGES_BY_BASENAME[baseName];

  if (!asset) return null;

  if (typeof asset === "string") return asset;
  if (typeof asset === "object") {
    if (asset.src && typeof asset.src === "string") return asset.src;

    if (asset.default) {
      if (
        typeof asset.default === "object" &&
        asset.default.src &&
        typeof asset.default.src === "string"
      ) {
        return asset.default.src;
      }

      if (typeof asset.default === "string") {
        return asset.default;
      }
    }
  }

  return null;
}

// Basic dichotomous key engine
// ----------------------------
// Each node is either:
// - type: "question" → offers two choices that point to other nodes
// - type: "result"   → terminal identification (genus or species)
//
// This encodes Section 1 (genus identification) plus selected genus-level keys.

function getNode(nodeId, keySet) {
  return keySet[nodeId] || keySet.root;
}

export default function Page() {
  const [activeKey, setActiveKey] = useState("main"); // "main" | genus-specific species keys like "quercus", "acer", "pinus", "abies", "ulmus", "fraxinus", "picea", "prunus", "betula", "tilia", "malus", "populus", "juglans", "thuja", "robinia", "gleditsia", "salix", "fagus", "amelanchier", "sorbus", "crataegus", "catalpa", "larix"
  const [currentNodeId, setCurrentNodeId] = useState("root");
  const [historyStack, setHistoryStack] = useState([]);
  const [error, setError] = useState("");

  const keySet =
    activeKey === "quercus"
      ? QUERCUS_KEY_NODES
      : activeKey === "acer"
      ? ACER_KEY_NODES
      : activeKey === "pinus"
      ? PINUS_KEY_NODES
      : activeKey === "abies"
      ? ABIES_KEY_NODES
      : activeKey === "ulmus"
      ? ULMUS_KEY_NODES
      : activeKey === "fraxinus"
      ? FRAXINUS_KEY_NODES
      : activeKey === "picea"
      ? PICEA_KEY_NODES
      : activeKey === "prunus"
      ? PRUNUS_KEY_NODES
      : activeKey === "betula"
      ? BETULA_KEY_NODES
      : activeKey === "tilia"
      ? TILIA_KEY_NODES
      : activeKey === "malus"
      ? MALUS_KEY_NODES
      : activeKey === "populus"
      ? POPULUS_KEY_NODES
      : activeKey === "juglans"
      ? JUGLANS_KEY_NODES
      : activeKey === "thuja"
      ? THUJA_KEY_NODES
      : activeKey === "robinia"
      ? ROBINIA_KEY_NODES
      : activeKey === "gleditsia"
      ? GLEDITSIA_KEY_NODES
      : activeKey === "salix"
      ? SALIX_KEY_NODES
      : activeKey === "fagus"
      ? FAGUS_KEY_NODES
      : activeKey === "amelanchier"
      ? AMELANCHIER_KEY_NODES
      : activeKey === "sorbus"
      ? SORBUS_KEY_NODES
      : activeKey === "crataegus"
      ? CRATAEGUS_KEY_NODES
      : activeKey === "catalpa"
      ? CATALPA_KEY_NODES
      : activeKey === "larix"
      ? LARIX_KEY_NODES
      : KEY_NODES;

  const node = getNode(currentNodeId, keySet);
  const isQuestion = node.type === "question";
  const isResult = node.type === "result";

  const progressText = useMemo(() => {
    if (error) return "Error";
    if (isResult) return "Identification complete";
    const step = historyStack.length + 1;
    const prefix =
      activeKey === "quercus"
        ? "Quercus species key – Question"
        : activeKey === "acer"
        ? "Acer species key – Question"
        : activeKey === "pinus"
        ? "Pinus species key – Question"
        : activeKey === "abies"
        ? "Abies species key – Question"
        : activeKey === "ulmus"
        ? "Ulmus species key – Question"
        : activeKey === "fraxinus"
        ? "Fraxinus species key – Question"
        : activeKey === "picea"
        ? "Picea species key – Question"
        : activeKey === "prunus"
        ? "Prunus species key – Question"
        : activeKey === "betula"
        ? "Betula species key – Question"
        : activeKey === "tilia"
        ? "Tilia species key – Question"
        : activeKey === "malus"
        ? "Malus species key – Question"
        : activeKey === "populus"
        ? "Populus species key – Question"
        : activeKey === "juglans"
        ? "Juglans species key – Question"
        : activeKey === "thuja"
        ? "Thuja species key – Question"
        : activeKey === "robinia"
        ? "Robinia species key – Question"
        : activeKey === "gleditsia"
        ? "Gleditsia species key – Question"
        : activeKey === "salix"
        ? "Salix species key – Question"
        : activeKey === "fagus"
        ? "Fagus species key – Question"
        : activeKey === "amelanchier"
        ? "Amelanchier species key – Question"
        : activeKey === "sorbus"
        ? "Sorbus species key – Question"
        : activeKey === "crataegus"
        ? "Crataegus species key – Question"
        : activeKey === "catalpa"
        ? "Catalpa species key – Question"
        : activeKey === "larix"
        ? "Larix species key – Question"
        : "Question";
    return `${prefix} ${step}`;
  }, [error, historyStack.length, isResult, activeKey]);

  function handleAnswer(option) {
    if (!option?.next) return;

    setHistoryStack((prev) => [
      ...prev,
      {
        nodeId: currentNodeId,
        selectedOptionId: option.id
      }
    ]);

    setCurrentNodeId(option.next);
  }

  function goBack() {
    setHistoryStack((prev) => {
      // If there is history, step back within the current key
      if (prev.length) {
        const last = prev[prev.length - 1];
        const nextHistory = prev.slice(0, -1);

        setCurrentNodeId(last.nodeId);

        return nextHistory;
      }

      // If there is no history and we are at the first question of a
      // genus-specific identification key, jump back to the genus
      // result node in the main key.
      if (activeKey !== "main") {
        let genusNodeId = null;

        switch (activeKey) {
          case "quercus":
            genusNodeId = "genus-Quercus";
            break;
          case "acer":
            genusNodeId = "genus-Acer";
            break;
          case "pinus":
            genusNodeId = "genus-Pinus";
            break;
          case "abies":
            genusNodeId = "genus-Abies";
            break;
          case "ulmus":
            genusNodeId = "genus-Ulmus";
            break;
          case "fraxinus":
            genusNodeId = "genus-Fraxinus";
            break;
          case "picea":
            genusNodeId = "genus-Picea";
            break;
          case "prunus":
            genusNodeId = "genus-Prunus";
            break;
          case "betula":
            genusNodeId = "genus-Betula";
            break;
          case "tilia":
            genusNodeId = "genus-Tilia";
            break;
          case "malus":
            genusNodeId = "genus-Malus";
            break;
          case "populus":
            genusNodeId = "genus-Populus";
            break;
          case "juglans":
            genusNodeId = "genus-Juglans";
            break;
          case "thuja":
            genusNodeId = "genus-Thuja";
            break;
          case "robinia":
            genusNodeId = "genus-Robinia";
            break;
          case "gleditsia":
            genusNodeId = "genus-Gleditsia";
            break;
          case "salix":
            genusNodeId = "genus-Salix";
            break;
          case "fagus":
            genusNodeId = "genus-Fagus";
            break;
          case "amelanchier":
            genusNodeId = "genus-Amelanchier";
            break;
          case "sorbus":
            genusNodeId = "genus-Sorbus";
            break;
          case "crataegus":
            genusNodeId = "genus-Crataegus";
            break;
          case "catalpa":
            genusNodeId = "genus-Catalpa";
            break;
          case "larix":
            genusNodeId = "genus-Larix";
            break;
          default:
            break;
        }

        if (genusNodeId) {
          setActiveKey("main");
          setCurrentNodeId(genusNodeId);
          return [];
        }
      }

      return prev;
    });
  }

  function restartQuiz() {
    setActiveKey("main");
    setCurrentNodeId("root");
    setHistoryStack([]);
    setError("");
  }

  function startQuercusQuiz() {
    setActiveKey("quercus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startAcerQuiz() {
    setActiveKey("acer");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startPinusQuiz() {
    setActiveKey("pinus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startAbiesQuiz() {
    setActiveKey("abies");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startLarixQuiz() {
    setActiveKey("larix");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startUlmusQuiz() {
    setActiveKey("ulmus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startFraxinusQuiz() {
    setActiveKey("fraxinus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startCrataegusQuiz() {
    setActiveKey("crataegus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startPiceaQuiz() {
    setActiveKey("picea");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startPrunusQuiz() {
    setActiveKey("prunus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startBetulaQuiz() {
    setActiveKey("betula");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startTiliaQuiz() {
    setActiveKey("tilia");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startMalusQuiz() {
    setActiveKey("malus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startPopulusQuiz() {
    setActiveKey("populus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startJuglansQuiz() {
    setActiveKey("juglans");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startThujaQuiz() {
    setActiveKey("thuja");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startRobiniaQuiz() {
    setActiveKey("robinia");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startGleditsiaQuiz() {
    setActiveKey("gleditsia");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startSalixQuiz() {
    setActiveKey("salix");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startFagusQuiz() {
    setActiveKey("fagus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startSorbusQuiz() {
    setActiveKey("sorbus");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startAmelanchierQuiz() {
    setActiveKey("amelanchier");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  function startCatalpaQuiz() {
    setActiveKey("catalpa");
    setCurrentNodeId("root");
    setHistoryStack([]);
  }

  const showQuestion = !error && isQuestion;
  const showResult = !error && isResult;

  const canGoBack =
    historyStack.length > 0 ||
    (activeKey !== "main" && currentNodeId === "root");

  return (
    <div className="page">
      <header className="header">
        <h1>McGill Campus Tree Finder</h1>
        <p className="subtitle">
          Answer a few quick “this or that” questions to find a specific tree on
          the McGill campus that best matches what you see.
        </p>
      </header>

      <main className="quiz-card">
        <div className="quiz-header">
          <button
            type="button"
            className="nav-button"
            onClick={goBack}
            disabled={!canGoBack}
          >
            ← Back
          </button>
          <div className="progress">{progressText}</div>
        </div>

        {error && (
          <section className="error-section">
            <h2>Something went wrong</h2>
            <p>{error}</p>
          </section>
        )}

        {showQuestion && node && (
          <section className="question-section">
            <h2 className="question-text">{node.text}</h2>
            <div className="options">
              {node.options?.map((opt, index) => {
                const imgSrc = getOptionImageSrc(activeKey, node, index);

                return (
                  <button
                    key={opt.id}
                    type="button"
                    className="option-button"
                    onClick={() => handleAnswer(opt)}
                  >
                    {imgSrc && (
                      <img
                        src={imgSrc}
                        alt={opt.label}
                        className="option-image"
                      />
                    )}
                    <span className="option-main">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {showResult && node && (
          <section className="result-section">
            <h2 className="result-title">Your McGill tree identification</h2>
            <div id="resultContent">
              <div className="result-name">{node.name}</div>
              <div className="result-tagline">{node.latinName}</div>

              <div className="trait-grid">
                <div className="trait-pill">
                  <span className="trait-label">Level</span>
                  <span className="trait-value">
                    {node.level === "genus"
                      ? "Genus (group of closely related species)"
                      : node.level === "group"
                      ? "Genus group"
                      : "Identification"}
                  </span>
                </div>
              </div>

              {node.notes && <div className="result-notes">{node.notes}</div>}

              <div className="result-notes">
                Follow the steps again if the match feels off, paying close
                attention to leaves, bark, and fruits in the field.
              </div>
            </div>

            {activeKey === "main" && node.id === "genus-Quercus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startQuercusQuiz}
              >
                Identify Quercus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Acer" && (
              <button
                type="button"
                className="restart-button"
                onClick={startAcerQuiz}
              >
                Identify Acer species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Abies" && (
              <button
                type="button"
                className="restart-button"
                onClick={startAbiesQuiz}
              >
                Identify Abies species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Larix" && (
              <button
                type="button"
                className="restart-button"
                onClick={startLarixQuiz}
              >
                Identify Larix species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Pinus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startPinusQuiz}
              >
                Identify Pinus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Ulmus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startUlmusQuiz}
              >
                Identify Ulmus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Fraxinus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startFraxinusQuiz}
              >
                Identify Fraxinus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Picea" && (
              <button
                type="button"
                className="restart-button"
                onClick={startPiceaQuiz}
              >
                Identify Picea species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Prunus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startPrunusQuiz}
              >
                Identify Prunus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Betula" && (
              <button
                type="button"
                className="restart-button"
                onClick={startBetulaQuiz}
              >
                Identify Betula species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Tilia" && (
              <button
                type="button"
                className="restart-button"
                onClick={startTiliaQuiz}
              >
                Identify Tilia species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Malus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startMalusQuiz}
              >
                Identify Malus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Populus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startPopulusQuiz}
              >
                Identify Populus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Juglans" && (
              <button
                type="button"
                className="restart-button"
                onClick={startJuglansQuiz}
              >
                Identify Juglans species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Thuja" && (
              <button
                type="button"
                className="restart-button"
                onClick={startThujaQuiz}
              >
                Identify Thuja species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Robinia" && (
              <button
                type="button"
                className="restart-button"
                onClick={startRobiniaQuiz}
              >
                Identify Robinia species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Gleditsia" && (
              <button
                type="button"
                className="restart-button"
                onClick={startGleditsiaQuiz}
              >
                Identify Gleditsia species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Salix" && (
              <button
                type="button"
                className="restart-button"
                onClick={startSalixQuiz}
              >
                Identify Salix species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Fagus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startFagusQuiz}
              >
                Identify Fagus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Sorbus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startSorbusQuiz}
              >
                Identify Sorbus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Crataegus" && (
              <button
                type="button"
                className="restart-button"
                onClick={startCrataegusQuiz}
              >
                Identify Crataegus species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Amelanchier" && (
              <button
                type="button"
                className="restart-button"
                onClick={startAmelanchierQuiz}
              >
                Identify Amelanchier species
              </button>
            )}

            {activeKey === "main" && node.id === "genus-Catalpa" && (
              <button
                type="button"
                className="restart-button"
                onClick={startCatalpaQuiz}
              >
                Identify Catalpa species
              </button>
            )}

            <button
              type="button"
              id="restartButton"
              className="restart-button"
              onClick={restartQuiz}
            >
              Start Over
            </button>
          </section>
        )}
      </main>

      <footer className="footer">
        <span>Built for exploring trees across the McGill campus.</span>
      </footer>
    </div>
  );
}


