import bcrypt from "bcrypt"
import jwt, { Secret } from "jsonwebtoken"

import { exclude } from "@/utils/prisma-utils";
import { invalidCredentialsError } from "@/errors";
import { GetUserOrFacilResult, SignInParams, SignInResult } from "@/protocols";
import { sessionRepository, userRepository } from "@/repositories";


export async function signIn(params: SignInParams): Promise<SignInResult> {
    const { email, password } = params
    const user = await getUserOrFail(email)

    await validatePasswordOrFail(password, user.password)

    const result = await sessionIsAlreadyOpen(user.id)

    if (result) {
        return {
            user: exclude(user, "password"),
            token: result.token,
            message: "User already has an active session!"
        }

    }

    const token = await createSession(user.id)

    return {
        user: exclude(user, "password"),
        token,
    }
}

export async function getUserOrFail(email: string): Promise<GetUserOrFacilResult> {
    const user = await userRepository.findUserByEmail(email, { id: true, email: true, password: true })

    if (!user) throw invalidCredentialsError()

    return user
}

export async function validatePasswordOrFail(password: string, userPassword: string) {
    const isValid: boolean = bcrypt.compareSync(password, userPassword)

    if (!isValid) throw invalidCredentialsError()
}

export async function sessionIsAlreadyOpen(user_id: number) {
    const openSession = await sessionRepository.sessionIsOpen(user_id)

    if (openSession) return openSession
}

export async function createSession(user_id: number) {
    const token = jwt.sign({ user_id }, process.env.JWT_SECRET as Secret, { expiresIn: "6h" })

    await sessionRepository.createSession({
        token, user_id
    })

    return token
}