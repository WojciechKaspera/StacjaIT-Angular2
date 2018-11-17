export function PasswordValidator(control) {
    const password = control.value;
    if (password) {
        if (password.match(/[0-9]/) && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.length > 8) {
            return null;
        }
    }
        return {
            validPassword: true
        };
    

}