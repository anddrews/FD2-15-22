function debounce(fn, delay) {
    let allowed = true;

    return function(...arg) {
        if (allowed) {
            fn(...arg);
            allowed = false;            
            setTimeout(() => {
                allowed = true;
            }, delay);
        }
    }
}

function logger(a, b) {
    console.log(`logger: ${a} ${b}`);
}

const debounced = debounce(logger, 100);

debounced(1, 2);
debounced(3, 4);
debounced(3, 4);
debounced(3, 4);
debounced(3, 4);
debounced(3, 4);

setTimeout(() => debounced(5, 6), 100)