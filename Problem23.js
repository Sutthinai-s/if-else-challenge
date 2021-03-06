// คุณเป็นโปรแกรมเมอร์ในบริษัทสำหรับการเดินทางแห่งหนึ่ง ได้รับมอบหมายให้เขียนโปรแกรมซึ่งมีรายละเอียด ดังนี้
// - รับอินพุต 2 ตัวเป็นสายอักขระ และเป็นจำนวนจริง (status, distance) เพื่อคำนวณค่าเดินทางในการใช้บริการ โดยมีรายละเอียดดังนี้
// - ถ้าสภาพการจราจร (status) 'คล่องตัว' ค่าเดินทางจะเท่ากับ ระยะทาง (distance) x 10
// - ถ้าสภาพการจราจร (status) 'ปานกลาง' ค่าเดินทางจะเท่ากับ ระยะทาง (distance) x 12
// - ถ้าสภาพการจราจร (status) 'หนาแน่น' ค่าเดินทางจะเท่ากับ ระยะทาง (distance) x 15
// - หลังจากนั้นให้พิมพ์ค่าโดยสารออกมา

function distanceApp(status, distance) {
  if (status === "คล่องตัว") {
    console.log("ค่าเสียหายทั้งหมด ที่ต้องจ่ายคืออ " + distance * 10);
  } else if (status === "ปานกลาง") {
    console.log("ค่าเสียหายทั้งหมด ที่ต้องจ่ายคืออ " + distance * 12);
  } else if (status === "หนาแน่น") {
    console.log("ค่าเสียหายทั้งหมด ที่ต้องจ่ายคืออ " + distance * 15);
  }
}

distanceApp("คล่องตัว", 100);
distanceApp("ปานกลาง", 100);
distanceApp("หนาแน่น", 100);
