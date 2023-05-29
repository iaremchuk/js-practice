function greetUser(name) {
    const currentTime = new Date().getHours;
    const greeting = currentTime < 12 ? 'Good morning' : currentTime < 18 ? 'Good afternoon' : 'Good evening';
    return `${greeting}, ${name}`;

};

module.exports = { greetUser };