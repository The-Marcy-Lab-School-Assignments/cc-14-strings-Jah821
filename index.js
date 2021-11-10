//write your code here
function stripUpperCase(str) {
    let ok = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toUpperCase()) {
            ok += str[i]
        }

    }
    return ok
};
