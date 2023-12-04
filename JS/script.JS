const hourHand = document.querySelector( '.hour-hand');
const minuteHand = document.querySelector( '.minute-hand');
const secondHand = document.querySelector( '.second-hand');



const getTime = () => {
    const date = new  Date ();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

setInterval(() => {
    const { seconds, minutes, hours} = getTime();
    secondHand.style.Transform = `translate(0, -50%) rotate(${seconds * 6 } deg)`;
    minuteHand.style.Transform = `translate(0, -50%) rotate(${minutes * 6 } deg)`;
    hourHand.style.Transform = `translate(0, -50%) rotate(${hours * 30 } deg)`;
}, 1000);


