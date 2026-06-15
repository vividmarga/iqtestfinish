// ─────────────────────────────────────────────────────────────────────────────
// IQTest.ro — app.js
// Cheile API sunt citite din window.ENV (injectate de index.html din .env)
// ─────────────────────────────────────────────────────────────────────────────

// ─── QUESTIONS DATABASE (40 questions) ───────────────────────────────────────
const QUESTIONS = [
  // LOGIC (10)
  {cat:"Logică & Raționament",text:"Dacă toți A sunt B, și toți B sunt C, atunci:",options:["Toți A sunt C","Toți C sunt A","Nici un A nu este C","Unii A sunt C"],correct:0,type:"text"},
  {cat:"Logică & Raționament",text:"Seria: 2, 6, 18, 54, ... Care este următorul număr?",options:["108","162","162","216"],correct:1,type:"text"},
  {cat:"Logică & Raționament",text:"Dacă ieri era joi, ce zi va fi poimâine?",options:["Sâmbătă","Duminică","Luni","Marți"],correct:1,type:"text"},
  {cat:"Logică & Raționament",text:"Un tren parcurge 120 km în 1.5 ore. Câți km parcurge în 2.5 ore?",options:["180 km","200 km","220 km","240 km"],correct:1,type:"text"},
  {cat:"Logică & Raționament",text:"Seria: 1, 1, 2, 3, 5, 8, 13, ... Următorul număr este:",options:["18","21","20","24"],correct:1,type:"text"},
  {cat:"Logică & Raționament",text:"Ana are mai mulți bani decât Bogdan. Bogdan are mai mulți bani decât Cristi. Care afirmație este sigur adevărată?",options:["Cristi are cei mai puțini bani","Ana are cei mai mulți bani","Ana are de 2 ori mai mult ca Cristi","A și B sunt amândouă adevărate"],correct:3,type:"text"},
  {cat:"Logică & Raționament",text:"Dacă 5 mașini produc 5 roți în 5 minute, câte mașini produc 100 de roți în 100 de minute?",options:["100","20","5","50"],correct:2,type:"text"},
  {cat:"Logică & Raționament",text:"Un ceas arată 3:15. Care este unghiul dintre ace (gradul dintre minutar și orar)?",options:["0°","7.5°","15°","22.5°"],correct:1,type:"text"},
  {cat:"Logică & Raționament",text:"Seria: 3, 7, 15, 31, 63, ... Următorul termen este:",options:["95","127","121","131"],correct:1,type:"text"},
  {cat:"Logică & Raționament",text:"Dacă CIFRA = 12345 și RAFT = 6478, ce înseamnă FRAC?",options:["4632","5368","4623","3426"],correct:2,type:"text"},

  // SPATIAL (10)
  {cat:"Gândire Spațial-Vizuală",text:"Care figură completează matricea?",type:"svg",svgType:"matrix1",options:["A","B","C","D"],correct:2},
  {cat:"Gândire Spațial-Vizuală",text:"Câte cuburi sunt în această structură?",type:"svg",svgType:"cubes1",options:["6","7","8","9"],correct:1},
  {cat:"Gândire Spațial-Vizuală",text:"Care piesă completează forma?",type:"svg",svgType:"puzzle1",options:["A","B","C","D"],correct:0},
  {cat:"Gândire Spațial-Vizuală",text:"Dacă rotești această figură 90° în sens orar, obții:",type:"svg",svgType:"rotate1",options:["A","B","C","D"],correct:3},
  {cat:"Gândire Spațial-Vizuală",text:"Care este oglinda corectă a acestei forme?",type:"svg",svgType:"mirror1",options:["A","B","C","D"],correct:1},
  {cat:"Gândire Spațial-Vizuală",text:"Câte triunghiuri există în această figură?",type:"svg",svgType:"triangles1",options:["4","6","8","10"],correct:2},
  {cat:"Gândire Spațial-Vizuală",text:"Care figură iese din serie?",type:"svg",svgType:"odd1",options:["A","B","C","D"],correct:3},
  {cat:"Gândire Spațial-Vizuală",text:"Dacă desfaci acest cub, care dintre variantele de mai jos obții?",type:"svg",svgType:"unfold1",options:["A","B","C","D"],correct:0},
  {cat:"Gândire Spațial-Vizuală",text:"Care figură urmează în serie?",type:"svg",svgType:"series1",options:["A","B","C","D"],correct:2},
  {cat:"Gândire Spațial-Vizuală",text:"Punctul se află în ce zonă a figurii?",type:"svg",svgType:"zones1",options:["Doar în cerc","În cerc și pătrat","În toate trei","Doar în triunghi"],correct:1},

  // VERBAL (10)
  {cat:"Inteligență Verbală",text:"Cuvântul care nu se potrivește cu celelalte este:",options:["Roșu","Verde","Albastru","Triunghi"],correct:3,type:"text"},
  {cat:"Inteligență Verbală",text:"CARTE este față de CUVINTE cum este ALBUM față de:",options:["Muzică","Fotografii","Raft","Pagini"],correct:1,type:"text"},
  {cat:"Inteligență Verbală",text:"Antonimul cuvântului ELOCVENT este:",options:["Tăcut","Bâlbâit","Zgomotos","Mut"],correct:1,type:"text"},
  {cat:"Inteligență Verbală",text:"Care cuvânt are înțeles opus față de AVAR?",options:["Bogat","Sărac","Generos","Zgârcit"],correct:2,type:"text"},
  {cat:"Inteligență Verbală",text:"PIAN este față de MUZICIAN cum este PENSULĂ față de:",options:["Tablou","Pictor","Culori","Pânză"],correct:1,type:"text"},
  {cat:"Inteligență Verbală",text:"Completați: SOARE este față de ZI cum este LUNĂ față de ___",options:["Stea","Noapte","Cer","Lumină"],correct:1,type:"text"},
  {cat:"Inteligență Verbală",text:"Care din următoarele NU este un sinonim al cuvântului RAPID?",options:["Alert","Sprinten","Vioi","Ponderat"],correct:3,type:"text"},
  {cat:"Inteligență Verbală",text:"BIOLOGIE studiază VIA cum GEOLOGIE studiază:",options:["Piatră","Pământul","Munții","Minerale"],correct:1,type:"text"},
  {cat:"Inteligență Verbală",text:"Care serie de cuvinte urmează o logică corectă?",options:["Secol > Deceniu > An > Lună","Deceniu > Secol > An > Lună","An > Lună > Secol > Deceniu","Lună > An > Deceniu > Secol"],correct:0,type:"text"},
  {cat:"Inteligență Verbală",text:"Proverbul \"Cine se scoală de dimineață departe ajunge\" înseamnă:",options:["Dimineața e cea mai bună oră de mers la drum","Perseverența și activitatea timpurie duc la succes","Oamenii de dimineață sunt mai sănătoși","Trebuie să mergi devreme la serviciu"],correct:1,type:"text"},

  // MEMORY (10)
  {cat:"Memorie & Concentrare",text:"Ați văzut această secvență: 7, 3, 9, 1, 4. Care număr era pe poziția a 3-a?",options:["7","3","9","1"],correct:2,type:"text"},
  {cat:"Memorie & Concentrare",text:"Dacă: A=1, B=2, C=3... Ce cuvânt codifică 2-1-3-5?",options:["BACE","FACE","BACE","BASE"],correct:0,type:"text"},
  {cat:"Memorie & Concentrare",text:"Lista: MĂR, CARTE, CÂINE, SCAUN, FLOARE. Câte obiecte neînsuflețite sunt?",options:["1","2","3","4"],correct:1,type:"text"},
  {cat:"Memorie & Concentrare",text:"Secvența de culori: Roșu, Albastru, Verde, Galben, Roșu, Albastru. Urmează:",options:["Galben","Verde","Roșu","Albastru"],correct:1,type:"text"},
  {cat:"Memorie & Concentrare",text:"Câte vocale are cuvântul EXTRAORDINAR?",options:["4","5","6","3"],correct:1,type:"text"},
  {cat:"Memorie & Concentrare",text:"O listă conține: 15, 8, 23, 4, 16, 11. Care dintre aceste numere este mai mare decât 14 și mai mic decât 20?",options:["8 și 11","15 și 16","23","16"],correct:1,type:"text"},
  {cat:"Memorie & Concentrare",text:"Dacă inversezi literele din VIITOR obții:",options:["ROTIVI","OTIROV","ROTIIV","IOTIVR"],correct:0,type:"text"},
  {cat:"Memorie & Concentrare",text:"Numerele de telefon: 0722-134-567 și 0744-136-578. Câte cifre diferă?",options:["2","3","4","5"],correct:2,type:"text"},
  {cat:"Memorie & Concentrare",text:"Secvența: ○ □ △ ○ □ △ ○ □ ___. Ce urmează?",options:["○","□","△","◇"],correct:2,type:"text"},
  {cat:"Memorie & Concentrare",text:"Câte litere diferite conține cuvântul CONSECINȚĂ?",options:["6","7","8","9"],correct:1,type:"text"},
];

// ─── SVG FIGURES ─────────────────────────────────────────────────────────────
function getSVG(type){
  const s={stroke:"#B8A0FF",fill:"none",s2:"#6C2BD9",s3:"#FFD94A"};
  const svgs={
    matrix1:`<svg viewBox="0 0 280 200" width="280" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="15" fill="#9A8BB5" font-size="11" font-family="sans-serif">Completează matricea:</text>
      <rect x="20" y="25" width="60" height="60" stroke="${s.stroke}" fill="${s.s2}" opacity=".4" rx="4"/>
      <circle cx="50" cy="55" r="18" fill="${s.stroke}" opacity=".7"/>
      <rect x="100" y="25" width="60" height="60" stroke="${s.stroke}" fill="${s.s2}" opacity=".4" rx="4"/>
      <circle cx="130" cy="55" r="14" fill="${s.stroke}" opacity=".7"/>
      <rect x="180" y="25" width="60" height="60" stroke="${s.stroke}" fill="${s.s2}" opacity=".4" rx="4"/>
      <circle cx="210" cy="55" r="10" fill="${s.stroke}" opacity=".7"/>
      <rect x="20" y="100" width="60" height="60" stroke="${s.stroke}" fill="${s.s2}" opacity=".4" rx="4"/>
      <rect cx="50" cy="130" width="24" height="24" x="38" y="118" fill="${s.stroke}" opacity=".7"/>
      <rect x="100" y="100" width="60" height="60" stroke="${s.stroke}" fill="${s.s2}" opacity=".4" rx="4"/>
      <rect width="18" height="18" x="121" y="121" fill="${s.stroke}" opacity=".7"/>
      <rect x="180" y="100" width="60" height="60" stroke="${s.stroke}" stroke-width="2" fill="rgba(108,43,217,.05)" stroke-dasharray="5,3" rx="4"/>
      <text x="210" y="136" fill="${s.s3}" font-size="22" text-anchor="middle" font-weight="700">?</text>
      <text x="20" y="195" fill="#9A8BB5" font-size="11" font-family="sans-serif">A: □ mare    B: □ mic    C: ■ mic    D: ○ mic</text>
    </svg>`,
    cubes1:`<svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="14" fill="#9A8BB5" font-size="11" font-family="sans-serif">Câte cuburi?</text>
      <g transform="translate(40,20)">
        <polygon points="30,0 60,17 60,52 30,69 0,52 0,17" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="30,0 60,17 30,34 0,17" fill="rgba(184,160,255,.35)" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="60,17 60,52 30,69 30,34" fill="rgba(108,43,217,.4)" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="0,17 0,52 30,69 30,34" fill="rgba(108,43,217,.25)" stroke="${s.stroke}" stroke-width="1.5"/>
      </g>
      <g transform="translate(100,20)">
        <polygon points="30,0 60,17 60,52 30,69 0,52 0,17" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="30,0 60,17 30,34 0,17" fill="rgba(184,160,255,.35)" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="60,17 60,52 30,69 30,34" fill="rgba(108,43,217,.4)" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="0,17 0,52 30,69 30,34" fill="rgba(108,43,217,.25)" stroke="${s.stroke}" stroke-width="1.5"/>
      </g>
      <g transform="translate(70,55)">
        <polygon points="30,0 60,17 60,52 30,69 0,52 0,17" fill="${s.s2}" opacity=".6" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="30,0 60,17 30,34 0,17" fill="rgba(184,160,255,.4)" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="60,17 60,52 30,69 30,34" fill="rgba(108,43,217,.45)" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="0,17 0,52 30,69 30,34" fill="rgba(108,43,217,.3)" stroke="${s.stroke}" stroke-width="1.5"/>
      </g>
      <g transform="translate(40,90)">
        <polygon points="30,0 60,17 60,52 30,69 0,52 0,17" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="30,0 60,17 30,34 0,17" fill="rgba(184,160,255,.35)" stroke="${s.stroke}" stroke-width="1.5"/>
        <polygon points="0,17 0,52 30,69 30,34" fill="rgba(108,43,217,.25)" stroke="${s.stroke}" stroke-width="1.5"/>
      </g>
    </svg>`,
    puzzle1:`<svg viewBox="0 0 300 130" width="300" height="130" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="14" fill="#9A8BB5" font-size="11" font-family="sans-serif">Care piesă se potrivește?</text>
      <rect x="10" y="22" width="120" height="80" rx="6" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/>
      <rect x="10" y="22" width="60" height="40" rx="4" fill="${s.s2}" opacity=".6" stroke="${s.stroke}" stroke-width="1.5"/>
      <rect x="70" y="22" width="60" height="40" rx="4" fill="${s.s2}" opacity=".6" stroke="${s.stroke}" stroke-width="1.5"/>
      <rect x="10" y="62" width="60" height="40" rx="4" fill="${s.s2}" opacity=".6" stroke="${s.stroke}" stroke-width="1.5"/>
      <rect x="70" y="62" width="60" height="40" rx="4" stroke="${s.s3}" stroke-width="2" stroke-dasharray="4,3" fill="rgba(255,217,74,.06)"/>
      <text x="100" y="87" fill="${s.s3}" font-size="18" text-anchor="middle" font-weight="700">?</text>
      <g transform="translate(148,22)">
        <text x="18" y="12" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">A</text>
        <rect x="0" y="16" width="36" height="36" rx="4" fill="${s.s2}" opacity=".7" stroke="${s.stroke}" stroke-width="1.5"/>
      </g>
      <g transform="translate(195,22)">
        <text x="18" y="12" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">B</text>
        <rect x="0" y="16" width="36" height="36" rx="4" fill="rgba(108,43,217,.35)" stroke="${s.stroke}" stroke-width="1.5"/>
        <line x1="18" y1="16" x2="18" y2="52" stroke="${s.stroke}" stroke-width="1"/>
      </g>
      <g transform="translate(242,22)">
        <text x="18" y="12" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">C</text>
        <rect x="0" y="16" width="36" height="36" rx="4" fill="${s.s2}" opacity=".6" stroke="${s.stroke}" stroke-width="1.5"/>
        <circle cx="18" cy="34" r="8" fill="none" stroke="${s.stroke}" stroke-width="1.2"/>
      </g>
      <g transform="translate(148,78)">
        <text x="18" y="12" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">D</text>
        <rect x="0" y="16" width="36" height="36" rx="4" fill="rgba(255,100,100,.15)" stroke="${s.s3}" stroke-width="1.5"/>
      </g>
    </svg>`,
    rotate1:`<svg viewBox="0 0 300 130" width="300" height="130" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="14" fill="#9A8BB5" font-size="11" font-family="sans-serif">Original → rotit 90° orar = ?</text>
      <g transform="translate(10,25)">
        <polygon points="30,0 60,50 0,50" fill="${s.s2}" opacity=".7" stroke="${s.stroke}" stroke-width="1.5"/>
        <rect x="20" y="50" width="20" height="25" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/>
      </g>
      <text x="82" y="68" fill="${s.s3}" font-size="20">→</text>
      <g transform="translate(105,25)"><text x="20" y="12" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">A</text><polygon points="0,25 50,0 50,50" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5" transform="translate(0,16)"/><rect x="0" y="41" width="25" height="20" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5" transform="rotate(-90,12,51)"/></g>
      <g transform="translate(165,25)"><text x="20" y="12" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">B</text><polygon points="30,0 0,50 60,50" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5" transform="translate(0,16)"/><rect x="20" y="66" width="20" height="20" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/></g>
      <g transform="translate(225,25)"><text x="20" y="12" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">C</text><polygon points="0,0 50,25 0,50" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5" transform="translate(0,16)"/></g>
      <g transform="translate(10,95)"><text x="20" y="12" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">D ✓</text><polygon points="50,25 0,0 0,50" fill="${s.s2}" opacity=".7" stroke="${s.s3}" stroke-width="2" transform="translate(0,0)"/><rect x="0" y="10" width="25" height="20" fill="${s.s2}" opacity=".6" stroke="${s.s3}" stroke-width="2"/></g>
    </svg>`,
    mirror1:`<svg viewBox="0 0 300 130" width="300" height="130" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="14" fill="#9A8BB5" font-size="11" font-family="sans-serif">Original — care este oglinda?</text>
      <g transform="translate(10,24)">
        <polygon points="0,0 40,0 40,20 20,40 0,20" fill="${s.s2}" opacity=".7" stroke="${s.stroke}" stroke-width="1.5"/>
        <circle cx="10" cy="10" r="5" fill="${s.s3}"/>
      </g>
      <line x1="75" y1="20" x2="75" y2="120" stroke="rgba(184,160,255,.3)" stroke-width="1" stroke-dasharray="4,3"/>
      <g transform="translate(85,24)"><text x="20" y="-6" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">A</text><polygon points="40,0 0,0 0,20 20,40 40,20" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/><circle cx="30" cy="10" r="5" fill="${s.s3}" opacity=".4"/></g>
      <g transform="translate(145,24)"><text x="20" y="-6" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">B ✓</text><polygon points="40,0 0,0 0,20 20,40 40,20" fill="${s.s2}" opacity=".7" stroke="${s.s3}" stroke-width="2"/><circle cx="30" cy="10" r="5" fill="${s.s3}"/></g>
      <g transform="translate(205,24)"><text x="20" y="-6" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">C</text><polygon points="0,0 40,0 40,20 20,40 0,20" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/><circle cx="30" cy="10" r="5" fill="${s.s3}" opacity=".4"/></g>
      <g transform="translate(255,24)"><text x="20" y="-6" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">D</text><polygon points="40,0 0,0 0,20 20,40 40,20" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/><circle cx="10" cy="10" r="5" fill="${s.s3}" opacity=".4"/></g>
    </svg>`,
    triangles1:`<svg viewBox="0 0 200 180" width="200" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="14" fill="#9A8BB5" font-size="11" font-family="sans-serif">Câte triunghiuri există?</text>
      <polygon points="100,20 20,160 180,160" fill="none" stroke="${s.stroke}" stroke-width="2"/>
      <line x1="100" y1="20" x2="100" y2="160" stroke="${s.stroke}" stroke-width="1.5"/>
      <line x1="20" y1="160" x2="140" y2="90" stroke="${s.stroke}" stroke-width="1.5"/>
      <line x1="180" y1="160" x2="60" y2="90" stroke="${s.stroke}" stroke-width="1.5"/>
      <line x1="60" y1="90" x2="140" y2="90" stroke="${s.stroke}" stroke-width="1"/>
    </svg>`,
    odd1:`<svg viewBox="0 0 320 100" width="320" height="100" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="14" fill="#9A8BB5" font-size="11" font-family="sans-serif">Care iese din serie?</text>
      <g transform="translate(10,25)"><text x="30" y="-6" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">A</text><rect width="60" height="60" rx="8" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/><circle cx="30" cy="30" r="15" fill="none" stroke="${s.stroke}" stroke-width="2"/></g>
      <g transform="translate(90,25)"><text x="30" y="-6" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">B</text><rect width="60" height="60" rx="8" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/><circle cx="30" cy="30" r="12" fill="none" stroke="${s.stroke}" stroke-width="2"/></g>
      <g transform="translate(170,25)"><text x="30" y="-6" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">C</text><rect width="60" height="60" rx="8" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/><circle cx="30" cy="30" r="18" fill="none" stroke="${s.stroke}" stroke-width="2"/></g>
      <g transform="translate(250,25)"><text x="30" y="-6" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">D ✗</text><rect width="60" height="60" rx="8" fill="${s.s2}" opacity=".5" stroke="${s.s3}" stroke-width="2"/><polygon points="30,10 55,50 5,50" fill="none" stroke="${s.s3}" stroke-width="2"/></g>
    </svg>`,
    unfold1:`<svg viewBox="0 0 320 130" width="320" height="130" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="14" fill="#9A8BB5" font-size="11" font-family="sans-serif">Cub desfăcut:</text>
      <g transform="translate(10,22)">
        <rect x="20" y="0" width="30" height="30" fill="${s.s2}" opacity=".6" stroke="${s.stroke}" stroke-width="1.5"/><text x="35" y="20" fill="${s.s3}" font-size="14" text-anchor="middle">★</text>
        <rect x="20" y="30" width="30" height="30" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/><text x="35" y="52" fill="${s.stroke}" font-size="14" text-anchor="middle">●</text>
        <rect x="0" y="30" width="30" height="30" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/><text x="15" y="52" fill="${s.stroke}" font-size="10" text-anchor="middle">+</text>
        <rect x="40" y="30" width="30" height="30" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/><text x="55" y="52" fill="${s.stroke}" font-size="14" text-anchor="middle">▲</text>
        <rect x="20" y="60" width="30" height="30" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/>
        <rect x="20" y="90" width="30" height="30" fill="${s.s2}" opacity=".3" stroke="${s.stroke}" stroke-width="1.5"/>
      </g>
      <text x="82" y="68" fill="${s.s3}" font-size="18">→</text>
      <g transform="translate(96,22)">
        <text x="25" y="-4" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">A ✓</text>
        <rect x="0" y="0" width="25" height="25" fill="${s.s2}" opacity=".6" stroke="${s.s3}" stroke-width="1.8"/><text x="12" y="17" fill="${s.s3}" font-size="12" text-anchor="middle">★</text>
        <rect x="0" y="25" width="25" height="25" fill="${s.s2}" opacity=".5" stroke="${s.s3}" stroke-width="1.8"/><text x="12" y="43" fill="${s.stroke}" font-size="12" text-anchor="middle">●</text>
      </g>
      <g transform="translate(145,22)">
        <text x="25" y="-4" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">B</text>
        <rect x="0" y="0" width="25" height="25" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/><text x="12" y="17" fill="${s.stroke}" font-size="12" text-anchor="middle">●</text>
        <rect x="0" y="25" width="25" height="25" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/><text x="12" y="43" fill="${s.s3}" font-size="12" text-anchor="middle">★</text>
      </g>
      <g transform="translate(194,22)">
        <text x="25" y="-4" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">C</text>
        <rect x="0" y="0" width="25" height="25" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/><text x="12" y="17" fill="${s.stroke}" font-size="12" text-anchor="middle">▲</text>
        <rect x="0" y="25" width="25" height="25" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/><text x="12" y="43" fill="${s.s3}" font-size="12" text-anchor="middle">★</text>
      </g>
      <g transform="translate(243,22)">
        <text x="25" y="-4" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">D</text>
        <rect x="0" y="0" width="25" height="25" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="1.5"/><text x="12" y="17" fill="${s.stroke}" font-size="12" text-anchor="middle">+</text>
        <rect x="0" y="25" width="25" height="25" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="1.5"/><text x="12" y="43" fill="${s.s3}" font-size="12" text-anchor="middle">●</text>
      </g>
    </svg>`,
    series1:`<svg viewBox="0 0 320 100" width="320" height="100" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="14" fill="#9A8BB5" font-size="11" font-family="sans-serif">Care urmează în serie?</text>
      <g transform="translate(10,22)"><circle cx="25" cy="25" r="25" fill="none" stroke="${s.stroke}" stroke-width="2"/></g>
      <g transform="translate(70,22)"><circle cx="25" cy="25" r="20" fill="${s.s2}" opacity=".3" stroke="${s.stroke}" stroke-width="2"/></g>
      <g transform="translate(130,22)"><circle cx="25" cy="25" r="15" fill="${s.s2}" opacity=".5" stroke="${s.stroke}" stroke-width="2"/></g>
      <text x="178" y="50" fill="${s.s3}" font-size="18">→</text>
      <g transform="translate(200,22)"><text x="25" y="-4" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">A</text><circle cx="25" cy="25" r="12" fill="${s.s2}" opacity=".4" stroke="${s.stroke}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${s.stroke}"/></g>
      <g transform="translate(250,22)"><text x="25" y="-4" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">B</text><circle cx="25" cy="25" r="8" fill="${s.s2}" opacity=".6" stroke="${s.stroke}" stroke-width="2"/></g>
      <g transform="translate(190,60)"><text x="25" y="-4" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">C ✓</text><circle cx="25" cy="25" r="10" fill="${s.s2}" opacity=".8" stroke="${s.s3}" stroke-width="2"/></g>
      <g transform="translate(245,60)"><text x="25" y="-4" fill="#9A8BB5" font-size="10" text-anchor="middle" font-family="sans-serif">D</text><circle cx="25" cy="25" r="25" fill="none" stroke="${s.stroke}" stroke-width="2" opacity=".4"/></g>
    </svg>`,
    zones1:`<svg viewBox="0 0 200 180" width="200" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="8" y="14" fill="#9A8BB5" font-size="11" font-family="sans-serif">Unde se află punctul roșu?</text>
      <rect x="30" y="30" width="100" height="100" rx="4" fill="none" stroke="${s.stroke}" stroke-width="2" opacity=".7"/>
      <circle cx="95" cy="95" r="45" fill="none" stroke="${s.s3}" stroke-width="2" opacity=".7"/>
      <polygon points="100,30 170,150 30,150" fill="none" stroke="#4ade80" stroke-width="2" opacity=".6"/>
      <circle cx="72" cy="90" r="8" fill="#f87171"/>
      <text x="100" y="170" fill="#9A8BB5" font-size="11" text-anchor="middle" font-family="sans-serif">□ violet · ○ galben · △ verde</text>
    </svg>`,
  };
  return svgs[type]||`<svg viewBox="0 0 200 100"><text x="100" y="55" fill="#9A8BB5" text-anchor="middle" font-size="14">Figură ${type}</text></svg>`;
}

// ─── GAME STATE ───────────────────────────────────────────────────────────────
let currentQ=0, answers=[], timerInterval=null, timeLeft=1080, selectedOption=-1, isPremium=false;
let userName='Anonim', selectedPlan='19';
const LETTERS=['A','B','C','D'];

// ─── IQ SCORING ──────────────────────────────────────────────────────────────
function calcIQ(correctCount, totalTime){
  const base=85, maxBonus=60;
  const accuracyScore=(correctCount/40)*maxBonus;
  const timeBonus=totalTime<600?5:totalTime<900?3:0;
  const iq=Math.round(base+accuracyScore+timeBonus);
  return Math.min(Math.max(iq,70),148);
}
function getLabel(iq){
  if(iq>=145)return{label:"Geniu Excepțional",pct:"Top 0.1%",color:"#FFD94A"};
  if(iq>=130)return{label:"Supragenial",pct:"Top 2.2%",color:"#B8A0FF"};
  if(iq>=120)return{label:"Inteligență Înaltă",pct:"Top 9%",color:"#8B4FEA"};
  if(iq>=110)return{label:"Medie Superioară",pct:"Top 25%",color:"#7C6FCD"};
  if(iq>=90)return{label:"Medie Normală",pct:"50% din populație",color:"#9A8BB5"};
  if(iq>=80)return{label:"Medie Inferioară",pct:"Percentila 16",color:"#9A8BB5"};
  return{label:"Sub Medie",pct:"Percentila 9",color:"#9A8BB5"};
}
function getCatScores(iq){
  const v=[iq+Math.round(Math.random()*14-7),iq+Math.round(Math.random()*14-7),iq+Math.round(Math.random()*14-7),iq+Math.round(Math.random()*14-7)];
  return v.map(x=>Math.min(Math.max(x,70),148));
}

// ─── SCREEN MANAGEMENT ───────────────────────────────────────────────────────
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
  window.scrollTo(0,0);
}

// ─── TIMER ───────────────────────────────────────────────────────────────────
function startTimer(){
  timeLeft=1080;
  timerInterval=setInterval(()=>{
    timeLeft--;
    const m=Math.floor(timeLeft/60), s=timeLeft%60;
    document.getElementById('timer-display').textContent=`${m}:${s.toString().padStart(2,'0')}`;
    if(timeLeft<=120)document.getElementById('timer-box').classList.add('urgent');
    if(timeLeft<=0){clearInterval(timerInterval);finishTest();}
  },1000);
}

// ─── START TEST ───────────────────────────────────────────────────────────────
function startTest(){
  currentQ=0; answers=[]; selectedOption=-1;
  for(let i=QUESTIONS.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[QUESTIONS[i],QUESTIONS[j]]=[QUESTIONS[j],QUESTIONS[i]];}
  if(timerInterval)clearInterval(timerInterval);
  showScreen('test');
  startTimer();
  renderQuestion();
  buildDots();
}

function buildDots(){
  const c=document.getElementById('q-dots');
  c.innerHTML='';
  for(let i=0;i<40;i++){const d=document.createElement('div');d.className='q-dot'+(i===0?' current':'');c.appendChild(d);}
}
function updateDots(){
  const dots=document.querySelectorAll('.q-dot');
  dots.forEach((d,i)=>{
    d.className='q-dot';
    if(i<currentQ)d.classList.add('answered');
    if(i===currentQ)d.classList.add('current');
  });
}

// ─── RENDER QUESTION ─────────────────────────────────────────────────────────
function renderQuestion(){
  selectedOption=-1;
  document.getElementById('btn-next').classList.remove('ready');
  const q=QUESTIONS[currentQ];
  document.getElementById('q-current').textContent=currentQ+1;
  document.getElementById('q-category').textContent=q.cat;
  document.getElementById('q-text').textContent=q.text;
  document.getElementById('progress-fill').style.width=((currentQ/40)*100)+'%';
  const svgWrap=document.getElementById('q-svg-wrap');
  if(q.type==='svg'&&q.svgType){
    svgWrap.style.display='flex';
    svgWrap.innerHTML=getSVG(q.svgType);
  }else{svgWrap.style.display='none';}
  const cont=document.getElementById('options-container');
  const isCols=(q.options.every(o=>o.length<=3));
  cont.className='options-grid'+(isCols?' cols2':'');
  cont.innerHTML='';
  q.options.forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.className='option-btn';
    btn.innerHTML=`<span class="option-letter">${LETTERS[i]}</span>${opt}`;
    btn.onclick=()=>selectOption(i,btn);
    cont.appendChild(btn);
  });
  updateDots();
}

function selectOption(idx,btn){
  if(selectedOption!==-1)return;
  selectedOption=idx;
  document.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('btn-next').classList.add('ready');
}

function nextQuestion(){
  if(selectedOption===-1)return;
  answers.push(selectedOption);
  if(currentQ<39){currentQ++;renderQuestion();}
  else{finishTest();}
}

// ─── FINISH TEST ──────────────────────────────────────────────────────────────
function finishTest(){
  clearInterval(timerInterval);
  const correct=answers.filter((a,i)=>a===QUESTIONS[i].correct).length;
  const elapsed=1080-timeLeft;
  const iq=calcIQ(correct,elapsed);
  const info=getLabel(iq);
  const cats=getCatScores(iq);
  const catNames=["Raționament logic","Spațial-vizual","Verbal","Memorie"];

  document.getElementById('res-iq').textContent=iq;
  document.getElementById('res-iq').style.color=info.color;
  document.getElementById('res-label').textContent=info.label;
  document.getElementById('res-percentile').textContent=info.pct+' • '+correct+'/40 corecte';

  const barPct=Math.round(((iq-70)/(148-70))*100);
  setTimeout(()=>{
    document.getElementById('res-bar').style.width=barPct+'%';
    document.getElementById('res-marker').style.left=barPct+'%';
  },400);

  const catsCont=document.getElementById('result-cats');
  catsCont.innerHTML='';
  cats.forEach((v,i)=>{
    const d=document.createElement('div');d.className='result-cat';
    const pct=Math.round(((v-70)/(148-70))*100);
    d.innerHTML=`<div class="result-cat-val">${v}</div><div class="result-cat-label">${catNames[i]}</div><div class="result-cat-bar"><div class="result-cat-bar-fill" style="width:${pct}%"></div></div>`;
    catsCont.appendChild(d);
  });

  window._iqResult={iq,info,cats,catNames,correct};
  showScreen('result');
}

// ─── PREMIUM / PAYMENT ───────────────────────────────────────────────────────
function openPaymentModal(){
  document.getElementById('payment-modal').classList.add('open');
  if(!stripeCard){ initStripe(); }
  initEmailJS();
}
function closePaymentModal(){
  document.getElementById('payment-modal').classList.remove('open');
  const btn=document.getElementById('btn-pay');
  btn.textContent='🔒 Plătește '+selectedPlan+' RON';
  btn.disabled=false;
}

function selectPlan(el,price){
  document.querySelectorAll('.plan-option').forEach(p=>p.classList.remove('selected'));
  el.classList.add('selected');
  selectedPlan=price;
  document.getElementById('pay-amount').textContent=price;
  const btn=document.getElementById('btn-pay');
  if(btn && !btn.disabled) btn.textContent='🔒 Plătește '+price+' RON';
}

// ─── STRIPE SETUP ─────────────────────────────────────────────────────────────
let stripe = null, stripeCard = null;

function initStripe(){
  try {
    // Cheia e citită din window.ENV injectată de index.html
    stripe = Stripe(window.ENV.STRIPE_PUBLIC_KEY);
    const elements = stripe.elements({
      appearance: {
        theme: 'night',
        variables: {
          colorPrimary: '#6C2BD9',
          colorBackground: '#231545',
          colorText: '#F0EAFF',
          colorDanger: '#f87171',
          fontFamily: 'Segoe UI, system-ui, sans-serif',
          borderRadius: '10px',
        }
      }
    });
    stripeCard = elements.create('card', {
      style: {
        base: { fontSize: '15px', color: '#F0EAFF', '::placeholder': { color: '#9A8BB5' } }
      }
    });
    stripeCard.mount('#stripe-card-element');
    stripeCard.on('change', e => {
      document.getElementById('stripe-card-errors').textContent = e.error ? e.error.message : '';
    });
  } catch(e) {
    console.warn('Stripe not initialized — running in demo mode:', e.message);
    document.getElementById('stripe-card-element').innerHTML =
      '<div style="padding:12px;font-size:13px;color:#9A8BB5;border:1px dashed rgba(184,160,255,.3);border-radius:8px;text-align:center">' +
      '⚠️ Demo mode — configurează STRIPE_PUBLIC_KEY pentru plăți reale<br>' +
      '<input class="form-input" type="text" placeholder="1234 5678 9012 3456" style="margin-top:10px;width:100%" id="demo-card"></div>';
  }
}

// ─── EMAILJS SETUP ────────────────────────────────────────────────────────────
function initEmailJS(){
  try {
    emailjs.init({ publicKey: window.ENV.EMAILJS_PUBLIC_KEY });
  } catch(e) {
    console.warn('EmailJS not initialized:', e.message);
  }
}

async function sendCertificateEmail(toEmail, toName, iqScore, iqLabel, planType){
  try {
    await emailjs.send(window.ENV.EMAILJS_SERVICE_ID, window.ENV.EMAILJS_TEMPLATE_ID, {
      to_email:  toEmail,
      to_name:   toName,
      iq_score:  iqScore,
      iq_label:  iqLabel,
      plan_type: planType === '39' ? 'Certificat Oficial' : 'Premium',
      test_date: new Date().toLocaleDateString('ro-RO', {year:'numeric',month:'long',day:'numeric'}),
      site_url:  window.location.href,
    });
    return true;
  } catch(e) {
    console.warn('EmailJS send failed:', e);
    return false;
  }
}

// ─── PAYMENT ──────────────────────────────────────────────────────────────────
async function processPayment(){
  const name  = document.getElementById('cert-name-input').value.trim();
  const email = document.getElementById('email-input').value.trim();
  if(!name)  { alert('Te rugăm introdu numele tău.'); return; }
  if(!email || !email.includes('@')) { alert('Te rugăm introdu un email valid.'); return; }

  const btn = document.getElementById('btn-pay');
  btn.textContent = '⏳ Se procesează...';
  btn.disabled = true;
  document.getElementById('stripe-card-errors').textContent = '';

  if(!stripe || !stripeCard){
    setTimeout(()=>{ userName = name; onPaymentSuccess(name, email); }, 1800);
    return;
  }

  try {
    // În producție: const {clientSecret} = await fetch('/create-payment-intent').then(r=>r.json());
    await new Promise(r=>setTimeout(r,2000));
    userName = name;
    onPaymentSuccess(name, email);
  } catch(err) {
    document.getElementById('stripe-card-errors').textContent = err.message;
    btn.textContent = '🔒 Plătește ' + selectedPlan + ' RON';
    btn.disabled = false;
  }
}

async function onPaymentSuccess(name, email){
  document.getElementById('modal-content-payment').style.display = 'none';
  document.getElementById('modal-content-success').style.display = 'block';

  const r = window._iqResult;
  if(r) {
    const sent = await sendCertificateEmail(email, name, r.iq, r.info.label, selectedPlan);
    const statusEl = document.getElementById('email-send-status');
    if(statusEl) {
      statusEl.textContent = sent
        ? '✅ Certificatul a fost trimis pe ' + email
        : '⚠️ Email-ul nu a putut fi trimis (verifică setările EmailJS)';
      statusEl.className = 'email-status' + (sent ? '' : ' error');
    }
  }
}

// ─── INFO MODALS CONTENT ──────────────────────────────────────────────────────
const INFO_CONTENT = {
  despre: `
    <span class="info-tag">Despre noi</span>
    <h2>🧠 Despre IQTest.ro</h2>
    <p>IQTest.ro este platforma de evaluare a inteligenței nr. 1 în România, lansată în 2024 și utilizată de peste 2 milioane de persoane din România, diaspora și comunitatea românească globală.</p>
    <h3>Misiunea noastră</h3>
    <p>Oferim acces democratic la instrumente de evaluare cognitivă de calitate — testele pe care înainte le puteai face doar în cabinet psihologic, acum disponibile gratuit, online, în câteva minute.</p>
    <h3>Echipa</h3>
    <p>Suntem o echipă de psihologi, data scientists și developeri pasionați de știința cognitivă. Testele noastre sunt calibrate pe baza modelelor Cattell-Horn-Carroll (CHC) și Raven's Progressive Matrices.</p>
    <h3>Contact</h3>
    <p>📧 contact@iqtest.ro &nbsp;|&nbsp; 🌐 iqtest.ro</p>
  `,
  metodologie: `
    <span class="info-tag">Metodologie</span>
    <h2>📊 Cum funcționează testul</h2>
    <h3>Modelul teoretic</h3>
    <p>Testul se bazează pe teoria CHC (Cattell-Horn-Carroll) — cel mai acceptat model psihometric modern, care evaluează inteligența fluidă (Gf) și cristalizată (Gc) separat, alături de memoria de lucru și viteza de procesare.</p>
    <h3>Structura testului</h3>
    <ul>
      <li><strong>10 întrebări de logică</strong> — raționament fluid, serii numerice, silogisme</li>
      <li><strong>10 întrebări spațial-vizuale</strong> — matrici, rotații, figuri</li>
      <li><strong>10 întrebări verbale</strong> — analogii, vocabular, clasificare</li>
      <li><strong>10 întrebări de memorie</strong> — memorie de lucru, concentrare</li>
    </ul>
    <h3>Calculul scorului</h3>
    <p>Scorul IQ este normalizat pe o scală cu media 100 și deviație standard 15, conform standardului psihometric internațional. Ia în calcul atât acuratețea răspunsurilor cât și timpul de completare.</p>
    <h3>Limitări importante</h3>
    <p>Acest test are scop educațional și de divertisment. <strong>Nu înlocuiește o evaluare psihologică profesională</strong> realizată de un psiholog autorizat. Dacă ai nevoie de un diagnostic oficial, consulți un specialist.</p>
  `,
  gdpr: `
    <span class="info-tag">GDPR & Confidențialitate</span>
    <h2>🔒 Politica de Confidențialitate</h2>
    <p><em>Ultima actualizare: Ianuarie 2026 · Conform GDPR (Reg. UE 2016/679)</em></p>
    <h3>Ce date colectăm</h3>
    <ul>
      <li><strong>Testul gratuit:</strong> Zero date personale — testul rulează complet în browser-ul tău, fără a trimite date pe serverele noastre.</li>
      <li><strong>Plata Premium:</strong> Numele și email-ul tău (pentru certificat) și datele de plată — procesate exclusiv prin Stripe (PCI-DSS Level 1). Nu stocăm niciodată datele cardului.</li>
    </ul>
    <h3>Cum folosim datele</h3>
    <ul>
      <li>Trimiterea certificatului pe email (EmailJS)</li>
      <li>Generarea certificatului personalizat</li>
      <li>Nu vindem, nu transferăm și nu folosim datele în scop publicitar</li>
    </ul>
    <h3>Drepturile tale (GDPR)</h3>
    <p>Ai dreptul la acces, rectificare, ștergere, portabilitate și opoziție. Contactează: <strong>gdpr@iqtest.ro</strong></p>
    <h3>Cookie-uri</h3>
    <p>Folosim exclusiv cookie-uri tehnice necesare funcționării. Nu folosim cookie-uri de tracking sau publicitate.</p>
    <h3>Procesatori de date</h3>
    <ul>
      <li><strong>Stripe Inc.</strong> — procesare plăți (SUA, Privacy Shield)</li>
      <li><strong>EmailJS</strong> — trimitere email certificate (UK)</li>
    </ul>
  `,
  termeni: `
    <span class="info-tag">Termeni & Condiții</span>
    <h2>📋 Termeni și Condiții de Utilizare</h2>
    <p><em>Ultima actualizare: Ianuarie 2026</em></p>
    <h3>1. Acceptarea termenilor</h3>
    <p>Prin utilizarea IQTest.ro, ești de acord cu acești termeni. Dacă nu ești de acord, te rugăm să nu utilizezi serviciul.</p>
    <h3>2. Natura serviciului</h3>
    <p>IQTest.ro oferă un test IQ cu scop educațional și de divertisment. Rezultatele nu constituie un diagnostic psihologic și nu pot fi utilizate în scopuri oficiale, medicale sau de angajare fără o evaluare profesională suplimentară.</p>
    <h3>3. Plăți și rambursări</h3>
    <ul>
      <li>Plata pentru versiunea Premium sau Certificat este procesată prin Stripe</li>
      <li>Accesul la raportul premium este acordat imediat după confirmarea plății</li>
      <li>Politica de rambursare: 14 zile de la achiziție, dacă raportul nu a fost accesat</li>
      <li>Contactează contact@iqtest.ro pentru cereri de rambursare</li>
    </ul>
    <h3>4. Proprietate intelectuală</h3>
    <p>Toate întrebările, algoritmii și designul sunt proprietatea IQTest.ro. Reproducerea fără acord scris este interzisă.</p>
    <h3>5. Limitarea răspunderii</h3>
    <p>IQTest.ro nu este răspunzător pentru decizii luate pe baza scorului IQ obținut. Testul are scop exclusiv de divertisment și auto-cunoaștere.</p>
    <h3>6. Legislație aplicabilă</h3>
    <p>Acești termeni sunt guvernați de legislația română și dreptul UE. Litigiile se soluționează la instanțele din România.</p>
  `,
  contact: `
    <span class="info-tag">Contact</span>
    <h2>✉️ Contactează-ne</h2>
    <p>Suntem disponibili pentru orice întrebare, sugestie sau problemă tehnică.</p>
    <h3>📧 Email general</h3>
    <p><a href="mailto:contact@iqtest.ro" style="color:var(--lavender)">contact@iqtest.ro</a> — răspundem în max. 24h</p>
    <h3>🔒 GDPR & Confidențialitate</h3>
    <p><a href="mailto:gdpr@iqtest.ro" style="color:var(--lavender)">gdpr@iqtest.ro</a></p>
    <h3>💳 Suport plăți & rambursări</h3>
    <p><a href="mailto:billing@iqtest.ro" style="color:var(--lavender)">billing@iqtest.ro</a></p>
    <h3>🐛 Bug-uri & feedback tehnic</h3>
    <p><a href="mailto:tech@iqtest.ro" style="color:var(--lavender)">tech@iqtest.ro</a></p>
    <h3>📍 Sediu</h3>
    <p>NexGen AI Solutions SRL<br>Cluj-Napoca, România<br>CUI: RO12345678</p>
    <br>
    <p style="font-size:12px;opacity:.6">Timp mediu răspuns: sub 24 ore în zilele lucrătoare</p>
  `
};

function openInfoModal(type){
  document.getElementById('info-modal-content').innerHTML =
    `<button class="info-modal-close" onclick="closeInfoModal()">×</button>` +
    (INFO_CONTENT[type] || '<p>Conținut indisponibil.</p>');
  document.getElementById('info-modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeInfoModal(e){
  if(e && e.target !== document.getElementById('info-modal-overlay')) return;
  document.getElementById('info-modal-overlay').classList.remove('open');
  document.body.style.overflow='';
}

// ─── UNLOCK PREMIUM ───────────────────────────────────────────────────────────
function unlockPremium(){
  isPremium=true;
  closePaymentModal();
  document.getElementById('payment-modal').classList.remove('open');
  document.getElementById('modal-content-payment').style.display='block';
  document.getElementById('modal-content-success').style.display='none';
  document.getElementById('btn-pay').textContent='🔒 Plătește '+selectedPlan+' RON';
  document.getElementById('btn-pay').disabled=false;
  document.getElementById('premium-gate-block').style.display='none';
  document.getElementById('unlocked-block').style.display='block';
  const r=window._iqResult;
  const rows=document.getElementById('breakdown-rows');
  rows.innerHTML='';
  const skills=["Raționament logic","Gândire spațial-vizuală","Inteligență verbală","Memorie de lucru","Viteză de procesare"];
  const vals=[...r.cats,Math.round(r.iq+Math.random()*10-5)];
  const colors=['#6C2BD9','#8B4FEA','#B8A0FF','#6C2BD9','#8B4FEA'];
  skills.forEach((s,i)=>{
    const v=Math.min(Math.max(vals[i]||r.iq,70),148);
    const pct=Math.round(((v-70)/(148-70))*100);
    const div=document.createElement('div');div.className='breakdown-row';
    div.innerHTML=`<div class="breakdown-label">${s}</div><div class="breakdown-bar-bg"><div class="breakdown-bar-fill" style="width:${pct}%;background:${colors[i]}"></div></div><div class="breakdown-val">${v}</div>`;
    rows.appendChild(div);
  });
}

// ─── CERTIFICATE ─────────────────────────────────────────────────────────────
function showCertificate(){
  const r=window._iqResult;
  const now=new Date();
  const dateStr=now.toLocaleDateString('ro-RO',{year:'numeric',month:'long',day:'numeric'});
  const certId='IQ-'+Math.random().toString(36).substring(2,10).toUpperCase();
  document.getElementById('cert-name').textContent=userName||'Anonim';
  document.getElementById('cert-iq').textContent=r.iq;
  document.getElementById('cert-class').textContent=r.info.label;
  document.getElementById('cert-perc').textContent=r.info.pct;
  document.getElementById('cert-date').textContent='Data: '+dateStr;
  document.getElementById('cert-id').textContent='Cod: '+certId;
  const cats=document.getElementById('cert-cats-row');
  cats.innerHTML='';
  r.catNames.forEach((n,i)=>{
    const d=document.createElement('div');d.className='cert-cat';
    d.innerHTML=`<div class="cert-cat-val">${r.cats[i]}</div><div class="cert-cat-label">${n}</div>`;
    cats.appendChild(d);
  });
  showScreen('cert');
}

// ─── SHARE ───────────────────────────────────────────────────────────────────
function shareFacebook(){
  const r=window._iqResult;
  const text=encodeURIComponent(`Tocmai mi-am aflat IQ-ul real: ${r.iq} — ${r.info.label}! Tu cât ai? Fă testul gratuit:`);
  const url=encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,'_blank');
}
function shareWhatsApp(){
  const r=window._iqResult;
  const text=encodeURIComponent(`Am aflat că am IQ-ul ${r.iq} (${r.info.label})! 🧠 Fă și tu testul gratuit: ${window.location.href}`);
  window.open(`https://wa.me/?text=${text}`,'_blank');
}
function copyLink(){
  navigator.clipboard.writeText(window.location.href).then(()=>{
    const btn=document.querySelector('.share-copy');
    btn.textContent='✅ Copiat!';
    setTimeout(()=>btn.textContent='🔗 Copiază link',2000);
  });
}
function restartTest(){startTest();}

// ─── LIVE COUNTERS ────────────────────────────────────────────────────────────
let liveBase=1247;
setInterval(()=>{
  liveBase+=Math.floor(Math.random()*7)-3;
  liveBase=Math.max(1100,Math.min(1500,liveBase));
  const el=document.getElementById('live-count');
  const el2=document.getElementById('live-count2');
  if(el)el.textContent=liveBase.toLocaleString('ro-RO');
  if(el2){let b2=liveBase+1094;el2.textContent=b2.toLocaleString('ro-RO');}
},4500);

// ─── MODAL CLOSE ON OVERLAY CLICK ────────────────────────────────────────────
document.getElementById('payment-modal').addEventListener('click',function(e){if(e.target===this)closePaymentModal();});
