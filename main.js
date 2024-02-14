

export const fn = (empA, empB, empC) => {

  if ((empA + empB + empC) > 39 || empA < 0 || empB < 0 || empC < 0 || (empA + empB + empC) % 3 != 0) {

    throw new Error
  }

  ///////////////3,3,0////2,0,1/----- 2ac 1a 

  if ((empC - empA) < 0) {

    let empNewA = -(empC - empA);//las a que te quedan sin mezclar newA (-1)

    let empAC = (empC - empNewA) // 1 - (-1) = 2ac = 2b.

    let empTotales = (empB + empAC) + (empNewA);

    return (((empTotales) / 3) * 14)

  }



}


