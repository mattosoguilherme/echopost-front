// src/services/apiService.js
import axios from 'axios';

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3004',
        });
    }

    async login(email, senha) {
        try {
            const response = await this.api.post('/auth', { email, senha });
            const { token, user } = response.data; // Assumindo que a resposta contém um token e um objeto user
            localStorage.setItem('token', token); // Armazenando o token
            return user; // Retornando o objeto do usuário
        } catch (error) {
            throw new Error('Login failed: ' + error.message);
        }
    }

    async getUserData(userId) {
        try {
            const token = localStorage.getItem('token'); // Pegando o token do localStorage
            const response = await this.api.get(`/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Adicionando o token ao header
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch user data: ' + error.message);
        }
    }

    // Outros métodos da API...
}

const apiService = new ApiService();
export default apiService;
