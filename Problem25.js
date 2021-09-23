// คุณเป็นโปรแกรมเมอร์ในร้านขายของจิปาถะแห่งหนึ่ง ร้านแห่งนี้มีระบบสมาชิกซึ่งผู้เป็นสมาชิกจะได้รับส่วนลดพิเศษ คุณได้รับมอบหมายให้เขียนโปรแกรมซึ่งมีรายละเอียด ดังนี้
// - รับอินพุต 2 ตัวที่เป็นสายอักขระ และจำนวนจริง (isMember, bill) เพื่อคำนวณส่วนลดจากการเป็นสมาชิกและพิมพ์ออกมา โดยมีเงื่อนไขดังนี้
// - ถ้า isMember เท่ากับ 'yes' ให้พิจารณา bill
// - ถ้า bill มากกว่าหรือเท่ากับ 500 จะได้รับส่วนลด 5%
// - ถ้า bill มากกว่าหรือเท่ากับ 1000 จะได้รับส่วนลด 10%
// - ถ้า bill มากกว่าหรือเท่ากับ 5000 จะได้รับส่วนลด 15%
// - ถ้า isMember เท่ากับ 'no' จะไม่ได้รับส่วนลด

function discountBill(isMember, bill) {
  if (isMember === "yes") {
    if (bill >= 5000) {
      discount = (bill * 15) / 100;
      result = bill - discount;
    } else if (bill >= 1000) {
      discount = (bill * 10) / 100;
      result = bill - discount;
    } else if (bill >= 500) {
      discount = (bill * 5) / 100;
      result = bill - discount;
    }
    console.log(result);
  } else if (isMember === "no") {
    console.log("ไม่ได้รับส่วนลดนะจ๊ะ ราคาจึงเป็น " + bill);
  }
}

discountBill("yes", 5000);
discountBill("yes", 6000);
discountBill("yes", 1000);
discountBill("yes", 2000);
discountBill("yes", 500);
discountBill("yes", 600);
discountBill("no", 600);
