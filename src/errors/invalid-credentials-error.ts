import { ApplicationError } from "@/protocols";

export function invalidCredentialsError(): ApplicationError {
    return {
        name: "InvalidCredentialsError",
        message: "credentials data are incorrect",
    };
}