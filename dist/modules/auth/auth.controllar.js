export const login = async (req, res, next) => {
    const { email, password } = req.body ?? {};
    console.log(email, password);
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide email and password"
        });
    }
    try {
        await fetch('https://jsonplaceholder.typicode.com/tods/1')
            .then(response => response.json())
            .then(json => console.log(json));
    }
    catch (error) {
        next(error);
    }
};
export const register = async (req, res) => {
    res.send("register");
};
export const logout = async (req, res) => {
    res.send("logout");
};
export const me = async (req, res) => {
    res.send("me");
};
//# sourceMappingURL=auth.controllar.js.map