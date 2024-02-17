

export const fn = (empA, empB, empC) => {

  if (((empA + empB + empC) > 40) || (empA < 0) || (empB < 0) || (empC < 0) || ((empA + empB + empC) % 3 != 0)) {

    throw new Error

  }


  if (empC == empA) {

    let empMix = (empC + empA)
    let empTotal = (empMix + empB)
    let pTotal = (empTotal / 3) * 14

    return (pTotal)

  }


  if (empC < empA) {

    let empAC = empA - (empA - empC)

    if (empC == 0) {
      let empNoMix = empA - empB
      let empMix = (empA - empNoMix) * 2
      console.log(empMix)
      let pFinal = (empMix / 3) * 13
      return (pFinal)
    }
    if (empC != 0) {

      let empNoAC = (empA - empAC)
      console.log(empNoAC, "lasnoAC osea a son 2")
      let empMix = empB + empAC
      console.log(empMix, "las mix son las 9noac mas las b")

      console.log(empMix % 3, "elmodulo de mix es 19-18 q si es div/3")

      let pPago = (((empMix) - (empMix % 3)) / 3) * 14
      console.log(pPago, "primerpago")


      if (empMix > 3) {

        let empX = (empB + empMix)
        console.log(empMix, "q son mix 19")
        let empY = (empMix % 3)
        console.log(empY, "DEBESER 1 b q no se ha mezclado aun")
        let sPago = (empNoAC - (empNoAC % 3) / 3) * 12

        let tPago = ((empY + (empNoAC % 3)) / 3) * 14
        console.log(tPago)

        let pFinal = pPago + sPago + tPago
        return (pFinal)

      }

      let sPago = ((empNoAC + empMix + (empMix % 3)) / 3) * 14
      console.log(sPago, "elsegundopago es esto")

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


