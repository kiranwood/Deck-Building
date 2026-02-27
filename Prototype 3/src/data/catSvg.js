export const CAT_SVG = {
  fire: (seed = 0) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bg${seed}" cx="50%" cy="70%" r="70%"><stop offset="0%" stop-color="#ff6600" stop-opacity="0.35"/><stop offset="100%" stop-color="#1a0000" stop-opacity="0"/></radialGradient></defs>
    <rect width="100" height="100" fill="#1a0808"/>
    <rect width="100" height="100" fill="url(#bg${seed})"/>
    <ellipse cx="30" cy="88" rx="10" ry="18" fill="#ff5500" opacity="0.7"/>
    <ellipse cx="50" cy="82" rx="12" ry="24" fill="#ff7700" opacity="0.8"/>
    <ellipse cx="70" cy="88" rx="9" ry="16" fill="#ff4400" opacity="0.7"/>
    <ellipse cx="50" cy="78" rx="8" ry="16" fill="#ffaa00" opacity="0.6"/>
    <ellipse cx="50" cy="70" rx="22" ry="18" fill="#cc3300"/>
    <circle cx="50" cy="48" r="20" fill="#dd4411"/>
    <polygon points="33,32 28,14 42,28" fill="#cc3300"/>
    <polygon points="67,32 72,14 58,28" fill="#cc3300"/>
    <polygon points="34,30 30,18 41,28" fill="#ff6644"/>
    <polygon points="66,30 70,18 59,28" fill="#ff6644"/>
    <ellipse cx="44" cy="47" rx="5" ry="6" fill="#111"/>
    <ellipse cx="56" cy="47" rx="5" ry="6" fill="#111"/>
    <circle cx="44" cy="47" r="3" fill="#ff4400"/>
    <circle cx="56" cy="47" r="3" fill="#ff4400"/>
    <circle cx="45" cy="46" r="1.2" fill="#fff"/>
    <circle cx="57" cy="46" r="1.2" fill="#fff"/>
    <polygon points="50,53 48,56 52,56" fill="#ff8866"/>
    <path d="M48,57 Q50,60 52,57" fill="none" stroke="#ff8866" stroke-width="1"/>
    <line x1="52" y1="55" x2="74" y2="52" stroke="#ffaa88" stroke-width="0.8" opacity="0.7"/>
    <line x1="52" y1="57" x2="74" y2="58" stroke="#ffaa88" stroke-width="0.8" opacity="0.7"/>
    <line x1="48" y1="55" x2="26" y2="52" stroke="#ffaa88" stroke-width="0.8" opacity="0.7"/>
    <line x1="48" y1="57" x2="26" y2="58" stroke="#ffaa88" stroke-width="0.8" opacity="0.7"/>
    <circle cx="44" cy="47" r="2" fill="#ff6600" opacity="0.7"/>
    <circle cx="56" cy="47" r="2" fill="#ff6600" opacity="0.7"/>
  </svg>`,

  water: (seed = 0) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bg${seed}" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#0066ff" stop-opacity="0.3"/><stop offset="100%" stop-color="#001122" stop-opacity="0"/></radialGradient></defs>
    <rect width="100" height="100" fill="#060e1e"/>
    <rect width="100" height="100" fill="url(#bg${seed})"/>
    <circle cx="20" cy="30" r="4" fill="none" stroke="#2288ff" stroke-width="1" opacity="0.5"/>
    <circle cx="78" cy="50" r="3" fill="none" stroke="#44aaff" stroke-width="1" opacity="0.4"/>
    <circle cx="15" cy="70" r="5" fill="none" stroke="#2266cc" stroke-width="1" opacity="0.3"/>
    <circle cx="82" cy="20" r="2.5" fill="none" stroke="#44bbff" stroke-width="1" opacity="0.4"/>
    <ellipse cx="50" cy="85" rx="30" ry="8" fill="none" stroke="#1166dd" stroke-width="1" opacity="0.5"/>
    <ellipse cx="50" cy="85" rx="20" ry="5" fill="none" stroke="#2288ff" stroke-width="1" opacity="0.4"/>
    <ellipse cx="50" cy="72" rx="20" ry="16" fill="#1144aa"/>
    <circle cx="50" cy="50" r="20" fill="#1a5acc"/>
    <polygon points="33,34 27,14 42,30" fill="#1144aa"/>
    <polygon points="67,34 73,14 58,30" fill="#1144aa"/>
    <polygon points="34,32 29,17 41,30" fill="#3377ee"/>
    <polygon points="66,32 71,17 59,30" fill="#3377ee"/>
    <ellipse cx="44" cy="49" rx="5" ry="6" fill="#090e1a"/>
    <ellipse cx="56" cy="49" rx="5" ry="6" fill="#090e1a"/>
    <ellipse cx="44" cy="49" rx="3" ry="4" fill="#0044cc"/>
    <ellipse cx="56" cy="49" rx="3" ry="4" fill="#0044cc"/>
    <circle cx="45" cy="47" r="1.2" fill="#fff"/>
    <circle cx="57" cy="47" r="1.2" fill="#fff"/>
    <polygon points="50,55 48,58 52,58" fill="#88bbff"/>
    <path d="M48,59 Q50,62 52,59" fill="none" stroke="#88bbff" stroke-width="1"/>
    <line x1="52" y1="56" x2="74" y2="53" stroke="#aaccff" stroke-width="0.8" opacity="0.6"/>
    <line x1="52" y1="58" x2="74" y2="60" stroke="#aaccff" stroke-width="0.8" opacity="0.6"/>
    <line x1="48" y1="56" x2="26" y2="53" stroke="#aaccff" stroke-width="0.8" opacity="0.6"/>
    <line x1="48" y1="58" x2="26" y2="60" stroke="#aaccff" stroke-width="0.8" opacity="0.6"/>
    <circle cx="44" cy="49" r="2" fill="#2299ff" opacity="0.6"/>
    <circle cx="56" cy="49" r="2" fill="#2299ff" opacity="0.6"/>
  </svg>`,

  earth: (seed = 0) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bg${seed}" cx="50%" cy="80%" r="70%"><stop offset="0%" stop-color="#44aa22" stop-opacity="0.3"/><stop offset="100%" stop-color="#001100" stop-opacity="0"/></radialGradient></defs>
    <rect width="100" height="100" fill="#080f09"/>
    <rect width="100" height="100" fill="url(#bg${seed})"/>
    <path d="M10,90 Q20,65 35,75" fill="none" stroke="#2a6614" stroke-width="1.5" opacity="0.6"/>
    <ellipse cx="35" cy="75" rx="6" ry="4" fill="#336622" opacity="0.7" transform="rotate(-30,35,75)"/>
    <path d="M90,85 Q78,62 65,72" fill="none" stroke="#2a6614" stroke-width="1.5" opacity="0.6"/>
    <ellipse cx="65" cy="72" rx="6" ry="4" fill="#336622" opacity="0.7" transform="rotate(30,65,72)"/>
    <ellipse cx="50" cy="72" rx="21" ry="17" fill="#2d5e1a"/>
    <circle cx="50" cy="49" r="20" fill="#3a7022"/>
    <polygon points="33,33 26,12 42,29" fill="#2d5e1a"/>
    <polygon points="67,33 74,12 58,29" fill="#2d5e1a"/>
    <polygon points="34,31 28,16 41,29" fill="#55aa33"/>
    <polygon points="66,31 72,16 59,29" fill="#55aa33"/>
    <ellipse cx="29" cy="14" rx="5" ry="3" fill="#44aa22" opacity="0.8" transform="rotate(-45,29,14)"/>
    <ellipse cx="71" cy="14" rx="5" ry="3" fill="#44aa22" opacity="0.8" transform="rotate(45,71,14)"/>
    <ellipse cx="44" cy="48" rx="5" ry="6" fill="#081408"/>
    <ellipse cx="56" cy="48" rx="5" ry="6" fill="#081408"/>
    <ellipse cx="44" cy="48" rx="3" ry="4" fill="#226611"/>
    <ellipse cx="56" cy="48" rx="3" ry="4" fill="#226611"/>
    <circle cx="45" cy="46" r="1.2" fill="#fff"/>
    <circle cx="57" cy="46" r="1.2" fill="#fff"/>
    <polygon points="50,54 48,57 52,57" fill="#88cc66"/>
    <path d="M48,58 Q50,61 52,58" fill="none" stroke="#88cc66" stroke-width="1"/>
    <line x1="52" y1="55" x2="74" y2="52" stroke="#aaddaa" stroke-width="0.8" opacity="0.6"/>
    <line x1="52" y1="57" x2="74" y2="59" stroke="#aaddaa" stroke-width="0.8" opacity="0.6"/>
    <line x1="48" y1="55" x2="26" y2="52" stroke="#aaddaa" stroke-width="0.8" opacity="0.6"/>
    <line x1="48" y1="57" x2="26" y2="59" stroke="#aaddaa" stroke-width="0.8" opacity="0.6"/>
    <circle cx="44" cy="48" r="2" fill="#44cc22" opacity="0.6"/>
    <circle cx="56" cy="48" r="2" fill="#44cc22" opacity="0.6"/>
  </svg>`,

  air: (seed = 0) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bg${seed}" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#8888ff" stop-opacity="0.25"/><stop offset="100%" stop-color="#000814" stop-opacity="0"/></radialGradient></defs>
    <rect width="100" height="100" fill="#0a0a1c"/>
    <rect width="100" height="100" fill="url(#bg${seed})"/>
    <path d="M5,30 Q30,25 60,32 Q85,38 95,33" fill="none" stroke="#8888cc" stroke-width="1" opacity="0.35"/>
    <path d="M2,50 Q25,44 55,51 Q80,57 98,50" fill="none" stroke="#aaaadd" stroke-width="0.8" opacity="0.3"/>
    <path d="M8,68 Q35,62 62,70 Q82,75 96,68" fill="none" stroke="#9999cc" stroke-width="1" opacity="0.3"/>
    <circle cx="15" cy="15" r="1" fill="#ccccff" opacity="0.6"/>
    <circle cx="82" cy="22" r="1.2" fill="#aaaaff" opacity="0.5"/>
    <circle cx="72" cy="82" r="1" fill="#bbbbff" opacity="0.4"/>
    <circle cx="22" cy="80" r="0.8" fill="#ccccff" opacity="0.5"/>
    <ellipse cx="50" cy="73" rx="20" ry="15" fill="#3d3d8a"/>
    <circle cx="50" cy="50" r="20" fill="#5050aa"/>
    <polygon points="33,34 27,13 42,30" fill="#3d3d8a"/>
    <polygon points="67,34 73,13 58,30" fill="#3d3d8a"/>
    <polygon points="34,32 29,17 41,30" fill="#8080cc"/>
    <polygon points="66,32 71,17 59,30" fill="#8080cc"/>
    <ellipse cx="44" cy="49" rx="5" ry="6" fill="#08080e"/>
    <ellipse cx="56" cy="49" rx="5" ry="6" fill="#08080e"/>
    <ellipse cx="44" cy="49" rx="3" ry="4" fill="#5555aa"/>
    <ellipse cx="56" cy="49" rx="3" ry="4" fill="#5555aa"/>
    <circle cx="45" cy="47" r="1.2" fill="#fff"/>
    <circle cx="57" cy="47" r="1.2" fill="#fff"/>
    <polygon points="50,55 48,58 52,58" fill="#aaaadd"/>
    <path d="M48,59 Q50,62 52,59" fill="none" stroke="#aaaadd" stroke-width="1"/>
    <line x1="52" y1="56" x2="74" y2="53" stroke="#ccccff" stroke-width="0.8" opacity="0.5"/>
    <line x1="52" y1="58" x2="74" y2="60" stroke="#ccccff" stroke-width="0.8" opacity="0.5"/>
    <line x1="48" y1="56" x2="26" y2="53" stroke="#ccccff" stroke-width="0.8" opacity="0.5"/>
    <line x1="48" y1="58" x2="26" y2="60" stroke="#ccccff" stroke-width="0.8" opacity="0.5"/>
    <circle cx="44" cy="49" r="2" fill="#aaaaff" opacity="0.65"/>
    <circle cx="56" cy="49" r="2" fill="#aaaaff" opacity="0.65"/>
  </svg>`,

  fusion: (seed = 0) => `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id="bg${seed}" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#ffcc00" stop-opacity="0.3"/><stop offset="60%" stop-color="#aa44ff" stop-opacity="0.2"/><stop offset="100%" stop-color="#000814" stop-opacity="0"/></radialGradient></defs>
    <rect width="100" height="100" fill="#0a0614"/>
    <rect width="100" height="100" fill="url(#bg${seed})"/>
    <circle cx="18" cy="20" r="1.5" fill="#ffcc00" opacity="0.7"/>
    <circle cx="82" cy="18" r="1" fill="#aa44ff" opacity="0.6"/>
    <circle cx="90" cy="75" r="1.5" fill="#ffcc00" opacity="0.5"/>
    <circle cx="10" cy="80" r="1" fill="#ff44aa" opacity="0.6"/>
    <circle cx="50" cy="8" r="2" fill="#ffddaa" opacity="0.5"/>
    <polygon points="50,5 52,14 61,14 54,19 57,28 50,23 43,28 46,19 39,14 48,14" fill="#ffcc00" opacity="0.3"/>
    <ellipse cx="50" cy="72" rx="22" ry="17" fill="#6622aa"/>
    <circle cx="50" cy="49" r="20" fill="#8833cc"/>
    <path d="M50,29 A20,20 0 0,1 70,49 A20,20 0 0,1 50,69 Z" fill="#cc8800" opacity="0.5"/>
    <polygon points="33,33 26,11 42,29" fill="#6622aa"/>
    <polygon points="67,33 74,11 58,29" fill="#cc8800" opacity="0.9"/>
    <polygon points="34,31 29,15 41,29" fill="#cc66ff"/>
    <polygon points="66,31 71,15 59,29" fill="#ffcc44"/>
    <ellipse cx="44" cy="48" rx="5" ry="6" fill="#070410"/>
    <ellipse cx="56" cy="48" rx="5" ry="6" fill="#070410"/>
    <ellipse cx="44" cy="48" rx="3" ry="4" fill="#aa00ff"/>
    <ellipse cx="56" cy="48" rx="3" ry="4" fill="#ffaa00"/>
    <circle cx="45" cy="46" r="1.2" fill="#fff"/>
    <circle cx="57" cy="46" r="1.2" fill="#fff"/>
    <polygon points="50,54 48,57 52,57" fill="#ffcc88"/>
    <path d="M48,58 Q50,61 52,58" fill="none" stroke="#ffcc88" stroke-width="1"/>
    <line x1="52" y1="55" x2="74" y2="52" stroke="#ffeecc" stroke-width="0.8" opacity="0.6"/>
    <line x1="52" y1="57" x2="74" y2="59" stroke="#ffeecc" stroke-width="0.8" opacity="0.6"/>
    <line x1="48" y1="55" x2="26" y2="52" stroke="#ffeecc" stroke-width="0.8" opacity="0.6"/>
    <line x1="48" y1="57" x2="26" y2="59" stroke="#ffeecc" stroke-width="0.8" opacity="0.6"/>
    <circle cx="44" cy="48" r="2.5" fill="#aa00ff" opacity="0.6"/>
    <circle cx="56" cy="48" r="2.5" fill="#ffaa00" opacity="0.6"/>
  </svg>`
}
