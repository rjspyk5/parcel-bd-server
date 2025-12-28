import type { Request, Response } from "express"

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    res.send("login")
}

export const register = async (req: Request, res: Response) => {
    res.send("register")
}

export const logout = async (req: Request, res: Response) => {
    res.send("logout")
}

export const me = async (req: Request, res: Response) => {
    res.send("me")
}