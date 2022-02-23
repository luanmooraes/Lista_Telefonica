export const isEmpty = (obj) => {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    if (obj === undefined) return true;
    if (obj == null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    if (typeof obj !== "object") return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

export const isValidEmail = (email) => {
    const emailRegex = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    return emailRegex.test(email)
}