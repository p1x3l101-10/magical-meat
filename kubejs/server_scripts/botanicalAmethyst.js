// Hexcasting aqquisition for botanists stranded in space

ServerEvents.recipes(event => {
  // Functions
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
  const pureDaisyGenerator = (input, output) => {
    event.custom({
      type: "botania:pure_daisy",
      input: {
        type: "block",
        block: input
      },
      output: {
        name: output
      }
    });
  };
  // Conversions
  orechidGenerator('minecraft:calcite', 'minecraft:amethyst_block', 200, 'orechid');
  pureDaisyGenerator('minecraft:amethyst_block', 'minecraft:amethyst_cluster');
})
