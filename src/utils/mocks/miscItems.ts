import { autocompleteType } from './types';

export const productCategories: autocompleteType[] = [
  { id: '17b6aded-ce25-43ab-9db6-35973dc5d4f4', name: 'Componente de Infra' },
  { id: '7450b3fe-cecb-4296-a354-13a383827d29', name: 'Category 1' },
  { id: '740c6e50-f487-426a-958b-9c61c20eccc3', name: 'Category 2' },
  { id: '25be2ba5-4af4-4a07-b4aa-0b19735ee8e3', name: 'Category 3' },
];

export const productMeasurementUnits: autocompleteType[] = [
  { id: 'abf92955-9da7-4a82-ad28-e69b3c71d5b4', name: 'unidade' },
  { id: '415ea43e-3197-4508-8b8c-799d1d065636', name: 'hora/mês' },
];
export const thecnicDependency = [
  { id: 'c2679f79-9072-4fad-b493-05b9863ed899', name: 'Sempre depende de chancela técnica' },
  {
    id: '5cde715b-1920-42b7-891a-e034d33d7198',
    name: 'Depende de chancela técnica apenas quando há alteração',
  },
  {
    id: '06807bc6-6be5-45ba-a160-09b175bdfda2',
    name: 'Nunca depende de chancela técnica',
  },
];
