export enum Prioridade {
    NaoDefinido = 'Não Definido',
    Baixa = 'Baixa',
    Normal = 'Normal',
    Alta = 'Alta'
}

export interface IAtividade {
    id: number;
    titulo: string;
    descricao: string;
    prioridade: Prioridade;
  }