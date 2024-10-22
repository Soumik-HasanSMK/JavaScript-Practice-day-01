// 0-39 C
// 40-59 B
// 60-69 A-
// 70-79 A
// 80-100 A+

let result = 80;
if (result < 0)
    console.log("Fail");
else if (result >= 0 && result < 40)
    console.log("Tumi C grade paicho");
else if (result >= 40 && result < 60)
    console.log("Tumi B grade paicho");
else if (result >= 60 && result < 70)
    console.log("Tumi B grade paicho");
else if (result >= 70 && result < 80)
    console.log("Tumi A- grade paicho");
else
    console.log("Tumi A+ grade paicho");