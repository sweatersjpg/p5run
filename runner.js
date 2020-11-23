// p5 runner
// sweatersjpg

// get perameters
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('c')) { // if code perameter exists
  // let code = revert(urlParams.get('c'));
  let code = decodeURIComponent(urlParams.get('c'));
  var script = document.createElement('script'); // create script element
  script.innerHTML = code; // add the code
  document.getElementsByTagName('head')[0].appendChild(script); // attach it to head

  window.onload = () => { // on window load
    let div = document.getElementById("converter"); // get converter div
    div.remove(); // remove converter div
  }
}

function ConvertInput() {
  let input = document.getElementById('codeInput'); // get input
  // let encoded = convert(input.value);
  let encoded = encodeURIComponent(input.value); // encode input
  let output = document.getElementById('output'); // get link
  output.innerHTML = "Your new link" // change link name
  output.href = window.location.href + "?c=" + encoded; // change link destination
}

// let chars = '<>#%"{}|\\^[]`;/?:@&=+&$, \n\xa0';
// let index = 'àáâäæãåāèéêëēėęûüùúūîïíīįì';

// function convert(str) {
//   let a = str.split('');
//   for (var i = 0; i < a.length; i++) {
//     if(!chars.includes(a[i])) continue;
//     a[i] = index.charAt(chars.indexOf(a[i]));
//   }
//   return a.join("");
// }
//
// function revert(str) {
//   let a = str.split('');
//   for (var i = 0; i < a.length; i++) {
//     if(!index.includes(a[i])) continue;
//     a[i] = chars.charAt(index.indexOf(a[i]));
//   }
//   return a.join("");
// }
