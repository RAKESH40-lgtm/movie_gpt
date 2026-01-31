export const userFormValidate=(name , email , password ,string)=>{
    const nameRegexTest = /^[a-zA-Z\s'-]{2,50}$/.test(name);
    const emailRegexTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegexTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

    if(!nameRegexTest && string === "signUp") return "Name is invalid"

    if(!emailRegexTest) return "Email is invalid"

    if(!passwordRegexTest) return "Password is invalid"

    return null

}