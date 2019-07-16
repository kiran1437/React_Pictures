import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ad2a261e5832007d462b0d8d84fd17f855f589ab6f3c33d274d900cc9e5c1242'
    }
})