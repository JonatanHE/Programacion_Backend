import { Test } from "./axios.js"

const AxiosTest = new Test

const productExample = {
    title: 'axios',
    description: 'test con axios',
    code: 'feb23',
    price: 586,
    thumbnail: 'img.jpg',
    stock: 1
}

AxiosTest.getAll()
// AxiosTest.createProduct(productExample)
// AxiosTest.getById('63f0fed75fc46d7af181fd0a')
// AxiosTest.deteteProduct('63f0fed75fc46d7af181fd0a')