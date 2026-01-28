export interface Workout {
  id: string;
  nome: string;
  descricao?: string;
  duracao: number;
  data: string; 
  concluido: boolean;
  exercicios: {
    id: string;
    name: string;
    sets: number;
    reps: number;
  }[];
  createdAt?: string;
  updatedAt?: string;
}