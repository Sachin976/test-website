import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAPI } from '../../../components/db/config/httpMethods';

export const getNFTCollections = createAsyncThunk(
  'getNFTCollection',
  async () => {
    const response = await getAPI('http://localhost:5000/');
    return await response.data;
  },
);
