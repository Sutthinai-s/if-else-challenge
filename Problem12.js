// เขียนโปรแกรมรับอินพุต 1 ตัวที่เป็นจำนวนเต็ม และตรวจสอบว่าจำนวนที่รับมาหารด้วย 3 ลงตัวหรือไม่ ถ้าลงตัวให้พิมพ์ 'หารด้วย 3 ลงตัว' แต่ถ้าไม่ลงตัวให้พิมพ์ 'หารด้วย 3 ไม่ลงตัว'

function divideThreeOrNot (num) {
    if (num %3 === 0) {
        console.log ('หารด้วย 3 ลงตัวจ้าา')
    } else if (num % 3 !== 0) {
        console.log('หารด้วย 3 ไม่ลงตัวโว้ยยย')
    }
}

divideThreeOrNot (3)
divideThreeOrNot (5)
divideThreeOrNot (-3)
divideThreeOrNot (-5)
divideThreeOrNot (0)