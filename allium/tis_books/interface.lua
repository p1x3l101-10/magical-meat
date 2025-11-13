local lecternManager = require("lecternManager")

local interface = {
  mode = 0,
  data = 0,
  dataHead = 0,
  lectern = nil
}

function interface:new(block)
  self.lectern = lecternManager:new(block)
end

function interface:canRead()
  return self.lectern:hasBook()
end

function interface:canWrite()
  return self.lectern:hasBook()
end

function interface:peek()
  return -1
end

function interface:readFromNBT(nbt)
  return
end

function interface:reset()
  self.mode = 0
  self.data = 0
  self.dataHead = 0
  return
end

function interface:skip()
  return
end

function interface:write(value)
  if self.mode == 0 then
    self.mode = value
    return
  end
  if value < 0 then
    self.changingMode = true
    return
  end
  self.data = value
end

function interface:writeToNBT(nbt)
  return
end

return interface