export const getClosest = (elm,selector) => {
    for( ; elm && elm !== document; elm = elm.parentNode) {
        if(elm.matches(selector)) return elm;
    }
    return null;
}