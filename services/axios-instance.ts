import axios from 'axios'

// NEXT_PUBLIC_API_URL - это переменная из .env. обязательно писать именно NEXT_PUBLIC... в нее мы закладываем адрес, куда мы обращаемся в дев режиме или в прод режиме  (в видео 5.40 час)

export const axiosInstance = axios.create({
  // baseURL: 'localhost/3000'
  baseURL: process.env.NEXT_PUBLIC_API_URL
})  