// คุณเป็นอาจารย์ในมหาวิทยาลัยแห่งหนึ่ง ซึ่งมีงานเยอะมาก ดีที่คุณมีความรู้ด้านการเขียนโปรแกรม จึงได้เขียนโปรแกรมเพื่อตัดเกรดนักศึกษา ซึ่งมีรายละเอียดดังนี้
// - รับอินพุต 1 ตัวที่เป็นจำนวนเต็ม (score) เพื่อประเมินผลสอบของนักศึกษา โดยมีเงื่อนไขดังนี้
// - ถ้าคำแนน (score) มากกว่าหรือเท่ากับ 80 ให้ิมพ์ 'A'
// - ถ้าคำแนน (score) มากกว่าหรือเท่ากับ 70 แต่น้อยกว่า 80 ใหพิมพ์ 'B'
// - ถ้าคำแนน (score) มากกว่าหรือเท่ากับ 60 แต่น้อยกว่า 70 ใหพิมพ์ 'C'
// - ถ้าคำแนน (score) มากกว่าหรือเท่ากับ 50 แต่น้อยกว่า 60 ใหพิมพ์ 'D'
// - นอกนั้นให้พิมพ์ 'F'

function scoreTest(score) {
  if (score >= 80) {
    console.log("ยินดีด้วยจ้า หนูได้ A");
  } else if (score >= 70) {
    console.log("เกือบเทพแล้วอีกนิดเดียว เอา B ไปก่อนละกัน");
  } else if (score >= 60) {
    console.log("คัมปาเตะะ เอา C ไปก่อนเนอะ");
  } else if (score >= 50) {
    console.log("เกือบแล้วนะเรา เอา D ไปกินน");
  } else {
    console.log("เอา F ไปกินซร้าาาาา");
  }
}
scoreTest(80);
scoreTest(70);
scoreTest(60);
scoreTest(50);
scoreTest(40);
