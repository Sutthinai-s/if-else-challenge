// เขียนโปรแกรมรับอินพุต 1 ตัวที่เป็นจำนวนจริง และตรวจสอบว่าจำนวนที่รับมามีค่ามากกว่า 0, น้อยกว่า 0 หรือเท่ากับ 0
// ถ้ามีค่ามากกว่า 0 ให้ตรวจสอบต่อว่าเป็นเลขคู่หรือเลขคี่
// - ถ้าเป็นเลขคู่ให้พิมพ์ 'positive even'
// - ถ้าเป็นเลขคี่ให้พิมพ์ 'positive odd'
// ถ้ามีค่าน้อยกว่า 0 ให้ตรวจสอบต่อว่าเป็นเลขคู่หรือเลขคี่
// - ถ้าเป็นเลขคู่ให้พิมพ์ 'negative even'
// - ถ้าเป็นเลขคี่ให้พิมพ์ 'negative odd'
// ถ้ามีค่าเท่ากับ 0 ให้พิมพ์ 'zero'

function PlusNegZero(number) {
  if (number > 0) {
    if (number % 2 === 0) {
      console.log("positive even โว้ยย");
    } else {
      console.log("positive odd โว้ยย");
    }
  } else if (number < 0) {
    if (number % 2 === 0) {
      console.log("Negative even โว้ยย");
    } else {
      console.log("Negative odd โว้ยย");
    }
  } else {
    console.log("ฮั่นแน่ รู้นะว่าคือ 0");
  }
}

PlusNegZero(1);
PlusNegZero(2);
PlusNegZero(0);
PlusNegZero(-1);
PlusNegZero(-2);
