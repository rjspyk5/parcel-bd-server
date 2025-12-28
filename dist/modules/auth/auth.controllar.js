export const login = async (req, res) => {
    const { email, password } = req.body;
    res.send("login");
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