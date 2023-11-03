function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.opacity = Math.random();
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

function generateSnowfall() {
    setInterval(createSnowflake, 500);
}

generateSnowfall();
