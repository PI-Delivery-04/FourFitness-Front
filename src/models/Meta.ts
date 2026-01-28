export default interface Meta {
  id: number;
  objetivo: string;
  descricao: string;
  peso: number;
  altura: number;
  validade: string; 
  treino: any | null;
  imc?: number;
  classificacao?: string;
}