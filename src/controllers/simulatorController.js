const Service = require('../services/simulatorService.js')

const simulateCredit = async (req, res) => {
  const {interest_rate, amount, term} = req.body

  const fractionalInterest = Service.getFractionalInterest(interest_rate, term)
  const installmentValue = Service.getInstallmentValue(amount, interest_rate, fractionalInterest)
  
  await Service.createSimulation({
    ...req.body,
    fractional_interest: fractionalInterest,
    installment_value: installmentValue
  })

  res.json({
    fractionalInterest,
    installmentValue
  })
}

module.exports = {
  simulateCredit
}