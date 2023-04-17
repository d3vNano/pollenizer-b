import { Prisma } from "@prisma/client";
import { db } from "@/config";

export async function findManyBusinessData() {
    const params: Prisma.BusinessArgs = {
        select: {
            id: true,
            title: true,
            sub_title: true,
            logo: true,
            category: {
                select: {
                    id: true,
                    label: true
                }
            },
            photos: {
                select: {
                    id: true,
                    a: true,
                    b: true,
                    c: true,
                    d: true,
                }
            },
            address: {
                select: {
                    id: true,
                    zip_code: true,
                    street: true,
                    number: true,
                    complement: true,
                    district: true,
                    city: true,
                    state: true,
                }
            },
            favorites: {
                select: {
                    id: true,
                    user_id: true,
                    business_id: true,
                }
            },
            assessments: {
                select: {
                    id: true,
                    user_id: true,
                    business_id: true,
                }
            }
        }
    }

    return db.business.findMany(params)
}

export async function findBusinessById(business_id: number) {
    const params: Prisma.BusinessFindUniqueArgs = {
        where: {
            id: business_id
        },
        select: {
            id: true,
            title: true,
            sub_title: true,
            logo: true,
            category: {
                select: {
                    id: true,
                    label: true
                }
            },
            photos: {
                select: {
                    id: true,
                    a: true,
                    b: true,
                    c: true,
                    d: true,
                }
            },
            address: {
                select: {
                    id: true,
                    zip_code: true,
                    street: true,
                    number: true,
                    complement: true,
                    district: true,
                    city: true,
                    state: true,
                }
            },
            favorites: {
                select: {
                    id: true,
                    user_id: true,
                    business_id: true,
                }
            },
            assessments: {
                select: {
                    id: true,
                    user_id: true,
                    business_id: true,
                }
            },
            services: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    price: true,
                    category: {
                        select: {
                            id: true,
                            label: true
                        }
                    },
                    business_id: true
                }
            }
        }
    };

    return db.business.findUnique(params)
}