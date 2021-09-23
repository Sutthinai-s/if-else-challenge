// เขียนโปรแกรมรับอินพุต 2 ตัวที่เป็นสายอักขระ จากนั้นตรวจสอบว่า สายอักขระทั้งสองมีความยาวเท่ากันหรือไม่ ถ้ามีความยาวเท่ากันให้พิมพ์ 'same' ถ้าไม่เท่ากันให้พิมพ์ 'not same'

function sameOrNot(input1, input2) {
  if (input1.length === input2.length) {
    console.log("เหมือนอย่างกับแกะ");
  } else {
    console.log("นี่มันอะไรกันเนี้ย ให้ตายเถอะะ");
  }
}

sameOrNot('cat', 'cat');
sameOrNot('cat', 'dog');
sameOrNot('cat', 'tomato');
sameOrNot('tomato', 'cat');
