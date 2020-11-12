const statesArray = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

function addStatesOption () {
  for (let i = 0; i < statesArray.length; i += 1) {
  const state = document.querySelector('#state');
  const options = document.createElement('option');
  options.innerHTML = statesArray[i];
  state.appendChild(options);
}
}
addStatesOption ();