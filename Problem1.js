// เขียนโปรแกรมรับอินพุต 1 ตัวที่เป็นจำนวนเต็ม และตรวจสอบว่าจำนวนที่รับมาเป็นเลขคู่หรือเลขคี่
// - ถ้าเป็นเลขคู่ให้พิมพ์ 'เลขคู่'
// - ถ้าเป็นเลขคี่ให้พิมพ์ 'เลขคี่'

function evenOddNumber(number) {
  if (number % 2 === 0) {
    console.log(number + " เป็นเลขคู่จ้ะ");
  } else if (number % 2 !== 0) {
    console.log(number + " เป็นเลขคี่จ้ะ");
  }
}

evenOddNumber(5);
evenOddNumber(6);
evenOddNumber(-5);
evenOddNumber(-6);

