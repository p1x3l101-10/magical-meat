// Orechid ore generation for modded ores

ServerEvents.recipes(event => {
  // Ore tables
  var overworldAll = [
    { mod: "techreborn", ore: "lead", weight: 1000 },
    { mod: "techreborn", ore: "tin", weight: 1000 },
    { mod: "techreborn", ore: "silver", weight: 100 },
    { mod: "techreborn", ore: "galena", weight: 100 },
    { mod: "techreborn", ore: "bauxite", weight: 100 },
    { mod: "techreborn", ore: "ruby", weight: 100 },
    { mod: "techreborn", ore: "sapphire", weight: 100 },
    { mod: "techreborn", ore: "iridium", weight: 100 }
  ];
  var overworldCobble = [
    { mod: "create_new_age", ore: "thorium", weight: 100 }
  ];
  var overworldDeepslate = [
    { mod: "techreborn", ore: "sheldonite", weight: 100 },
    { mod: "techreborn", ore: "sodalite", weight: 100 },
    { mod: "techreborn", ore: "peridot", weight: 100 },
    { mod: "techreborn", ore: "tungsten", weight: 100 }
  ];
  var nether = [
    { mod: "techreborn", ore: "cinnabar", weight: 200 },
    { mod: "techreborn", ore: "pyrite", weight: 200 },
    { mod: "techreborn", ore: "sphalerite", weight: 200 }
  ];
  // Cobble
  var cobbleOreGen = overworldAll + overworldCobble;
  for (const entry of cobbleOreGen) {
    event.custom({
      type: 'botania:orechid',
      input: {
        type: 'block',
        block: 'minecraft:stone'
      },
      output: {
        type: 'block',
        block: entry.mod + ':' + entry.ore + "_ore"
      },
      weight: entry.weight
    });
  }
  // Deepslate
  var deepslateOreGen = overworldAll + overworldDeepslate;
  for (const entry of deepslateOreGen) {
    event.custom({
      type: 'botania:orechid',
      input: {
        type: 'block',
        block: 'minecraft:deepslate'
      },
      output: {
        type: 'block',
        block: entry.mod + ':deepslate_' + entry.ore + "_ore"
      },
      weight: entry.weight
    });
  }
  // Nether
  var netherrackOreGen = nether;
  for (const entry of netherrackOreGen) {
    event.custom({
      type: 'botania:orechid_ignem',
      input: {
        type: 'block',
        block: 'minecraft:netherrack'
      },
      output: {
        type: 'block',
        block: entry.mod + ':' + entry.ore + "_ore"
      },
      weight: entry.weight
    });
  }
})
