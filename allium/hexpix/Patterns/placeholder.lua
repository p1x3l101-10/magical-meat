local OperationResult = require("at.petrak.hexcasting.api.casting.eval.OperationResult")
local HexEvalSounds = require("at.petrak.hexcasting.common.lib.hex.HexEvalSounds")

return function(env, image, continuation)
    return OperationResult(image, {}, continuation, HexEvalSounds.NORMAL_EXECUTE)
end
