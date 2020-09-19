import axios, {AxiosResponse} from 'axios'
import {IRecup} from '../interfaces/IRecup';
import {IStats} from '../interfaces/IStats';
import {IProduct} from '../interfaces/IProducts';
import {IBalance} from '../interfaces/IBalances';

const url = 'http://localhost:3000'

export const getStats = (): Promise<AxiosResponse<IStats[]>> => {
    return axios.get(`${url}/stats`)
}

export const getProducts = (): Promise<AxiosResponse<IProduct[]>> => {
    return axios.get(`${url}/products`)
};

export const getBalances = (): Promise<AxiosResponse<IBalance[]>> => {
    return axios.get(`${url}/balances`)
}

export const getRecup = (): Promise<AxiosResponse<IRecup>> => {
    return axios.get(`${url}/recup`)
}
