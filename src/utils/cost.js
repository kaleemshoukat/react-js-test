import {isMonOrWed, isNationalHoliday, isTueOrThu, isWeekend} from "./date.js";

const interchangeDistances = {
    "Zero Point": 0,
    "NS Interchange": 5,
    "Ph4 Interchange": 10,
    "Ferozpur Interchange": 17,
    "Lake City Interchange": 24,
    "Raiwand Interchange": 29,
    "Bahria Interchange": 34
};

const calculateDiscount = (amount) => {
    // Calculate 10% of the amount
    const discount = amount * 0.10;
    return amount - discount;
}

const calculateNationalHolidayDiscount = (amount) => {
    // Calculate 50% of the amount
    const discount = amount * 0.50;
    return amount - discount;
}

export const calculateCostAndDiscount = (entryInterchange, exitInterchange, numberPlate, entryDateTime) => {
    const entryDistance = interchangeDistances[entryInterchange];
    const exitDistance = interchangeDistances[exitInterchange];
    const distance = Math.abs(exitDistance - entryDistance);

    let baseRate = 20;
    let distanceCost;
    if (isWeekend){
        distanceCost = baseRate + ((0.2 * 1.5) * distance);
    }
    else {
        distanceCost = baseRate + (0.2 * distance);
    }

    const subTotal = baseRate + distanceCost;

    let discount = 0;
    let total = subTotal;
    const numberPart = numberPlate.split('-')[1];
    const number = parseInt(numberPart, 10);
    if (number % 2 === 0) {
        if (isMonOrWed(entryDateTime)){
            total = calculateDiscount(total);
            discount = 10;
        }
    } else {
        if (isTueOrThu(entryDateTime)){
            total = calculateDiscount(total);
            discount = 10;
        }
    }

    if (isNationalHoliday(entryDateTime)){
        total = calculateNationalHolidayDiscount(total);
        discount = discount + 50;
    }

    return {
        baseRate: baseRate.toFixed(2),
        distanceCost: distanceCost.toFixed(2),
        subTotal: subTotal.toFixed(2),
        discount: discount,
        total: total.toFixed(2)
    }
}
