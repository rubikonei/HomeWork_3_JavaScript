// test
var test = document.forms.test;
var r;
document.getElementsByName("res")[0].onclick = function () {
   res();
}
function res () {
   r = 0;
   // radio - 3
   if (test.elements.linkTest[0].checked) {
      r += 1;
   }
   if (test.elements.orderedList[2].checked) {
      r += 1;
   }
   if (test.elements.meta[3].checked) {
      r += 1;
   }
   // first checkbox
   if (test.elements.table[1].checked && test.elements.table[3].checked &&
      !test.elements.table[0].checked && !test.elements.table[2].checked) {
      r += 1;
   }
   // second checkbox
   if (test.elements.formTest[0].checked && test.elements.formTest[1].checked &&
      !test.elements.formTest[2].checked && !test.elements.formTest[3].checked) {
      r += 1;
   }
   var percent = (r / 5) * 100;
   alert("Количество баллов: " + r + ", процент верных ответов: " + percent + "%");
}