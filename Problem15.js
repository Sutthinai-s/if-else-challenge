// คุณเป็นโปรแกรมเมอร์ที่ห้างสรรพสินค้าชื่อดังแห่งหนึ่ง คุณได้รับมอบหมายให้เขียนโปรแกรม ซึ่งมีรายละเอียดดังนี้
// - รับอินพุต 2 ตัวที่เป็นจำนวนเต็ม (hour, minute) เพื่อคำนวณค่าที่จอดรถ
// - โดยชั่วโมงแรกจอดฟรี หลังจากนั้นเสียค่าจอดชั่วโมงละ 30 บาท
// - เศษของชั่วโมงนับเป็น 1 ชั่วโมง
// - จากนั้นให้พิมพ์ค่าจอดรถออกมา

function carPark(hour, minute) {
  if (hour <= 0) {
    console.log("จอดฟรีไปเลยจ้าาา");
  } else if (minute <= 0) {
    result = hour * 30;
    console.log(result);
  } else if (minute >= 1 && minute <= 60) {
    result = hour * 30 + 30;
    console.log(result);
  }
}

carPark(0, 1);
carPark(0, 30);
carPark(0, 59);
carPark(1, 0);
carPark(1, 30);
carPark(1, 59);
carPark(2, 0);
carPark(2, 1);
carPark(2, 59);
