export default class Payment {
  constructor(paymentSubject) {
    this.paymentSubject = paymentSubject
  }

  crediCart(paymentData) {
    console.log(`\na payment occured from ${paymentData.userName}`)
    this.paymentSubject.notify(paymentData)
  }
}