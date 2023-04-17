import bcrypt from "bcrypt"

import { Address, User } from "@prisma/client";
import { duplicateEmailError } from "@/errors";
import { CreateAddressParams, CreateUserAndAddressParams } from "@/protocols";
import { addressRepository, userRepository } from "@/repositories";



export async function createUser({ cpf, name, email, phone, photo, password, zip_code, street, number, complement, district, city, state }: CreateUserAndAddressParams): Promise<User> {
    await validateUniqueEmailOrFail(email)

    const address = await createUserAddress({ zip_code, street, number, complement, district, city, state })

    const hashPassword = await bcrypt.hash(password, 12)

    return userRepository.createNewUser({
        cpf, name, email, phone, photo, password: hashPassword, address_id: address.id
    })
}

async function createUserAddress({ zip_code, street, number, complement, district, city, state }: CreateAddressParams): Promise<Address> {

    const address = await addressRepository.createAddress({ zip_code, street, number, complement, district, city, state })

    return address

}

async function validateUniqueEmailOrFail(email: string) {
    const userWithSameEmail = await userRepository.findUserByEmail(email)

    if (userWithSameEmail) throw duplicateEmailError()
}