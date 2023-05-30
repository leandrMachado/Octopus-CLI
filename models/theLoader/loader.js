const createSpinner = (text = "", opts = {}) => {
    let frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    let current = 0;
    let interval;

    let spinier = {
        start: () => {
            interval = setInterval(() => {
                console.log('\r' + frames[i] + ' ' + text)
                current = (current +1) % frames.length
            }, 100);
        },
        stop: () => {
            process.stdout.write('\rOperation completed!\n');
            clearInterval(interval);
        }
    }

    return spinier;
}

module.exports = { createSpinner }