// Orechid ore generation for modded ores

ServerEvents.recipes(event => {
  // Ore tables
  let overworldAll = [
    { mod: "techreborn", ore: "lead", weight: 25 },
    { mod: "techreborn", ore: "tin", weight: 25 },
    { mod: "techreborn", ore: "silver", weight: 25 },
    { mod: "techreborn", ore: "galena", weight: 25 },
    { mod: "techreborn", ore: "bauxite", weight: 25 },
    { mod: "techreborn", ore: "ruby", weight: 25 },
    { mod: "techreborn", ore: "sapphire", weight: 25 },
    { mod: "techreborn", ore: "iridium", weight: 25 }
  ];
  let overworldCobble = [
    { mod: "create_new_age", ore: "thorium", weight: 25 }
  ];
  let overworldDeepslate = [];
  let nether = [
    { mod: "techreborn", ore: "cinnabar", weight: 200 },
    { mod: "techreborn", ore: "pyrite", weight: 200 },
    { mod: "techreborn", ore: "sphalerite", weight: 200 }
  ];
  let end = [
    { mod: "techreborn", ore: "sheldonite", weight: 25 },
    { mod: "techreborn", ore: "sodalite", weight: 25 },
    { mod: "techreborn", ore: "peridot", weight: 25 },
    { mod: "techreborn", ore: "tungsten", weight: 25 }
  ];
  // Function
  const orechidGenerator = (input, output, weight, type) => {
    event.custom({
      type: "botania:" + type,
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
  const cobbleOreGen = overworldAll.concat(overworldCobble);
  for (const entry of cobbleOreGen) {
    orechidGenerator('minecraft:stone'
      , entry.mod + ':' + entry.ore + "_ore"
      , entry.weight
      , 'orechid');
  }
  // Deepslate
  const deepslateOreGen = overworldAll.concat(overworldDeepslate);
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
  const endstoneOreGen = end;
  for (const entry of endstoneOreGen) {
    orechidGenerator('minecraft:end_stone'
      , entry.mod + ':' + entry.ore + "_ore"
      , entry.weight
      , 'orechid_ignem'
    );
  }
})
