import { readFileSync, writeFileSync } from "node:fs";

const FAVICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#08080A"/><path d="M20 14h26v14a13 13 0 0 1-13 13h-3v9h-10V14z" fill="#E03A2F"/></svg>`,
  );

const META = (title) => `<title>${title}</title>
    <meta name="description" content="RedlineMD reviews your physician employment contract in under 24 hours. Tail insurance, non-competes and hidden liabilities surfaced and priced in dollars. Flat $199." />
    <meta name="theme-color" content="#08080A" />
    <link rel="icon" href="${FAVICON}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="The $10,000 clause on page 14. AI-powered contract redlining for physicians — flat $199, back in 24 hours." />
    <meta name="twitter:card" content="summary_large_image" />`;

const FIT = `<style>
      html, body { background-color: #08080A; }
      body { margin: 0; }
      @media (max-width: 1439px) {
        html, body { overflow-x: hidden; }
        body > div[data-pencil-name] {
          transform: scale(var(--fit, 1));
          transform-origin: top left;
        }
      }
    </style>
    <script>
      (function () {
        function fit() {
          var root = document.querySelector("body > div[data-pencil-name]");
          if (!root) return;
          var w = document.documentElement.clientWidth;
          if (w >= 1440) {
            root.style.transform = "";
            document.body.style.height = "";
            return;
          }
          var s = w / 1440;
          document.body.style.setProperty("--fit", s);
          document.body.style.height = root.offsetHeight * s + "px";
        }
        window.addEventListener("resize", fit);
        window.addEventListener("load", fit);
        fit();
      })();
    </script>`;

function inject(file, { title, extraHead = "" }) {
  let html = readFileSync(file, "utf8");
  html = html.replace("<meta charset=\"UTF-8\" />", `<meta charset="UTF-8" />\n    ${META(title)}`);
  html = html.replace("</head>", `${FIT}\n${extraHead}\n  </head>`);
  writeFileSync(file, html);
  console.log("patched", file);
}

inject("index.html", {
  title: "RedlineMD — Physician Contract Review in 24 Hours | Flat $199",
  extraHead: `<script>
      if (window.innerWidth < 820) location.replace("./mobile.html");
    </script>`,
});

inject("mobile.html", {
  title: "RedlineMD — Physician Contract Review in 24 Hours | Flat $199",
  extraHead: `<script>
      if (window.innerWidth >= 820 && !location.search.includes("m=1"))
        location.replace("./index.html");
    </script>`,
});
