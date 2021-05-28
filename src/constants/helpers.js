export const formatMoneyHelper = (amount) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(amount);
}

export const setGrossYieldHelper = (monthlyRent, listPrice) => {
    return `${((monthlyRent * 12) / listPrice * 100).toFixed(1)}%`
}