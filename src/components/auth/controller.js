import prisma from "../../db";
import { signToken } from "../../auth";
import { hashPassword } from "../../helper/password";

export const signIn = async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: req.body.email,
            },
        });

        if (!user) {
            return res.status(500).json({
                ok: false,
                data: "User not found",
            });
        }

        if (user.password !== hashPassword(req.body.password)) {
            return res.status(500).json({
                ok: false,
                data: "Error in email or password",
            });
        }

        user.token = signToken({
            email: user.email,
            password: user.password,
        });
        delete user.password;

        return res.status(200).json({
            ok: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message,
        });
    }
};

export const signUp = async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                ...req.body,
                password: hashPassword(req.body.password),
            },
        });

        return res.status(200).json({
            ok: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message,
        });
    }
};