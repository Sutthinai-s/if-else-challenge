// เขียนโปรแกรมรับอินพุต 1 ตัวที่เป็นจำนวนจริง และตรวจสอบว่าจำนวนที่รับมามีค่ามากกว่า 0, น้อยกว่า 0 หรือเท่ากับ 0
// - ถ้ามีค่ามากกว่า 0 ให้พิมพ์ 'positive'
// - ถ้ามีค่าน้อยกว่า 0 ให้พิมพ์ 'negative'
// - ถ้ามีค่าเท่ากับ 0 ให้พิมพ์ 'zero'

function PlusNegZero(number) {
  if (number > 0) {
    console.log("Positive จ้าา");
  } else if (number < 0) {
    console.log("Negative จ้าา");
  } else {
    console.log("zero จ้าา");
  }
}

PlusNegZero(1);
PlusNegZero(0);
PlusNegZero(-1);
