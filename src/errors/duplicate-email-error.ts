import { ApplicationError } from "@/protocols";

export function duplicateEmailError(): ApplicationError {
    return {
        name: "DuplicateEmailError",
        message: "There is already an user with given email"
    }
}