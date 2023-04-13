import { ApplicationInvalidateDataError } from "@/protocols"

export function invalidDataError(details: string[]): ApplicationInvalidateDataError {
    return {
        name: "InvalidDataError",
        message: "Invalid Data",
        details,
    }
}