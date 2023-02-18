setInterval(() => {
    d = new Date();
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds()
    hrotation = 30 * htime + mtime / 2;
    hrotation = 6 * mtime
    hrotation = 6 * stime

    hour.style.transform = 'rotate(${hrotation}deg)';
    minute.style.transform = 'rotate(${hrotation}deg)';
    second.style.transform = 'rotate(${hrotation}deg)';
}, 1000)