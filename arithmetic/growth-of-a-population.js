function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 += p0 * (percent / 100) + aug;
        years++;
    }
    return years;
}


/*

p0 -> starting population
percent -> yearly percentage growth (as a digit) -> percent/100
aug (inhabitants coming or leaving each year)
p (population to equal or surpass)


*/

console.log(nbYear(1500, 5, 100, 5000));
