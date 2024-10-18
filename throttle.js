const throttle = (func, wait, options = { leading: true, trailing: true }) => {
    let timeout;
    let called = false;
    const { leading, trailing } = options;

    return (...args) => {
        if (!timeout) {
            if (leading) {
                func.apply(this, args);
            }
            called = true; 
            timeout = setTimeout(() => {
                if (trailing && called) {
                    func.apply(this, args);
                }
                timeout = null;
                called = false;
            }, wait);
        }
    };
};

const opThrottle = (func, wait, options = { leading: false, trailing: false }) => {
    let timeout;
    let called = false;
    const { leading, trailing } = options;

    return (...args) => {
        if (!called && leading) {
            func.apply(this, args);
            called = true;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (trailing && called) {
                func.apply(this, args);
            }
            called = false;
        }, wait);
    };
};

