@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap');

:root {
  color-scheme: dark;
  --bg: #080d19;
  --surface: #111a2b;
  --surface-2: #172238;
  --text: #f4f7ff;
  --muted: #9ba9c2;
  --line: rgba(166, 187, 224, .15);
  --accent: #8b7bff;
  --accent-2: #44d7d0;
  --shadow: 0 18px 50px rgba(0,0,0,.22);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Be Vietnam Pro', system-ui, sans-serif;
  color: var(--text);
  background: radial-gradient(ellipse at 50% -20%, rgba(90, 86, 255, .19), transparent 48%), var(--bg);
  line-height: 1.6;
}

body.light {
  color-scheme: light;
  --bg: #f4f6fc;
  --surface: #fff;
  --surface-2: #f0f3fb;
  --text: #172038;
  --muted: #66728a;
  --line: rgba(32, 48, 83, .13);
  --shadow: 0 18px 50px rgba(32,48,83,.09);
  background: radial-gradient(ellipse at 50% -20%, rgba(139,123,255,.13), transparent 48%), var(--bg);
}

a {
  color: inherit;
  text-decoration: none;
}

button, input {
  font: inherit;
}

button, a {
  -webkit-tap-highlight-color: transparent;
}

.topbar {
  max-width: 1160px;
  margin: auto;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  font-weight: 700;
  letter-spacing: -.03em;
}

.brand b {
  color: var(--accent-2);
}

.brand-mark {
  width: 37px;
  height: 37px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg,#8b7bff,#36d7d0);
  box-shadow: 0 7px 22px rgba(95,111,255,.28);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: var(--muted);
  font-size: 14px;
}

.nav-link:hover, .footer a:hover {
  color: var(--accent-2);
}

.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 13px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  font-size: 21px;
}

.container {
  max-width: 1160px;
  padding: 0 24px;
  margin: 0 auto;
}

.hero {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 62px 24px 36px;
  border: 1px solid var(--line);
  border-radius: 30px;
  background: linear-gradient(145deg,rgba(139,123,255,.10),rgba(68,215,208,.035) 55%,transparent),var(--surface);
  box-shadow: var(--shadow);
}

.hero-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(107,94,255,.12);
  filter: blur(70px);
  left: calc(50% - 150px);
  top: -210px;
  pointer-events: none;
}

.profile-mark {
  width: 78px;
  height: 78px;
  margin: 0 auto 20px;
  display: grid;
  place-items: center;
  border-radius: 25px;
  background: linear-gradient(135deg,#8b7bff,#44d7d0);
  font-weight: 800;
  font-size: 24px;
  color: white;
  box-shadow: 0 12px 34px rgba(103,111,255,.3);
  position: relative;
}

.eyebrow {
  color: var(--muted);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .16em;
}

.status-dot, .meta-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4de1ad;
  margin-right: 7px;
  box-shadow: 0 0 12px rgba(77,225,173,.55);
}

h1 {
  margin: 12px 0 10px;
  font-size: clamp(34px,5vw,54px);
  line-height: 1.15;
  letter-spacing: -.055em;
}

h1 span {
  background: linear-gradient(90deg,#9b8cff,#4ce2d3);
  color: transparent;
  background-clip: text;
}

.hero-copy, .section-copy {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  animation: rainbowText 3s linear infinite;
}

.hero-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  padding: 11px 16px;
  border: 1px solid var(--line);
  font-size: 13px;
  font-weight: 700;
  transition: transform .18s ease, border-color .18s ease, filter .18s ease;
  cursor: pointer;
}

.button:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

.button-primary {
  color: #fff;
  border-color: transparent;
  background: linear-gradient(100deg,#7668f5,#5a8cff);
  box-shadow: 0 7px 18px rgba(100,104,246,.18);
}

.button-secondary {
  color: var(--text);
  background: var(--surface-2);
}

.hero-stats {
  max-width: 560px;
  margin: 36px auto 0;
  padding-top: 22px;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: repeat(3,1fr);
}

.hero-stats div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.hero-stats strong {
  font-size: 19px;
}

.hero-stats span {
  color: var(--muted);
  font-size: 11px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin: 52px 0 20px;
}

.section-heading .eyebrow {
  margin: 0 0 7px;
  color: var(--accent-2);
}

h2 {
  font-size: clamp(24px,3vw,32px);
  letter-spacing: -.04em;
  margin: 0;
}

.section-copy {
  margin: 7px 0 0;
}

.search-box {
  width: min(100%,290px);
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--line);
  border-radius: 13px;
  padding: 0 13px;
  background: var(--surface);
  color: var(--muted);
}

.search-box span {
  font-size: 24px;
}

.search-box input {
  width: 100%;
  border: 0;
  outline: 0;
  padding: 13px 0;
  background: transparent;
  color: var(--text);
  font-size: 13px;
}

.filter-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.filter-chip {
  padding: 8px 14px;
  border-radius: 999px;
  color: var(--muted);
  border: 1px solid var(--line);
  background: var(--surface);
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
}

.filter-chip.active {
  background: rgba(139,123,255,.15);
  border-color: rgba(139,123,255,.55);
  color: var(--text);
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.app-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 21px;
  background: var(--surface);
  box-shadow: var(--shadow);
  transition: transform .2s ease,border-color .2s ease;
}

.app-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139,123,255,.5);
}

.app-card[hidden] {
  display: none;
}

.app-art {
  height: 145px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.app-art::before, .app-art::after {
  content: "";
  position: absolute;
  border: 1px solid rgba(255,255,255,.16);
  border-radius: 50%;
  width: 160px;
  height: 160px;
  transform: rotate(-25deg);
}

.app-art::after {
  width: 220px;
  height: 220px;
  transform: translate(90px,50px);
}

.art-blue {
  background: linear-gradient(135deg,#172e64,#426df0);
}

.art-purple {
  background: linear-gradient(135deg,#351b65,#9d65ff);
}

.art-cyan {
  background: linear-gradient(135deg,#063b57,#27c9cc);
}

.art-green {
  background: linear-gradient(135deg,#124b43,#54c995);
}

.art-orange {
  background: linear-gradient(135deg,#69321c,#ff9c4a);
}

.art-pink {
  background: linear-gradient(135deg,#5c2449,#ef6eab);
}

.art-red {
  background: linear-gradient(135deg,#591f36,#fa5d76);
}

.art-symbol {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 39px;
  font-weight: 800;
  letter-spacing: -.08em;
  text-shadow: 0 6px 22px rgba(0,0,0,.2);
}

.art-tag {
  position: absolute;
  z-index: 1;
  top: 13px;
  right: 13px;
  border: 1px solid rgba(255,255,255,.28);
  border-radius: 8px;
  padding: 4px 8px;
  background: rgba(0,0,0,.15);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  backdrop-filter: blur(8px);
}

.card-content {
  padding: 17px;
}

.card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.category {
  color: var(--accent-2);
  font-size: 9px;
  letter-spacing: .13em;
  font-weight: 800;
}

.platform {
  font-size: 10px;
  color: var(--muted);
  background: var(--surface-2);
  padding: 4px 7px;
  border-radius: 6px;
}

h3 {
  margin: 12px 0 6px;
  font-size: 16px;
  letter-spacing: -.025em;
}

.card-description {
  margin: 0;
  min-height: 42px;
  color: var(--muted);
  font-size: 12px;
}

.card-meta {
  margin: 13px 0 15px;
  color: var(--muted);
  font-size: 10px;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.button-small {
  flex: 1;
  padding: 10px 9px;
  border-radius: 10px;
  font-size: 11px;
}

.notice {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 28px 0 50px;
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: 15px;
  background: var(--surface);
  color: var(--muted);
  font-size: 12px;
}

.notice p {
  margin: 0;
}

.notice strong {
  color: var(--text);
}

.notice-icon {
  flex: 0 0 23px;
  height: 23px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(139,123,255,.16);
  color: var(--accent);
  font-weight: 800;
}

.empty-state {
  text-align: center;
  padding: 36px 10px;
  color: var(--muted);
}

.footer {
  max-width: 1160px;
  margin: auto;
  padding: 24px;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
  font-size: 11px;
}

.footer-brand {
  color: var(--text);
  font-size: 13px;
}

.footer-brand .brand-mark {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  font-size: 10px;
}

.footer p {
  margin: 0;
}

@media (max-width:900px) {
  .app-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }
}

@media (max-width:600px) {
  .topbar {
    padding: 16px;
  }
  .container {
    padding: 0 15px;
  }
  .nav-link {
    display: none;
  }
  .hero {
    padding: 42px 15px 25px;
    border-radius: 23px;
  }
  .profile-mark {
    width: 66px;
    height: 66px;
    border-radius: 21px;
  }
  .hero-stats {
    margin-top: 28px;
  }
  .section-heading {
    display: block;
    margin-top: 38px;
  }
  .search-box {
    width: 100%;
    margin-top: 18px;
  }
  .app-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }
  .app-art {
    height: 160px;
  }
  .footer {
    flex-wrap: wrap;
    padding: 22px 16px;
  }
  .footer p {
    order: 3;
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition: none !important;
  }
}

.hero-copy {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  animation: rainbowText 3s linear infinite;
}

.hero-copy {
  animation: rainbowText 3s linear infinite, moveText 6s linear infinite;
}

@keyframes rainbowText {
  0% {
    color: #ff0000;
  }
  14% {
    color: #ff7f00;
  }
  28% {
    color: #ffff00;
  }
  42% {
    color: #00ff00;
  }
  57% {
    color: #00ffff;
  }
  71% {
    color: #0000ff;
  }
  85% {
    color: #8b00ff;
  }
  100% {
    color: #ff0000;
  }
}

/* Chạy từ trái sang phải rồi quay lại */

@keyframes m {
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Căn giữa footer */

footer, .footer, .site-footer {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

footer p, .footer p, .site-footer p {
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

/* Chữ 7 màu chạy ngang liên tục */

.hero-copy {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.rainbow-running {
  display: inline-block;
  width: max-content;
  animation: rainbow-run 5s linear infinite, rainbow-color 1s linear infinite;
}

@keyframes rainbow-run {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rainbow-color {
  0% {
    color: #ff0000;
  }
  14% {
    color: #ff7f00;
  }
  28% {
    color: #ffff00;
  }
  42% {
    color: #00ff00;
  }
  57% {
    color: #00ffff;
  }
  71% {
    color: #0000ff;
  }
  85% {
    color: #8b00ff;
  }
  100% {
    color: #ff0000;
  }
}

/* Chữ cầu vồng và con trỏ đánh máy */

#typing-rainbow {
  background: linear-gradient( 90deg, red, orange, yellow, lime, cyan, blue, violet, red );
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: rainbow-flow 3s linear infinite;
}

.typing-cursor {
  color: #00eaff;
  animation: cursor-blink 0.7s steps(2, start) infinite;
}

@keyframes rainbow-flow {
  to {
    background-position: 200% center;
  }
}

@keyframes cursor-blink {
  to {
    visibility: hidden;
  }
}

/* Ảnh avatar */

.brand-mark, .profile-mark {
  overflow: hidden;
}

.brand-mark img, .profile-mark img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.app-art.has-img::before, .app-art.has-img::after {
  display: none;
}

.app-art img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
