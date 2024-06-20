var start = true;

while (start) {
  var rand = Math.floor(Math.random() * 10) + 1;
  var kesempatan = 3;
  var benar = false;

  while (kesempatan > 0) {
    // input number
    var input = parseInt(
      prompt(
        "Selamat datang di permainan tebak angka\nAnda memiliki kesempatan sebaanyak " +
          kesempatan +
          " kali untuk menjawab jawaban\nSilahkan pilih angka 1-10 : "
      )
    );

    if (input === rand) {
      alert("Angka yang dimaksud adalah " + rand + "\nJawaban anda benar!");
      benar = true;
      kesempatan = 0;
    } else if (input !== rand && input > 0 && input <= 10) {
      alert("Ups, angka yang anda masukkan salah! ");
      kesempatan--;
    } else {
      alert(
        "mohon untuk hanya memasukkan nilai angka 1-10,\njangan masukkin yang aneh-aneh"
      );

      kesempatan--;
    }
  }

  if (benar == true) {
    start = confirm("Mau main lagi?");
  } else {
    start = confirm(
      "Waduh kesempatan kamu sudah habis\nApakah kamu mau coba lagi ?"
    );
  }
}

alert("Terima Kasih sudah bermain bersama kami.");
// generate number
