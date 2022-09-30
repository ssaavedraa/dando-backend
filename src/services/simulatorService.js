const { db, createDocument } = require('./db/db.js')

class Service {
  getFractionalInterest (interestRate, term) {
    console.log(interestRate, term)
    return Math.pow(1 + Number(interestRate), Number(term) * -1)
  }

  getInstallmentValue (amount, interestRate, fractionalInterest) {
    return (Number(amount) * Number(interestRate)) / (1 - fractionalInterest)
  }

  async createSimulation (simulationData) {
    const simulationId = `${simulationData.document_type}_${simulationData.document_number}_${simulationData.creation_date}`

    await createDocument(db, simulationId, simulationData)
  }
}

module.exports = new Service()