export const BASE_CARDS = [
  // ── FIRE CATS ──────────────────────────────
  { id: 'f1',  name: 'Ember Kitten',      type: 'fire',  energy: 2, attack: 42, defense: 18, ability: 'Ignite: Burns foe for 5 dmg/turn for 3 turns.' },
  { id: 'f2',  name: 'Blaze Tabby',       type: 'fire',  energy: 3, attack: 55, defense: 22, ability: 'Inferno Claw: 55 damage, ignores 10 defense.' },
  { id: 'f3',  name: 'Magma Mane',        type: 'fire',  energy: 4, attack: 68, defense: 28, ability: 'Lava Coat: Reflects 12 dmg to attackers.' },
  { id: 'f4',  name: 'Ash Prowler',       type: 'fire',  energy: 2, attack: 38, defense: 30, ability: 'Smoke Screen: Reduces enemy accuracy by 25%.' },
  { id: 'f5',  name: 'Plasma Whisker',    type: 'fire',  energy: 5, attack: 80, defense: 20, ability: 'Charge Beam: Deals 80 dmg, ignores all defense.' },
  { id: 'f6',  name: 'Cinder Pounce',     type: 'fire',  energy: 3, attack: 50, defense: 25, ability: 'Wildfire: Hits all enemies for 30 dmg each.' },
  { id: 'f7',  name: 'Solar Feline',      type: 'fire',  energy: 4, attack: 60, defense: 35, ability: 'Sunburst: Heals self 20 HP after attacking.' },
  { id: 'f8',  name: 'Pyro Rex',          type: 'fire',  energy: 5, attack: 72, defense: 40, ability: 'Meteor Strike: 35% chance for double damage.' },
  { id: 'f9',  name: 'Torch Lynx',        type: 'fire',  energy: 3, attack: 48, defense: 20, ability: 'Tail Whip: Disables enemy ability for 2 turns.' },
  { id: 'f10', name: 'Flare Sphinx',      type: 'fire',  energy: 4, attack: 65, defense: 30, ability: 'Phoenix Roar: Returns from defeat once per game.' },
  { id: 'f11', name: 'Lava Longhair',     type: 'fire',  energy: 3, attack: 52, defense: 33, ability: 'Magma Fur: Deals 8 dmg on contact each turn.' },

  // ── WATER CATS ─────────────────────────────
  { id: 'w1',  name: 'Glacial Paws',      type: 'water', energy: 3, attack: 28, defense: 55, ability: 'Frost Shell: Reduces incoming damage by 20%.' },
  { id: 'w2',  name: 'Tide Neko',         type: 'water', energy: 3, attack: 40, defense: 42, ability: 'Tidal Wave: Hits all enemies; reduces energy by 1.' },
  { id: 'w3',  name: 'Blizzard Mew',      type: 'water', energy: 4, attack: 35, defense: 60, ability: 'Permafrost: Freezes enemy for 1 turn (30% chance).' },
  { id: 'w4',  name: 'Coral Cat',         type: 'water', energy: 2, attack: 25, defense: 45, ability: 'Bubble Shield: Absorbs next 30 incoming damage.' },
  { id: 'w5',  name: 'Storm Siamese',     type: 'water', energy: 4, attack: 50, defense: 38, ability: 'Lightning Rain: Hits 3 random enemies for 25 dmg.' },
  { id: 'w6',  name: 'Mist Manx',         type: 'water', energy: 2, attack: 30, defense: 40, ability: 'Vanishing Fog: 40% chance to dodge next attack.' },
  { id: 'w7',  name: 'Deep Purr',         type: 'water', energy: 5, attack: 45, defense: 65, ability: 'Abyss Pull: Prevents enemy from fleeing for 3 turns.' },
  { id: 'w8',  name: 'Frost Calico',      type: 'water', energy: 3, attack: 33, defense: 50, ability: 'Ice Breath: Slows enemy speed by 30% for 2 turns.' },
  { id: 'w9',  name: 'Rain Ragdoll',      type: 'water', energy: 2, attack: 22, defense: 35, ability: 'Healing Rain: Restores 15 HP each turn for 3 turns.' },
  { id: 'w10', name: 'Tsunami Tyke',      type: 'water', energy: 4, attack: 58, defense: 45, ability: 'Cascade: Deals +5 dmg for each turn in battle.' },
  { id: 'w11', name: 'Aqua Abyssinian',   type: 'water', energy: 3, attack: 36, defense: 48, ability: 'Whirlpool: Traps enemy; they take 10 dmg/turn.' },

  // ── EARTH CATS ─────────────────────────────
  { id: 'e1',  name: 'Mossy Mane',        type: 'earth', energy: 2, attack: 33, defense: 42, ability: 'Root Snare: Prevents enemy switching for 2 turns.' },
  { id: 'e2',  name: 'Boulder Tabby',     type: 'earth', energy: 4, attack: 55, defense: 65, ability: 'Quake Stomp: 20% chance to stun for 1 turn.' },
  { id: 'e3',  name: 'Petal Cat',        type: 'earth', energy: 2, attack: 28, defense: 38, ability: 'Spore Cloud: Poisons enemy for 6 dmg/turn.' },
  { id: 'e4',  name: 'Granite Grimalkin', type: 'earth', energy: 5, attack: 60, defense: 75, ability: 'Titan Guard: Halves all damage received this turn.' },
  { id: 'e5',  name: 'Thorn Tomcat',      type: 'earth', energy: 3, attack: 45, defense: 45, ability: 'Bramble Coat: 15 dmg reflected per hit received.' },
  { id: 'e6',  name: 'Mud Moggy',         type: 'earth', energy: 2, attack: 30, defense: 50, ability: 'Quicksand: Reduces enemy attack by 20% for 2 turns.' },
  { id: 'e7',  name: 'Vine Vanguard',     type: 'earth', energy: 3, attack: 40, defense: 55, ability: 'Entangle: Binds enemy; they skip next action.' },
  { id: 'e8',  name: 'Terra Titan',       type: 'earth', energy: 4, attack: 50, defense: 70, ability: 'Stone Skin: Immune to status effects this turn.' },
  { id: 'e9',  name: 'Fern Furball',      type: 'earth', energy: 2, attack: 25, defense: 40, ability: 'Photosynthesis: Heals 10 HP each turn in sunlight.' },
  { id: 'e10', name: 'Quartz Claw',       type: 'earth', energy: 3, attack: 48, defense: 52, ability: 'Crystal Slash: Pierces 30 defense points.' },
  { id: 'e11', name: 'Obsidian Ocelot',   type: 'earth', energy: 4, attack: 62, defense: 58, ability: 'Meteor Rain: Deals 25 dmg to all enemies.' },

  // ── AIR CATS ───────────────────────────────
  { id: 'a1',  name: 'Zephyr Fluff',      type: 'air',   energy: 1, attack: 24, defense: 24, ability: 'Gust: 35% chance to dodge the next attack.' },
  { id: 'a2',  name: 'Cyclone Calico',    type: 'air',   energy: 2, attack: 35, defense: 20, ability: 'Windslash: Strikes twice; each hit 50% damage.' },
  { id: 'a3',  name: 'Storm Sphinx',      type: 'air',   energy: 3, attack: 45, defense: 32, ability: 'Thunder Wing: 25% chance to paralyze foe.' },
  { id: 'a4',  name: 'Nimbus Neko',       type: 'air',   energy: 2, attack: 30, defense: 28, ability: 'Cloud Cover: All allies gain +15 dodge chance.' },
  { id: 'a5',  name: 'Gale Getter',       type: 'air',   energy: 3, attack: 42, defense: 26, ability: 'Tornado: Disrupts enemy formation; -20 ATK.' },
  { id: 'a6',  name: 'Mistral Mouser',    type: 'air',   energy: 2, attack: 28, defense: 35, ability: 'Tailwind: Increases own speed by 40%.' },
  { id: 'a7',  name: 'Shadow Mew',        type: 'air',   energy: 3, attack: 50, defense: 35, ability: 'Vanish: Untargetable for 1 full turn.' },
  { id: 'a8',  name: 'Breeze Bengal',     type: 'air',   energy: 1, attack: 20, defense: 22, ability: 'Quick Paw: Attacks first regardless of speed.' },
  { id: 'a9',  name: 'Vortex Vanguard',   type: 'air',   energy: 4, attack: 55, defense: 40, ability: 'Eye of Storm: Triples speed; doubles dodge for 1 turn.' },
  { id: 'a10', name: 'Static Sphynx',     type: 'air',   energy: 3, attack: 48, defense: 30, ability: 'Static Charge: Builds up; releases 80 dmg after 3 turns.' },
  { id: 'a11', name: 'Aurora Angora',     type: 'air',   energy: 4, attack: 38, defense: 50, ability: 'Northern Lights: Confuses all enemies for 2 turns.' },
]

export const TYPE_EMOJI = { fire: '🔥', water: '💧', earth: '🌿', air: '💨' }
