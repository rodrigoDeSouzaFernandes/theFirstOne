let piece = "ReI"

piece = piece.toLowerCase()


if(piece == "torre"){
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças." )
}
else if(piece == "rei"){
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez." )
}
else if(piece == "rainha"){
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças." )
}
else if(piece == "bispo"){
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças." )
}
else if(piece == "cavalo"){
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa." )
}
else if(piece == "peao"){
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo." )
}
else {
    console.log("Essa peça não existe no xadrez")
}