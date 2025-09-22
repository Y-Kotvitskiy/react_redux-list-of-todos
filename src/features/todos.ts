import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, completed: true, title: 'One' },
    { id: 2, completed: false, title: 'Two' },
    { id: 3, completed: true, title: 'Three' },
  ] as Todo[],
  reducers: {},
});
