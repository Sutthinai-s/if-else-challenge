// คุณเป็นตำรวจกรมทางหลวง หน้าที่ของคุณคือลงโทษผู้ที่ขับรถเร็วเกินอัตราที่กำหนด ปัญหาคือมีผู้ทำผิดเยอะมากจนไม่สามารถทำงานได้ทัน คุณจึงได้เขียนโปรแกรมขึ้นมาโดยมีรายละเอียด ดังนี้
// - รับอินพุต 1 ตัวที่เป็นจำนวนจริง (velocity) เพื่อพิจาณาโทษจากความเร็วที่ขับโดยมีเงื่อนไขดังนี้
// - ถ้าความเร็ว (velocity) มากกว่า 120 กิโลเมตร/ชั่วโมง ให้พิมพ์ 'ปรับ 1,000 บาท'
// - ถ้าความเร็ว (velocity) มากกว่า 80 กิโลเมตร/ชั่วโมง แต่ไม่เกิน 120 กิโลเมตร/ชั่วโมง ให้พิมพ์ 'ปรับ 500 บาท'
// - นอกนั้นไม่ดำเนินการใด ๆ

function tooFastOrNot2(velocity) {
  if (velocity >= 120) {
    console.log("ขับ" + velocity + "ปรับ 1,000 บาทโว้ยย");
  } else if (velocity >= 80 && velocity < 120) {
    console.log("ขับ" + velocity + "ก็ปรับอยู่ดี 500 บาทจ้าา");
  }
}

tooFastOrNot2(140);
tooFastOrNot2(120);
tooFastOrNot2(100);
tooFastOrNot2(80);
tooFastOrNot2(60);
