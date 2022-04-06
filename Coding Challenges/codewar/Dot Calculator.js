
function dotCalculator (equation) {
    const dots = equation.split(/ | \/\/ /)
    if(dots[1] === "//") dots[1]="/"
    const count = eval(dots[0].length + dots[1] + dots[2].length)
    return ".".repeat(count)
}