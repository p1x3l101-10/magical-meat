local TranslatableComponent = require("net.minecraft.network.chat.TranslatableComponent")
local SerialProtocolDocumentationReference = require("li.cil.tis3d.api.serial.SerialProtocolDocumentationReference")
local Optional = require("java.util.Optional")

local provider = {
  DOCUMENTATION_TITLE = TranslatableComponent(""),
  DOCUMENTATION_LINK = "lectern.md",
  DOCUMENTATION_REFERENCE = SerialProtocolDocumentationReference(DOCUMENTATION_TITLE, DOCUMENTATION_LINK)
}

function provider:getDocumentationReference()
  return Optional:of(self.DOCUMENTATION_REFERENCE)
end

function provider:matches(level, pos, dir)
  
end