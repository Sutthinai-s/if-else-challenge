// เขียนโปรแกรมรับอินพุต 1 ตัวที่เป็นจำนวนเต็ม และตรวจสอบว่าจำนวนที่รับมาหารด้วย 3 และ 5 ลงตัวหรือไม่ ถ้าลงตัวให้พิมพ์ 'หารด้วย 3 และ 5 ลงตัว' แต่ถ้าไม่ลงตัวให้พิมพ์ 'หารด้วย 3 และ 5 ไม่ลงตัว'

function divideThreeAndFiveOrNot(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("หารด้วย 3 และ 5 ลงตัวโว้ยยย");
  } else if (num % 3 === 0 || num % 5 === 0) {
    console.log("หารด้วย 3 และ 5 ไม่ลงตัวโว้ยยย ไสหัวไป๊");
  }
}

divideThreeAndFiveOrNot(15);
divideThreeAndFiveOrNot(10);
divideThreeAndFiveOrNot(6);
divideThreeAndFiveOrNot(5);
divideThreeAndFiveOrNot(-15);
divideThreeAndFiveOrNot(-10);
divideThreeAndFiveOrNot(-6);
divideThreeAndFiveOrNot(-5);
divideThreeAndFiveOrNot(0);
