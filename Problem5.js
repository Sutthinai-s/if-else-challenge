// เขียนโปรแกรมรับอินพุต 2 ตัวที่เป็นจำนวนเต็ม (width, length) และตรวจสอบว่า ถ้าอินพุตตัวใดตัวหนึ่งหรือทั้งสองตัวเป็นศูนย์หรือจำนวนเต็มลบให้พิมพ์ 'กรุณากรอกจำนวนเต็มบวก' แต่ถ้าเป็นจำนวนเต็มบวกทั้งคู่ให้คำนวณพื้นที่สี่เหลี่ยมแล้วพิมพ์ออกมา

function sumSquare (width, length) {
    if (width <= 0 || length <= 0) {
        console.log('ไสหัวไป๊ ไม่รู้หรือไงว่ามันไม่มีน่ะ ห๊ะ !?')
    } else {
        console.log(width*length)
    }
}

sumSquare ( 4 , 5)
sumSquare ( -4 , 5)
sumSquare ( 4 , -5)
sumSquare ( 4 , 0)
sumSquare ( 0 , 5)
sumSquare ( 0 , 0)
