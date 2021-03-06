// คุณเป็นโปรแกรมเมอร์ในบริษัทสร้างแอปพลิเคชั่นสำหรับฟังเพลงแห่งหนึ่ง บริษัทแห่งนี้ต้องการแจ้งเตือนผู้ใช้เมื่อมีการฟังเพลงต่อเนื่องเป็นเวลานานมากเกินไป คุณได้รับมอบหมายให้เขียนโปรแกรมซึ่งมีรายละเอียดดังนี้
// - รับอินพุต 1 ตัวที่เป็นจำนวนจริง (listen_time) เพื่อแจ้งเตือนผู้ใช้เมื่อมีการฟังเพลงต่อเนื่องเป็นเวลานานเกินไป โดยมีเงื่อนไขดังนี้
// - ถ้าใช้บริการ (listen_time) มากกว่า 4 ชั่วโมง ให้ทำการแจ้งเตือนว่า 'อันตรายต่อหู'
// - ถ้ายังใช้ไม่เกิน 4 ชั่วโมง ให้ทำการแจ้งเตือนว่า 'ขอให้มีความสุขกับการฟังเพลง'

function listenTime(listen_time) {
  if (listen_time >= 4) {
    console.log("อันตรายต่อหูนะจ๊ะ");
  } else {
    console.log("ขอให้มีความสุขกับการฟังเพลงจ้าา");
  }
}

listenTime(4);
listenTime(3);
listenTime(5);
listenTime(1);
