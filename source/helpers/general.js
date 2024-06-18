

export const formatToIndianNumberingSystem = (num) => {
    let numStr = num.toString();
    let lastThreeDigits = numStr.slice(-3);
    let otherDigits = numStr.slice(0, -3);
    if (otherDigits !== '') {
        lastThreeDigits = ',' + lastThreeDigits;
    }
    return otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThreeDigits;
}
