import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function testBusinessAddress() {
    return await prisma.address.createMany({
        data: [
            {
                "zip_code": "00000000",
                "street": "Rua Coisa e Tal",
                "number": "100",
                "district": "Muito Legal",
                "city": "Metrocity",
                "state": "AA",
            },
            {
                "zip_code": "99999999",
                "street": "Rua Tal e Coisa",
                "number": "9999",
                "complement": "302, 3º andar",
                "district": "Mais Legal",
                "city": "Metropolis",
                "state": "BB",
            },
            {
                "zip_code": "11111111",
                "street": "Rua Alguma Coisa",
                "number": "49",
                "complement": "B",
                "district": "Nada de Nada",
                "city": "Lugarnenhum",
                "state": "CC",
            },
            {
                "zip_code": "55555555",
                "street": "Rua Coisa Nenhuma",
                "number": "01",
                "complement": "Apto. 11 Blc. 4",
                "district": "Frances",
                "city": "Pão Saulo",
                "state": "DD",
            }
        ], skipDuplicates: true
    })
}

async function testBusinessPhotos() {
    return await prisma.photograph.createMany({
        data: [
            {
                "a": "http://barbeirocampinas.com.br/wp-content/uploads/2017/01/cabelo2.jpg",
                "b": "https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20861.jpg",
                "c": "https://static.ndmais.com.br/2021/03/istock-1185955900-800x533.jpg",
                "d": "https://www.belasis.com.br/wp-content/uploads/2022/01/Vantagens-barbearia-Blogpost-Banner.png"
            },
            {
                "a": "https://img.freepik.com/fotos-gratis/mulher-mostrando-suas-lindas-unhas_23-2148697087.jpg?w=2000",
                "b": "https://scontent.fbfh21-1.fna.fbcdn.net/v/t1.6435-9/101731174_3234851193232659_2390273325994606592_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHPyKbtdzcxQVv4BGd4uTyw9n7i42rN6aL2fuLjas3pos3Z86HbzxHZ8h-VqmA3QElG5sjwQKM9YZlDnksp3_W7&_nc_ohc=qVadOHzfWPoAX_bHXHD&_nc_ht=scontent.fbfh21-1.fna&oh=00_AfBjwU4V8suIjEAIyvjbAyUy7lhtPK1ACiKf4DkW938zRA&oe=644DAA1F",
                "c": "https://www.rogouveia.com.br/wp-content/uploads/2022/03/acripie-1024x768.jpeg",
                "d": "https://images.tcdn.com.br/img/img_prod/784773/pedicure_1003775_1_20200811170810.jpeg"
            },
            {
                "a": "https://conteudo.imguol.com.br/c/entretenimento/c2/2019/05/28/massagem-com-pedras-quentes-1559059843949_v2_4x3.jpg",
                "b": "https://www.belezap.com.br/wp-content/uploads/2019/12/conheca-a-massagem-perfeita-para-sua-necessidade-2-20191121160759.jpg.jpg",
                "c": "https://img.freepik.com/fotos-gratis/massagista-fazendo-massagem-no-ombro-feminino-no-salao-de-beleza_186202-4233.jpg",
                "d": "https://paulomilitao.com.br/wdadmin/uploads/servicos/imagem-massagem-relaxante-202202081930.webp"
            },
            {
                "a": "https://img.freepik.com/fotos-gratis/mulher-marcada-para-cirurgia-estetica_273609-14515.jpg",
                "b": "https://image.med.br/wp-content/uploads/2016/12/estetica.jpg",
                "c": "https://media.istockphoto.com/id/1204160177/pt/foto/hardware-cosmetology-picture-of-happy-young-woman-with-closed-eyes-getting-rf-lifting.jpg?s=612x612&w=0&k=20&c=mWM0y9rRrNO8BmjGRSvdy6e9g7gXEHpRYycJCGuBzIs=",
                "d": "https://img.freepik.com/fotos-gratis/esteticista-aplicando-injecao-de-preenchimento-para-cliente_23-2148875477.jpg"
            }
        ], skipDuplicates: true
    })
}

async function testBusinessBase() {
    return await prisma.business.createMany({
        data: [
            {
                "title": "Savana",
                "sub_title": "Barbershop",
                "logo": "https://designwebsite.com.br/wp-content/uploads/2022/10/Criacao-de-logomarca-para-barbearia-barber-shop.jpg",
                "photos_id": 1,
                "category_id": 1,
                "address_id": 1,
            },
            {
                "title": "Jessica Brune",
                "sub_title": "Nails Designer",
                "logo": "https://i.pinimg.com/originals/7e/3b/be/7e3bbe1c2a5616f2b999e2aacbca7ca4.jpg",
                "photos_id": 2,
                "category_id": 3,
                "address_id": 2,
            },
            {
                "title": "Alessandro",
                "sub_title": "Massoterapia Técnica",
                "logo": "https://lh3.googleusercontent.com/p/AF1QipM93jGTwPitLPhmr6ALXWfJsY7hLz83ua0bNQ_K=w1080-h608-p-no-v0",
                "photos_id": 3,
                "category_id": 6,
                "address_id": 3,
            },
            {
                "title": "Señoritas",
                "sub_title": "Estética | Saúde | Beleza",
                "logo": "https://i.pinimg.com/originals/1e/20/a0/1e20a084f9c6f0095a71e9938ae4fb73.jpg",
                "photos_id": 4,
                "category_id": 7,
                "address_id": 4,
            }
        ], skipDuplicates: true
    })
}

async function testBusinessServices() {
    return prisma.service.createMany({
        data: [
            {
                "name": "Corte Masculino - Degradê",
                "description": "Corte na máquina no estilo degradê e ajustes na tesoura.",
                "price": 2500,
                "category_id": 9,
                "business_id": 1
            },
            {
                "name": "Francesinha",
                "description": "Escolha a cor da unha e a cor do detalhe na ponta.",
                "price": 1500,
                "category_id": 11,
                "business_id": 2
            },
            {
                "name": "Massagem Relaxante",
                "description": "Massagem para relaxar os musculos",
                "price": 3500,
                "category_id": 14,
                "business_id": 3
            },
            {
                "name": "Botox facial",
                "description": "Botox para preencher pé-de-galinha, bravinho, rugas testa e sorriso.",
                "price": 8500,
                "category_id": 15,
                "business_id": 4
            }
        ], skipDuplicates: true
    })
}

export async function createTests() {

    await testBusinessAddress().then(() => {
        console.log("Endereços-base de negócios criadas com sucesso!")
    })

    await testBusinessPhotos().then(() => {
        console.log("Photos-base de negócios criadas com sucesso!")
    })

    await testBusinessBase().then(() => {
        console.log("Base de negócios criadas com sucesso!")
    })

    await testBusinessServices().then(() => {
        console.log("Serviços-base de negócios criadas com sucesso!")
    })
}
/*
main()
    .then(() => {
        console.log("Todas as tabelas populadas com sucesso!")
    })
    .catch(
        (e) => {
            console.error(e)
            process.exit(1)
        }
    ).finally(
        async () => {
            await prisma.$disconnect()
        }
    )
*/