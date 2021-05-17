const someMath = async(a, b, c) => {
  try {
    if(
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number" 
    ) throw new Error("Informe apenas números");
  
    const result = (a+b)*c;
    if(result < 50) throw new Error("Valor muito baixo")

    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

someMath(1,2,3)