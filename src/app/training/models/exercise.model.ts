export interface IExercise{
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date;
  state?: 'Completed' | 'Cancelled' | null;
}