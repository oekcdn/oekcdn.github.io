/*HEADER>
Coded by oekoff
Created and pushed at 18 Oct 2026, 18:33:14
File updated at 18 Oct 2026, 18:33:23
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
// CODING PART \/\/\/

document.querySelectorAll("hourglass").forEach(hourglass => {
    const rotSpd = Number(hourglass.getAttribute("rotSpd")) || 500;
    const size = hourglass.getAttribute("size") || "10px";
    const pauseDur = Number(hourglass.getAttribute("pauseDur")) || 1000;

    hourglass.style.display = "inline-block";
    hourglass.style.fontSize = size;

    const rotate = () => {
        hourglass.animate(
            [
                { transform: "rotate(0deg)" },
                { transform: "rotate(180deg)" }
            ],
            {
                duration: rotSpd,
                easing: "linear",
                fill: "forwards"
            }
        ).onfinish = () => {
            setTimeout(() => {
                hourglass.animate(
                    [
                        { transform: "rotate(180deg)" },
                        { transform: "rotate(360deg)" }
                    ],
                    {
                        duration: rotSpd,
                        easing: "linear",
                        fill: "forwards"
                    }
                ).onfinish = () => {
                    setTimeout(rotate, pauseDur);
                };
            }, pauseDur);
        };
    };

    rotate();
});
