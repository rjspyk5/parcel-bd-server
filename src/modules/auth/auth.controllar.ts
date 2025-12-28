import type { NextFunction, Request, Response } from "express"

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body ?? {};
    console.log(email, password)

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide email and password"
        })
    }

    try {
        await fetch('https://jsonplaceholder.typicode.com/tods/1')
            .then(response => response.json())
            .then(json => console.log(json))
    } catch (error: Error | any) {
        next(error)
    }

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