/*HEADER>
Coded by oekoff
Created and pushed at 18 Oct 2026, 18:33:14
File updated at 19 Oct 2026, 17:58:45
Free and Opensourced
*/
/*ADVERT,PROMO>
JOIN UPOTSS WA CHANNEL: https://chat.whatsapp.com/CDdfYR50PtS19zTSPHsiWR
JOIN UPOTSS WA COMMUNITY: https://chat.whatsapp.com/CDdfYR50PtS19zTSPHsiWR
*/
/*NOTES>
Please follow UPOTSS WhatsApp channel and community. Thank you ❤️😊✨
This script was coded by oekoff
Hope this helps, enjoy your lives peacefully and eternally
God bless you all :)

..and of course, my sweet honey! I love you Carmen :)
*/
// CODING PART \\\\\\

document.querySelectorAll("hourglass").forEach(hourglass => {
    const rotSpd = Number(hourglass.getAttribute("rotSpd")) || 500;
    const size = hourglass.getAttribute("size") || "10px";
    const pauseDur = Number(hourglass.getAttribute("pauseDur")) || 1000;
    const rotDir = (hourglass.getAttribute("rotDir") || "cw").toLowerCase();

    const direction = rotDir === "ccw" ? -1 : 1;

    hourglass.style.display = "inline-block";
    hourglass.style.fontSize = size;

    let angle = 0;

    const rotate = () => {
        const nextAngle = angle + (180 * direction);

        hourglass.animate(
            [
                { transform: `rotate(${angle}deg)` },
                { transform: `rotate(${nextAngle}deg)` }
            ],
            {
                duration: rotSpd,
                easing: "linear",
                fill: "forwards"
            }
        ).onfinish = () => {
            angle = nextAngle;
            setTimeout(rotate, pauseDur);
        };
    };

    rotate();
});
