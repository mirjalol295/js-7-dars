// DARSDA ISHLANISHI KERAK BO’LGAN MASALALAR


// if1

// let num = prompt("Son kiriting:");
// num = parseInt(num);

// if (num > 0) {
//     num += 1;  // Agar musbat bo'lsa 1 ga oshiramiz
// } else {
//     num -= 2;  // Aks holda 2 ga kamaytiramiz
// }

// console.log("Natija:", num);

// if2

// let a = parseInt(prompt("Birinchi sonni kiriting:"));
// let b = parseInt(prompt("Ikkinchi sonni kiriting:"));
// let c = parseInt(prompt("Uchinchi sonni kiriting:"));

// let positiveCount = 0;
// let negativeCount = 0;

// if (a > 0) positiveCount++;
// else if (a < 0) negativeCount++;

// if (b > 0) positiveCount++;
// else if (b < 0) negativeCount++;

// if (c > 0) positiveCount++;
// else if (c < 0) negativeCount++;

// console.log("Musbat sonlar:", positiveCount);
// console.log("Manfiy sonlar:", negativeCount);

// if3 

// let num1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let num2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
// let num3 = parseInt(prompt("Uchinchi sonni kiriting:"));

// let smallest = Math.min(num1, num2, num3);
// let largest = Math.max(num1, num2, num3);

// console.log("Kichik son:", smallest);
// console.log("Katta son:", largest);

// if4 

// let a = parseInt(prompt("Birinchi sonni kiriting:"));
// let b = parseInt(prompt("Ikkinchi sonni kiriting:"));
// let c = parseInt(prompt("Uchinchi sonni kiriting:"));

// if (a === b && a !== c) {
//     console.log("Uchinchi son boshqacha, tartib raqami: 3");
// } else if (a === c && a !== b) {
//     console.log("Ikkinchi son boshqacha, tartib raqami: 2");
// } else if (b === c && b !== a) {
//     console.log("Birinchi son boshqacha, tartib raqami: 1");
// } else {
//     console.log("Barcha sonlar teng yoki hammasi farqli.");
// } 

// if 5

// let x = parseFloat(prompt("x sonini kiriting:"));

// let result;
// if (x < -2 || x > 2) {
//     result = 2 * x;
// } else {
//     result = -3 * x;
// }

// console.log("Natija:", result);


// if6

// let number = parseInt(prompt("Son kiriting:"));

// if (number === 0) {
//     console.log("Nol");
// } else if (number > 0) {
//     if (number % 2 === 0) {
//         console.log("Musbat juft");
//     } else {
//         console.log("Musbat toq");
//     }
// } else {
//     if (number % 2 === 0) {
//         console.log("Manfiy juft");
//     } else {
//         console.log("Manfiy toq");
//     }
// }

// if7

// let day = parseInt(prompt("1-7 orasida son kiriting:"));

// switch (day) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("Noto'g'ri kirish.");
// }


// if 8

// let A = parseFloat(prompt("A sonini kiriting:"));
// let B = parseFloat(prompt("B sonini kiriting:"));
// let amal = parseInt(prompt("Amalni kiriting (1-qo'shish, 2-ayirish, 3-bo'lish, 4-ko'paytirish):"));

// switch (amal) {
//     case 1:
//         console.log("Natija:", A + B);
//         break;
//     case 2:
//         console.log("Natija:", A - B);
//         break;
//     case 3:
//         if (B !== 0) {
//             console.log("Natija:", A / B);
//         } else {
//             console.log("0 ga bo'lib bo'lmaydi!");
//         }
//         break;
//     case 4:
//         console.log("Natija:", A * B);
//         break;
//     default:
//         console.log("Noto'g'ri amal kiritildi.");
// }


// if9

// let A = parseFloat(prompt("A sonini kiriting:"));
// let B = parseFloat(prompt("B sonini kiriting:"));
// let amal = parseInt(prompt("Amalni kiriting (1-qo'shish, 2-ayirish, 3-bo'lish, 4-ko'paytirish):"));

// switch (amal) {
//     case 1:
//         console.log("Natija:", A + B);
//         break;
//     case 2:
//         console.log("Natija:", A - B);
//         break;
//     case 3:
//         if (B !== 0) {
//             console.log("Natija:", A / B);
//         } else {
//             console.log("0 ga bo'lib bo'lmaydi!");
//         }
//         break;
//     case 4:
//         console.log("Natija:", A * B);
//         break;
//     default:
//         console.log("Noto'g'ri amal kiritildi.");
// }


// Uyga vazifa

// 1 

// let number = prompt("Butun son kiriting:");
// number = parseInt(number);

// if (number > 0) {
//     number += 1;
// }
// console.log(number);

// 2

// let number = prompt("Butun son kiriting:");
// number = parseInt(number);

// if (number > 0) {
//     number += 1;
// } else if (number < 0) {
//     number -= 2;
// } else {
//     number = 10;
// }
// console.log(number);

// 3

// let a = prompt("1-sonni kiriting:");
// let b = prompt("2-sonni kiriting:");
// let c = prompt("3-sonni kiriting:");

// let positiveCount = 0;

// if (a > 0) positiveCount++;
// if (b > 0) positiveCount++;
// if (c > 0) positiveCount++;

// console.log(`Musbat sonlar soni: ${positiveCount}`);

// 4

// let a = prompt("1-sonni kiriting:");
// let b = prompt("2-sonni kiriting:");

// let max = Math.max(a, b);
// console.log(`Katta son: ${max}`);

// 5

// let a = prompt("1-sonni kiriting:");
// let b = prompt("2-sonni kiriting:");

// let min = Math.min(a, b);
// console.log(`Kichik son: ${min}`);


// 6

// let a = prompt("1-sonni kiriting:");
// let b = prompt("2-sonni kiriting:");

// if (a > b) {
//     console.log(`Katta son: ${a}, Kichik son: ${b}`);
// } else {
//     console.log(`Katta son: ${b}, Kichik son: ${a}`);
// }

// 7 

// let a = prompt("A haqiqiy sonni kiriting:");
// let b = prompt("B haqiqiy sonni kiriting:");

// if (a > b) {
//     [a, b] = [b, a]; // A kichik B katta bo'lishi uchun almashamiz
// }
// console.log(`A: ${a}, B: ${b}`);

// 8

// let a = prompt("A butun sonni kiriting:");
// let b = prompt("B butun sonni kiriting:");

// if (a !== b) {
//     a += b;
//     b = a;
// } else {
//     a = 0;
//     b = 0;
// }
// console.log(`A: ${a}, B: ${b}`);

// 9

// let a = prompt("A butun sonni kiriting:");
// let b = prompt("B butun sonni kiriting:");

// if (a !== b) {
//     a = Math.max(a, b);
//     b = a;
// } else {
//     a = 0;
//     b = 0;
// }
// console.log(`A: ${a}, B: ${b}`);

// 10


// let a = prompt("1-sonni kiriting:");
// let b = prompt("2-sonni kiriting:");
// let c = prompt("3-sonni kiriting:");

// let min = Math.min(a, b, c);
// console.log(`Kichik son: ${min}`);

// 11

// let a = prompt("1-sonni kiriting:");
// let b = prompt("2-sonni kiriting:");
// let c = prompt("3-sonni kiriting:");

// let max = Math.max(a, b, c);
// let min = Math.min(a, b, c);
// let middle = a + b + c - max - min;

// console.log(`O'rta son: ${middle}`);

// 12


// let a = prompt("1-sonni kiriting:");
// let b = prompt("2-sonni kiriting:");
// let c = prompt("3-sonni kiriting:");

// let nums = [a, b, c].sort((x, y) => x + y).slice(1); // Eng katta yig'indi uchun eng kichik ikkitasini tanlaymiz
// console.log(`Eng katta yig'indi: ${nums[0]} va ${nums[1]}`);

// 13


// let a = prompt("A haqiqiy sonni kiriting:");
// let b = prompt("B haqiqiy sonni kiriting:");
// let c = prompt("C haqiqiy sonni kiriting:");

// if (a < b && b < c) {
//     a *= 2;
//     b *= 2;
//     c *= 2;
// } else {
//     a = -a;
//     b = -b;
//     c = -c;
// }
// console.log(`A: ${a}, B: ${b}, C: ${c}`);

// 14


// let a = prompt("A haqiqiy sonni kiriting:");
// let b = prompt("B haqiqiy sonni kiriting:");
// let c = prompt("C haqiqiy sonni kiriting:");

// if ((a < b && b < c) || (a > b && b > c)) {
//     a *= 2;
//     b *= 2;
//     c *= 2;
// } else {
//     a = -a;
//     b = -b;
//     c = -c;
// }
// console.log(`A: ${a}, B: ${b}, C: ${c}`);

// 15


// let a = prompt("A haqiqiy sonni kiriting:");
// let b = prompt("B haqiqiy sonni kiriting:");
// let c = prompt("C haqiqiy sonni kiriting:");

// if ((a < b && b < c) || (a > b && b > c)) {
//     a *= 2;
//     b *= 2;
//     c *= 2;
// } else {
//     a = -a;
//     b = -b;
//     c = -c;
// }
// console.log(`A: ${a}, B: ${b}, C: ${c}`);

// 16

// let x = prompt("Haqiqiy son kiriting:");

// if (x <= 0) {
//     x = -x;
// } else if (x < 2) {
//     x = x * x;
// } else {
//     x = 4;
// }
// console.log(x);

// 17

// let year = prompt("Yilni kiriting:");

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log("366 kun (kabisa yil)");
// } else {
//     console.log("365 kun (kabisa bo'lmagan yil)");
// }


// 18


// let number = prompt("1-999 oraliqda son kiriting:");
// if (number >= 10 && number < 100 && number % 2 === 0) {
//     console.log("Ikki xonali juft son");
// } else if (number >= 100 && number % 2 !== 0) {
//     console.log("Uch xonali toq son");
// }

// case 1

// let k = prompt("Bahoni kiriting (1-5):");
// switch (k) {
//     case "1":
//         console.log("Yomon");
//         break;
//     case "2":
//         console.log("Qoniqarsiz");
//         break;
//     case "3":
//         console.log("Qoniqarli");
//         break;
//     case "4":
//         console.log("Yaxshi");
//         break;
//     case "5":
//         console.log("A'lo");
//         break;
//     default:
//         console.log("Xato");
// }


// case 2

// let month = prompt("Oy raqamini kiriting (1-12):");
// switch (month) {
//     case "12":
//     case "1":
//     case "2":
//         console.log("Qish");
//         break;
//     case "3":
//     case "4":
//     case "5":
//         console.log("Bahor");
//         break;
//     case "6":
//     case "7":
//     case "8":
//         console.log("Yoz");
//         break;
//     case "9":
//     case "10":
//     case "11":
//         console.log("Kuz");
//         break;
//     default:
//         console.log("Xato");
// }


// case 3

// let month = 2; // Oy raqami (1-12)
// let days;

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     days = 31;
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     days = 30;
// } else if (month === 2) {
//     days = 28; // Kabisa bo'lmagan yil
// }

// console.log(`Oyda kunlar soni: ${days}`);

// case4

// let unit = 3; // Uzunlik birligi (1-5)
// let lengthValue = 500; // Kesma uzunligi
// let lengthInMeters;

// switch (unit) {
//     case 1: // Desimetr
//         lengthInMeters = lengthValue / 10;
//         break;
//     case 2: // Kilometr
//         lengthInMeters = lengthValue * 1000;
//         break;
//     case 3: // Metr
//         lengthInMeters = lengthValue;
//         break;
//     case 4: // Millimeter
//         lengthInMeters = lengthValue / 1000;
//         break;
//     case 5: // Santimetr
//         lengthInMeters = lengthValue / 100;
//         break;
// }

// console.log(`Kesma uzunligi metrda: ${lengthInMeters}`);

// case 5

// let weightUnit = 2; // Og'irlik birligi (1-5)
// let weightValue = 500; // Og'irlik qiymati
// let weightInKilograms;

// switch (weightUnit) {
//     case 1: // Kilogramm
//         weightInKilograms = weightValue;
//         break;
//     case 2: // Milligramm
//         weightInKilograms = weightValue / 1000000;
//         break;
//     case 3: // Gramm
//         weightInKilograms = weightValue / 1000;
//         break;
//     case 4: // Tonna
//         weightInKilograms = weightValue * 1000;
//         break;
//     case 5: // Sentner
//         weightInKilograms = weightValue * 100; 
//         break;
// }

// console.log(`Og'irlik qiymati kilogrammlarda: ${weightInKilograms}`);

// case 6

// let D = 15; // Kun
// let M = 8; // Oy
// let totalDays = 0;

// for (let month = 1; month <= 12; month++) {
//     if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//         totalDays += 31;
//     } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//         totalDays += 30;
//     } else if (month === 2) {
//         totalDays += 28; // Kabisa bo'lmagan yil
//     }
// }

// console.log(`Berilgan sanaga mos kun: ${totalDays}`);

// case 7

// let D = 30; // Kun
// let M = 4; // Oy

// if (D < 31) {
//     D++;
// } else {
//     D = 1;
//     if (M < 12) {
//         M++;
//     } else {
//         M = 1; // Yil boshiga o'tish
//     }
// }

// console.log(`Keyingi sana: ${D} / ${M}`);

// case 8

// let direction = 's'; // Yo'nalish (s, j, q, g)
// let command = 1; // Komanda (0, 1, 2)

// if (command === 1) {
//     if (direction === 's') direction = 'q'; // Shimoldan chapga
//     else if (direction === 'q') direction = 'j'; // Sharqdan chapga
//     else if (direction === 'j') direction = 'g'; // Janubdan chapga
//     else if (direction === 'g') direction = 's'; // G'arbdan chapga
// } else if (command === 2) {
//     if (direction === 's') direction = 'g'; // Shimoldan o'ngga
//     else if (direction === 'g') direction = 'j'; // G'arbdan o'ngga
//     else if (direction === 'j') direction = 'q'; // Janubdan o'ngga
//     else if (direction === 'q') direction = 's'; // Sharqdan o'ngga
// }

// console.log(`Robot yo'nalishi: ${direction}`);

// case 9

// let N = 11; // Karta qiymati (6-14)
// let M = 1; // Karta turi (1-4)
// let cardName;

// if (N >= 6 && N <= 10) {
//     cardName = `${N}`;
// } else if (N === 11) {
//     cardName = "valet";
// } else if (N === 12) {
//     cardName = "dama";
// } else if (N === 13) {
//     cardName = "qirol";
// } else if (N === 14) {
//     cardName = "tuz";
// }

// let cardType;

// switch (M) {
//     case 1: cardType = "g'isht"; break;
//     case 2: cardType = "olma"; break;
//     case 3: cardType = "chillak"; break;
//     case 4: cardType = "qarg'a"; break;
// }

// console.log(`${cardName} ${cardType}`);

// case 10

// let problemsCount = 15; // Masala soni (10-40)
// let result;

// if (problemsCount === 10) {
//     result = "o'n ta masala";
// } else if (problemsCount === 11) {
//     result = "o'n bir ta masala";
// } else if (problemsCount === 12) {
//     result = "o'n ikki ta masala";
// } else if (problemsCount === 13) {
//     result = "o'n uchta masala";
// } else if (problemsCount === 14) {
//     result = "o'n to'rt ta masala";
// } else if (problemsCount >= 20 && problemsCount < 30) {
//     result = `yigirma ${problemsCount - 20} ta masala`;
// } else if (problemsCount >= 30) {
//     result = `o'ttiz ${problemsCount - 30} ta masala`;
// } else {
//     result = `${problemsCount} ta masala`;
// }

// console.log(result);


// case 11

// let number = 123; // 100-999 gacha son
// let hundreds, tens, ones;
// let words = "";

// hundreds = Math.floor(number / 100);
// tens = Math.floor((number % 100) / 10);
// ones = number % 10;

// switch (hundreds) {
//     case 1: words += "bir yuz "; break;
//     case 2: words += "ikki yuz "; break;
//     case 3: words += "uch yuz "; break;
//     case 4: words += "to'rt yuz "; break;
//     case 5: words += "besh yuz "; break;
//     case 6: words += "olti yuz "; break;
//     case 7: words += "yetti yuz "; break;
//     case 8: words += "sakkiz yuz "; break;
//     case 9: words += "to'qqiz yuz "; break;
// }

// if (tens === 1) {
//     if (ones === 0) {
//         words += "o'n";
//     } else if (ones === 1) {
//         words += "o'n bir";
//     } else if (ones === 2) {
//         words += "o'n ikki";
//     } else if (ones === 3) {
//         words += "o'n uch";
//     } else if (ones === 4) {
//         words += "o'n to'rt";
//     } else if (ones === 5) {
//         words += "o'n besh";
//     } else if (ones === 6) {
//         words += "o'n olti";
//     } else if (ones === 7) {
//         words += "o'n yetti";
//     } else if (ones === 8) {
//         words += "o'n sakkiz";
//     } else if (ones === 9) {
//         words += "o'n to'qqiz";
//     }
// } else {
//     switch (tens) {
//         case 2: words += "yigirma "; break;
//         case 3: words += "o'ttiz "; break;
//         case 4: words += "qirq "; break;
//         case 5: words += "ellik "; break;
//         case 6: words += "oltmish "; break;
//         case 7: words += "yetmish "; break;
//         case 8: words += "sakson "; break;
//         case 9: words += "to'qson "; break;
//     }
    
//     if (ones === 1) {
//         words += "bir";
//     } else if (ones === 2) {
//         words += "ikki";
//     } else if (ones === 3) {
//         words += "uch";
//     } else if (ones === 4) {
//         words += "to'rt";
//     } else if (ones === 5) {
//         words += "besht";
//     } else if (ones === 6) {
//         words += "olti";
//     } else if (ones === 7) {
//         words += "yetti";
//     } else if (ones === 8) {
//         words += "sakkiz";
//     } else if (ones === 9) {
//         words += "to'qqiz";
//     }
// }

// console.log(`Soni so'zda: ${words}`);


// case 12

// let description = "Salom, qanday yordam bera olishim mumkin?"; // Ta'rif
// let response;

// if (description.includes("salom")) {
//     response = "Salom, sizga qanday yordam bera olishim mumkin?";
// } else if (description.includes("rahmat")) {
//     response = "Sizga rahmat, har doim yordam berishga tayyorman!";
// } else if (description.includes("yordam")) {
//     response = "Yordam berish uchun shu yerda bo'laman!";
// } else {
//     response = "Ta'rifni tushunmadim, iltimos aniqlik kiritishingiz mumkinmi?";
// }

// console.log(response);


// Qoshimcha 10ta 

// 5 ta matematik 

// 1. Kvadratning maydoni

// let sideLength = 5; 
// let area = sideLength * sideLength;

// console.log(`Kvadratning maydoni: ${area}`);


// 2.Doiraning perimetri

// let radius = 7; // Doiraning radiusi
// let perimeter = 2 * Math.PI * radius;

// console.log(`Doiraning perimetri: ${perimeter.toFixed(2)}`);


// 3. Pifagor teoremasi

// let a = 3; 
// let b = 4; 
// let c = Math.sqrt(a * a + b * b); 

// console.log(`Gipotenuza: ${c}`);


// 4. Mantiqiy hisoblash

// let num1 = 10;
// let num2 = 5;
// let result = (num1 > num2) ? (num1 - num2) : (num1 + num2);

// console.log(`Natija: ${result}`);


// 5. Tezlikni hisoblash

// let distance = 150; 
// let time = 2; 
// let speed = distance / time;

// console.log(`Tezlik: ${speed} km/soat`);

// 6. Maoshni hisoblash

// let hourlyRate = 15; 
// let hoursWorked = 40; 
// let Salary = hourlyRate * hoursWorked;

// console.log(`Jami maosh: $${Salary}`);

// 7. Yoshlikni hisoblash

// let birthYear = 1995; // Tug'ilgan yil
// let currentYear = 2024; // Hozirgi yil
// let age = currentYear - birthYear;

// console.log(`Yosh: ${age}`);
