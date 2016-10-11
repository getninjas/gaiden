var loopTime = 100;
var alertMsg = function (mensagem, loopTime) {

  for ( var i=0; i<loopTime; i++ ) {
    if (i % 2 == 0) {
      console.log('> ', mensagem);
    } else {
      console.log(mensagem);
    }
  }
  return 'Msg is: '+ mensagem;
}

alertMsg("OLA MUNDO", loopTime);

var b = {
  def: "asd",
  askdjl: "123"
};

console.log(b["asd"]);
console.log(b["askdjl"]);
