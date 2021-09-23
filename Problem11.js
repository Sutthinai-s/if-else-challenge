// เขียนโปรแกรมรับอินพุต 2 ตัวที่เป็นจำนวนจริง และตรวจสอบว่าจำนวนที่รับมาตัวใดมีค่ามากกว่า และพิมพ์จำนวนนั้นออกมา แต่ถ้าจำนวนทั้งสองมีค่าเท่ากันให้พิมพ์ 'มีค่าเท่ากัน'

function moreThanOrNot (num1 , num2) {
    if (num1 > num2) {
        console.log(num1)
    } else if (num1 < num2) {
        console.log(num2)
    } else {
        console.log('พวกเอ็งมีค่าเท่ากันเฟ้ยย')
    }
}

moreThanOrNot (10 , 20)
moreThanOrNot (20 , 20)
moreThanOrNot (20 , 10)