

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


  if (empC < empA) { //11,10,9

    let empNoAC = empA - (empA - empC)  //11- (11-9)  2
    
     if(empC == 0){
        let empNoMix = empA - empB 
        let empMix = (empA - empNoMix)*2
        console.log(empMix)
       let pFinal = (empMix/3)*13
       return(pFinal)
      }
    
    let empAC = (empA - (empNoAC))*2 // 11- 2 
    let empMix = (empB + empAC) // 10 + 9

    let X = empMix %3 // 1

    let pPago = ((empMix - X)/3)*14
    let sPago = ((X + empNoAC)/3)*14

    let pFinal = pPago + sPago
    // let pFinal = ((empMix + empNoAC)/3)*14 
    
    return(pFinal)
    

  }

  // if (empC < empA) {

  //   let empNoMix = (empA - empC) // 2

  //   // if (empNoMix === 0) {
  //   //   let empNoAB = -(empA - empB)  ESTO ES LO QUE NO PASA POR 3,3,0 Y 2,0,1
  //   // }

  //   let empMix = (empC * 2) // 18

  //   let empX = (empB + empMix) // 10+ 18 (b + ac)
  //   let empY = (empX % 3) // 1 de tipo b no mezclada

  //   let pPago = ((empX - (empY)) / 3) * 14 //(27/3)  *14
  //   let sPago = ((empNoMix + (empY)) / 3) * 13 //pagas la mezclada de ab, osea la empY(1) mexclada con una empNomix que es de tipo a.
  //   // empnomix son siempre a , y lo que sobre sin mezclar es tipo b 

  //   let pFinal = pPago + sPago
  //   return (pFinal)

  // }


  if ((empC > empA)) {


    let empNoMix = (empC - empA) // 11-9
    // if(empNoMix<0){ 
    //   let empNoMix = -(empNoMix)
    // }
    let empMix = (empA * 2) // 9*2 18

    let empX = (empB + empMix)  //28
    let empY = (empX % 3) //1

    let pPago = ((empX - (empY)) / 3) * 14
    let sPago = ((empNoMix + (empY)) / 3) * 16

    let pFinal = pPago + sPago

    return (pFinal)

  }


}


