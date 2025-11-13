local ActionRegistryEntry = require("at.petrak.hexcasting.api.casting.ActionRegistryEntry")
local HexDir = require("at.petrak.hexcasting.api.casting.math.HexDir")
local HexPattern = require("at.petrak.hexcasting.api.casting.math.HexPattern")
local Registry = require("net.minecraft.registry.Registry")
local HexActions = require("at.petrak.hexcasting.common.lib.hex.HexActions")

Registry.register(
    HexActions.REGISTRY,
    "hexpix:sample_block",
    ActionRegistryEntry(
        HexPattern.fromAngles("qaqqqqqeeeewwewweeeaeeeqdqdqdqd", HexDir.EAST),
        require("Patterns.placeholder")
    )
)