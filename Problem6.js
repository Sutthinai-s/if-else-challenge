// เขียนโปรแกรมรับอินพุต 1 ตัวเป็นปีคริสตศักราช (จำนวนเต็ม) และตรวจสอบว่า จำนวนที่รับมามีค่ามากกว่าหรือเท่ากับ 0 หรือไม่
// - ถ้ามีค่ามากกว่าหรือเท่ากับ 0 ให้คำนวณปีพุทธศักราช ด้วยการบวก 543 เข้าไป และพิมพ์ค่าออกมา
// - ถ้ามีค่าน้อยกว่า 0 ให้พิมพ์ 'กรุณากรอกข้อมูลที่มากกว่าหรือเท่ากับ 0'

function yearToYear(years) {
  if (years >= 0) {
    console.log(years + 543);
  } else {
    console.log("ปีบ้านเอ็งมีติดลบด้วยเรอะ !?");
  }
}

yearToYear(2021);
yearToYear(-2021);
yearToYear(0);