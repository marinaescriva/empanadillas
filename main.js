

export const fn = (empA, empB, empC) => {

  if (((empA + empB + empC) > 40) || (empA < 0) || (empB < 0) || (empC < 0) || ((empA + empB + empC) % 3 != 0)) {

    throw new Error("La oferta 3x1 no puede aplicarse")

  }


  if (empC == empA) {

    let empMix = (empC + empA)
    let empTotal = (empMix + empB)
    let pTotal = (empTotal / 3) * 14

    return (pTotal)

  }


  if (empC < empA) {

    if (empC == 0) {  
      let empNoMix = empA - empB
      let empMix = (empA - empNoMix) * 2

      let pFinal = (empMix / 3) * 13
      return (pFinal)
    }

    let empACdeC = (empA - (empA - empC))   // because A>C so no-mixed ones are A and all C will be mixed.
    let empAC = (empACdeC) * 2 // because in fact C is completly mixed with A, so C=0, and no-mixed empanadas are now always A. // 18,2,18

    if (empC != 0) { 

      let empNoAC = (empA - empC) //  they will be always A.

      let empMix = empB + empAC 

      let pPago = (((empMix) - (empMix % 3)) / 3) * 14 


      if (empNoAC > (empMix % 3)) { //if mixed ones not payed, are like b, can be re-mixed with a now!

        let empNoAB = (empNoAC - (empMix % 3))// the a's which are no mixed with "B" lefted
        let empAB = (empNoAC - (empNoAC - (empMix % 3))) * 2  // the mix between A+B , so price is 13€

        let sPago = ((empAB + empNoAB) / 3) * 13 // the last pack 3x1 is 2AB with 1a , so the price is for AB price =13€

        let pFinal = pPago + sPago

        return (pFinal)
      }

      let sPago = ((empNoAC + (empMix % 3)) / 3) * 14 

      let pFinal = pPago + sPago

      return (pFinal)
    }

  }


  if ((empC > empA)) {


    let empNoMix = (empC - empA)

    let empMix = (empA * 2)

    let empX = (empB + empMix)
    let empY = (empX % 3)

    let pPago = ((empX - (empY)) / 3) * 14
    let sPago = ((empNoMix + (empY)) / 3) * 16

    let pFinal = pPago + sPago

    return (pFinal)

  }


}


