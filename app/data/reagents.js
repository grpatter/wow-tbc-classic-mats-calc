import sources from 'wow-tbc-classic-mats-calc/data/sources';

export class Reagent {
  constructor (id, name, source) {
    this.id = id;
    this.source = source;
    this.name = name;
  }
}

export default {
  //tbc starts here --

  primalMana: new Reagent(22457, 'Primal Mana', sources.drop),
  primalFire: new Reagent(21884, 'Primal Fire', sources.drop),
  primalWater: new Reagent(21885, 'Primal Water', sources.drop),
  primalShadow: new Reagent(22456, 'Primal Shadow', sources.drop),
  primalEarth: new Reagent(22452, 'Primal Earth', sources.drop),
  primalLife: new Reagent(21886, 'Primal Life', sources.drop),
  primalAir: new Reagent(22451, 'Primal Air', sources.drop),
  imbuedVial: new Reagent(18256, 'Imbued Vial', sources.vendor),
  goldenbarkApple: new Reagent(4539, 'Goldenbark Apple', sources.vendor),
  soothingSpices: new Reagent(3713, 'Soothing Spices', sources.vendor),
  hotSpices: new Reagent(2692, 'Hot Spices', sources.vendor),
  felIronCasing: new Reagent(23782, 'Fel Iron Casing', sources.engineering),

  terocone: new Reagent(22789, 'Terocone', sources.herbalism),
  felweed: new Reagent(22785, 'Felweed', sources.herbalism),
  ragveil: new Reagent(22787, 'Ragveil', sources.herbalism),
  felLotus: new Reagent(22794, 'Fel Lotus', sources.herbalism),
  manaThistle: new Reagent(22793, 'Mana Thistle', sources.herbalism),
  ancientLichen: new Reagent(22790, 'Ancient Lichen', sources.herbalism),
  netherbloom: new Reagent(22791, 'Netherbloom', sources.herbalism),
  nightmareVine: new Reagent(22792, 'Nightmare Vine', sources.herbalism),
  dreamingGlory: new Reagent(22786, 'Dreaming Glory', sources.herbalism),
  firebloom: new Reagent(4625, 'Firebloom', sources.herbalism),
  goldenSansam: new Reagent(13464, 'Golden Sansam', sources.herbalism),
  purpleLotus: new Reagent(8831, 'Purple Lotus', sources.herbalism),
  dreamfoil: new Reagent(13463, 'Dreamfoil', sources.herbalism),

  hugeSpottedFeltail: new Reagent(27515, 'Huge Spotted Feltail', sources.fishing),
  furiousCrawdad: new Reagent(27439, 'Furious Crawdad', sources.fishing),
  figlustersMudfish: new Reagent(27435, 'Figluster\'s Mudfish', sources.fishing),
  icefinBluefish: new Reagent(27437, 'Icefin Bluefish', sources.fishing),
  crescentTailSkullfish: new Reagent(33824, 'Crescent-Tail Skullfish', sources.fishing),
  goldenDarter: new Reagent(27438, 'Golden Darter', sources.fishing),

  warpedFlesh: new Reagent(27681, 'Warped Flesh', sources.drop),
  talbulkVenison: new Reagent(27682, 'Talbulk Venison', sources.drop),
  moteOfEarth: new Reagent(22573, 'Mote of Earth', sources.drop),
  moteOfWater: new Reagent(22578, 'Mote of Water', sources.drop),
  moteOfFire: new Reagent(22574, 'Mote of Fire', sources.drop),
  netherweaveCloth: new Reagent(21877, 'Netherweave Cloth', sources.drop),
  clefthoofMeat: new Reagent(27678, 'Clefthoof Meat', sources.drop),
  ravagerFlesh: new Reagent(27674, 'Ravager Flesh', sources.drop),
  chunkOBasilisk: new Reagent(27677, 'Chunk o\' Basilisk', sources.drop),
  serpentFlesh: new Reagent(31671, 'Serpent Flesh', sources.drop),
  bearFlank: new Reagent(35562, 'Bear Flank', sources.drop),
  buzzardMeat: new Reagent(27671, 'Buzzard Meat', sources.drop),
  strangeSpores: new Reagent(27676, 'Strange Spores', sources.drop),

  adamantiteBar: new Reagent(23446, 'Adamantite Bar', sources.mining),
  eterniumBar: new Reagent(23447, 'Eternium Bar', sources.mining),

  largeBrilliantShard: new Reagent(14344, 'Large Brilliant Shard', sources.enchanting),
  arcaneDust: new Reagent(22445, 'Arcane Dust', sources.enchanting),
  
  //classic starts here --
  arthasTears: new Reagent(8836, 'Arthas\' Tears', sources.herbalism),
  blackLotus: new Reagent(13468, 'Black Lotus', sources.herbalism),
  blindweed: new Reagent(8839, 'Blindweed', sources.herbalism),
  briarthorn: new Reagent(2450, 'Briarthorn', sources.herbalism),
  bruiseweed: new Reagent(2453, 'Bruiseweed', sources.herbalism),
  dreamfoil: new Reagent(13463, 'Dreamfoil', sources.herbalism),
  fadeleaf: new Reagent(3818, 'Fadeleaf', sources.herbalism),
  firebloom: new Reagent(4625, 'Firebloom', sources.herbalism),
  ghostMushroom: new Reagent(8845, 'Ghost Mushroom', sources.herbalism),
  goldenSansam: new Reagent(13464, 'Golden Sansam', sources.herbalism),
  goldthorn: new Reagent(3821, 'Goldthorn', sources.herbalism),
  graveMoss: new Reagent(3369, 'Grave Moss', sources.herbalism),
  gromsblood: new Reagent(8846, 'Gromsblood', sources.herbalism),
  icecap: new Reagent(13467, 'Icecap', sources.herbalism),
  khadgarsWhisker: new Reagent(3358, 'Khadgar\'s Whisker', sources.herbalism),
  liferoot: new Reagent(3357, 'Liferoot', sources.herbalism),
  mountainSilversage: new Reagent(13465, 'Mountain Silversage', sources.herbalism),
  plaguebloom: new Reagent(13466, 'Plaguebloom', sources.herbalism),
  purpleLotus: new Reagent(8831, 'Purple Lotus', sources.herbalism),
  stranglekelp: new Reagent(3820, 'Stranglekelp', sources.herbalism),
  sungrass: new Reagent(8838, 'Sungrass', sources.herbalism),
  swiftthistle: new Reagent(2452, 'Swiftthistle', sources.herbalism),
  wildSteelbloom: new Reagent(3355, 'Wild Steelbloom', sources.herbalism),
  wintersBite: new Reagent(3819, 'Winter\'s Bite', sources.herbalism),

  chimaerokTenderloin: new Reagent(21024, 'Chimaerok Tenderloin', sources.drop),
  deeprockSalt: new Reagent(8150, 'Deeprock Salt', sources.drop),
  elementalEarth: new Reagent(7067, 'Elemental Earth', sources.drop),
  elementalFire: new Reagent(7068, 'Elemental Fire', sources.drop),
  elementalWater: new Reagent(7070, 'Elemental Water', sources.drop),
  giantEgg: new Reagent(12207, 'Giant Egg', sources.drop),
  heartOfTheWild: new Reagent(10286, 'Heart of the Wild', sources.drop),
  heavyKodoMeat: new Reagent(12204, 'Heavy Kodo Meat', sources.drop),
  hugeVenomSac: new Reagent(19441, 'Huge Venom Sac', sources.drop),
  largeVenomSac: new Reagent(1288, 'Large Venom Sac', sources.drop),
  runecloth: new Reagent(14047, 'Runecloth', sources.drop),
  smallVenomSac: new Reagent(1475, 'Small Venom Sac', sources.drop),
  sandwormMeat: new Reagent(20424, 'Sandworm Meat', sources.drop),
  tenderCrabMeat: new Reagent(12206, 'Tender Crab Meat', sources.drop),
  tenderWolfMeat: new Reagent(12208, 'Tender Wolf Meat', sources.drop),
  volatileRum: new Reagent(9260, 'Volatile Rum', sources.drop),
  whiteSpiderMeat: new Reagent(12205, 'White Spider Meat', sources.drop),

  snickerfangJowl: new Reagent(8391, 'Snickerfang Jowl', sources.drop),
  blastedBoarLung: new Reagent(8392, 'Blasted Boar Lung', sources.drop),
  scorpokPincer: new Reagent(8393, 'Scorpok Pincer', sources.drop),
  basiliskBrain: new Reagent(8394, 'Basilisk Brain', sources.drop),
  vultureGizzard: new Reagent(8396, 'Vulture Gizzard', sources.drop),

  crystalVial: new Reagent(8925, 'Crystal Vial', sources.vendor),
  emptyVial: new Reagent(3371, 'Empty Vial', sources.vendor),
  hotSpices: new Reagent(2692, 'Hot Spices', sources.vendor),
  imbuedVial: new Reagent(18256, 'Imbued Vial', sources.vendor),
  leadedVial: new Reagent(3372, 'Leaded Vial', sources.vendor),
  refreshingSpringWater: new Reagent(159, 'Refreshing Spring Water', sources.vendor),
  soothingSpices: new Reagent(3713, 'Soothing Spices', sources.vendor),

  firefinSnapper: new Reagent(6359, 'Firefin Snapper', sources.fishing),
  oilyBlackmouth: new Reagent(6358, 'Oily Blackmouth', sources.fishing),
  rawGreaterSagefish: new Reagent(21153, 'Raw Greater Sagefish', sources.fishing),
  rawNightfinSnapper: new Reagent(13759, 'Raw Nightfin Snapper', sources.fishing),
  rawSunscaleSalmon: new Reagent(13760, 'Raw Sunscale Salmon', sources.fishing),
  stonescaleEel: new Reagent(13422, 'Stonescale Eel', sources.fishing),
  winterSquid: new Reagent(13755, 'Winter Squid', sources.fishing),

  denseStone: new Reagent(12365, 'Dense Stone', sources.mining),
  mithrilOre: new Reagent(3858, 'Mithril Ore', sources.mining),
  thoriumOre: new Reagent(10620, 'Thorium Ore', sources.mining),

  dreamDust: new Reagent(11176, 'Dream Dust', sources.enchanting),
  illusionDust: new Reagent(16204, 'Illusion Dust', sources.enchanting),
  largeBrilliantShard: new Reagent(14344, 'Large Brilliant Shard', sources.enchanting),

  runnTumTuber: new Reagent(18255, 'Runn Tum Tuber', sources.container),
};

