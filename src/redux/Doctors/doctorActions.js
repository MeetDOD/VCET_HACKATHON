import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
const host = process.env.REACT_APP_API_HOST;

const token = localStorage.getItem('token')


export const getDoctors = createAsyncThunk(
    'doctors/getDoctors',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`${host}/api/v1/doctor/all-doctors`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            if (response.status === 200) {

                return response.data;
            } else {
                toast.error("Something went wrong")
            }
        } catch (err) {
            toast.error(err?.response?.data?.message);
            console.log(err.message)
        }
    }
)



export const getDoctorById = createAsyncThunk(
    'doctors/getDoctorsById',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`${host}/api/v1/doctor/doctor-details/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            if (response.status === 200) {

                return response.data;
            } else {
                toast.error("Something went wrong")
            }
        } catch (err) {
            toast.error(err?.response?.data?.message);
            console.log(err.message)
        }
    }
)

