import { configureStore } from '@reduxjs/toolkit';
import subject  from '../features/subject/subjectSlice';
import homeWork  from '../features/homework/homeWorkSlice';
import socialService from '../features/socialservice/socialServiceSlice';


export const store = configureStore({
  reducer: {
    subject: subject,
    homeWork: homeWork,
    socialService: socialService
  }
});
