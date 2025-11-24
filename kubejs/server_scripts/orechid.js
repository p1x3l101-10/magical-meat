// Orechid ore generation for modded ores

ServerEvents.recipes(event => {
  // Ore tables
  let overworldAll = [
    { mod: "techreborn", ore: "lead", weight: 1000 },
    { mod: "techreborn", ore: "tin", weight: 1000 },
    { mod: "techreborn", ore: "silver", weight: 100 },
    { mod: "techreborn", ore: "galena", weight: 100 },
    { mod: "techreborn", ore: "bauxite", weight: 100 },
    { mod: "techreborn", ore: "ruby", weight: 100 },
    { mod: "techreborn", ore: "sapphire", weight: 100 },
    { mod: "techreborn", ore: "iridium", weight: 100 }
  ];
  let overworldCobble = [
    { mod: "create_new_age", ore: "thorium", weight: 100 }
  ];
  let overworldDeepslate = [
    { mod: "techreborn", ore: "sheldonite", weight: 100 },
    { mod: "techreborn", ore: "sodalite", weight: 100 },
    { mod: "techreborn", ore: "peridot", weight: 100 },
    { mod: "techreborn", ore: "tungsten", weight: 100 }
  ];
  let nether = [
    { mod: "techreborn", ore: "cinnabar", weight: 200 },
    { mod: "techreborn", ore: "pyrite", weight: 200 },
    { mod: "techreborn", ore: "sphalerite", weight: 200 }
  ];
  // Function
  const orechidGenerator = (input, output, weight, type) => {
    event.custom({
      type: "botania" + type,
      input: {
        type: 'block',
        block: input
      },
      output: {
        type: 'block',
        block: output
      },
      weight: weight
    });
  };
  // Cobble
  const cobbleOreGen = overworldAll + overworldCobble;
  for (const entry of cobbleOreGen) {
    orechidGenerator('minecraft:stone'
      , entry.mod + ':' + entry.ore + "_ore"
      , entry.weight
      , 'orechid');
  }
  // Deepslate
  const deepslateOreGen = overworldAll + overworldDeepslate;
  for (const entry of deepslateOreGen) {
    orechidGenerator('minecraft:deepslate'
      , entry.mod + ':deepslate_' + entry.ore + "_ore"
      , entry.weight
      , 'orechid');
  }
  // Nether
  const netherrackOreGen = nether;
  for (const entry of netherrackOreGen) {
    orechidGenerator('minecraft:netherrack'
      , entry.mod + ':' + entry.ore + "_ore"
      , entry.weight
      , 'orechid_ignem');
  }
})
