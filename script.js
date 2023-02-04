function DATE() {
  let date = new Date();
  let dateSade = new Date().toLocaleDateString();
  let hour = date.getHours();
  let munite = date.getMinutes();
  let second = date.getSeconds();

  hour = sifirekle(hour);
  munite = sifirekle(munite);
  second = sifirekle(second);

  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = munite;
  document.getElementById("second").innerText = second;
  document.getElementById("date").innerText = dateSade;

  //   setTimeout("DATE()", 1000);
  setInterval("DATE()", 1000);
  // her 1 saniyede DATE() fonksiyonunu yeniden çalıştır. 1sn=1000ms
  // Her 1 saniyede güncellendiği için anlık saati ve tarihi otomatik olarak yazdıracaktır
  //   https://www.w3schools.com/jsref/met_win_settimeout.asp
  //   Tekrarlanan yürütmelere ihtiyacınız varsa, setInterval()
}
let date = new Date();
console.log(date);
function sifirekle(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}
window.onload = DATE();

//! toLocaleString() = 15.01.2023 17:11:35 hepsini veriyor
//! toLocaleDateString = sadece 15.01.2023 kısmını veriyor
