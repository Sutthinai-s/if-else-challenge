// เขียนโปรแกรมรับอินพุต 3 ตัวที่เป็นจำนวนจริง และตรวจสอบว่าผลบวกของจำนวนที่หนึ่งและจำนวนที่สองมากกว่าจำนวนที่สามหรือไม่
// - ถ้ามากกว่าให้พิมพ์ 'a + b > c'
// - ถ้าไม่มากกว่าไม่ดำเนินการใด ๆ

function sumMoreThanThreeOrNot(num1, num2, num3) {
  if (num1 + num2 > num3) {
    console.log('a + b > c');
  }
}

sumMoreThanThreeOrNot(5, 10, 15);
sumMoreThanThreeOrNot(5, 10, 10);
sumMoreThanThreeOrNot(5, 10, 20);
