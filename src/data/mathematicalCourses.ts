import { Course } from '../types';

export const mathematicalCourses: Course[] = [
  // Semestre I
  {
    id: 'MA1001',
    name: 'Introducción al Cálculo',
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: 'bg-common',
  },
  {
    id: 'MA1101',
    name: 'Introducción al Álgebra',
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  {
    id: 'FI1000',
    name: 'Introducción a la Física Clásica',
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  {
    id: 'CC1000',
    name: 'Herramientas Computacionales',
    credits: 3,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  {
    id: 'CD1100',
    name: 'Desafíos de Innovación',
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  {
    id: 'BT1211',
    name: 'Aplicaciones de la Biología a la Ingeniería',
    credits: 3,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  // Semestre II
  {
    id: 'MA1002',
    name: 'Cálculo Diferencial e Integral',
    credits: 6,
    prerequisites: ['MA1001'],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: 'MA1102',
    name: 'Álgebra Lineal',
    credits: 6,
    prerequisites: ['MA1101'],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: 'FI1100',
    name: 'Introducción a la Física Moderna',
    credits: 6,
    prerequisites: ['FI1000', 'MA1101', 'MA1001'],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: 'CC1002',
    name: 'Introducción a la Programación',
    credits: 6,
    prerequisites: [],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: 'CD1201',
    name: 'Proyecto de Innovación de Ingeniería y Ciencias',
    credits: 3,
    prerequisites: [],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: '_EH1',
    name: 'Formación Integral DR/EH/FG/EI/FT',
    credits: 3,
    prerequisites: [],
    semester: 2,
    color: 'bg-holistic'
  },
  // Semestre III
  {
    id: 'MA2001',
    name: 'Cálculo en Varias Variables',
    credits: 6,
    prerequisites: ['MA1002', 'MA1102'],
    semester: 3,
    color: 'bg-common'
  },
  {
    id: 'MA2601',
    name: 'Ecuaciones Diferenciales Ordinarias',
    credits: 6,
    prerequisites: ['MA1002', 'MA1102'],
    semester: 3,
    color: 'bg-common'
  },
  {
    id: 'FI2001',
    name: 'Mecánica',
    credits: 6,
    prerequisites: ['FI1100', 'MA1102', 'MA1002'],
    semester: 3,
    color: 'bg-common'
  },
  {
    id: 'FI2003',
    name: 'Métodos Experimentales',
    credits: 6,
    prerequisites: ['FI1100', 'MA1002'],
    semester: 3,
    color: 'bg-common'
  },
  {
    id: 'IQ2211',
    name: 'Química',
    credits: 6,
    prerequisites: [],
    semester: 3,
    color: 'bg-common'
  },
  // Semestre IV
  {
    id: 'MA2002',
    name: 'Cálculo Avanzado y Aplicaciones',
    credits: 6,
    prerequisites: ['MA2001', 'MA2601'],
    semester: 4,
    color: 'bg-common'
  },
  {
    id: 'IN2201',
    name: 'Economía',
    credits: 6,
    prerequisites: ['MA2001'],
    semester: 4,
    color: 'bg-common'
  },
  {
    id: 'FI2002',
    name: 'Electromagnetismo',
    credits: 6,
    prerequisites: ['MA2001', 'MA2601','FI2001'],
    semester: 4,
    color: 'bg-common'
  },
  {
    id: 'FI2004/IQ2212',
    name: 'Termodinámica / Termodinámica Química',
    credits: 6,
    prerequisites: ['IQ2211', 'FI2001', 'MA2001'],
    semester: 4,
    color: 'bg-common'
  },
  {
    id: 'CD2201',
    name: 'Módulo Interdisplicinario',
    prerequisites: ['CD1201'],
    credits: 3,
    semester: 4,
    color: 'bg-common'
  },
  {
    id: '_EH2',
    name: 'Formación Integral DR/EH/FG/EI/FT',
    credits: 3,
    prerequisites: [],
    semester: 4,
    color: 'bg-holistic'
  },
    // Semestre V
  {
    id: 'MA3401',
    name: 'Probabilidades',
    credits: 6,
    prerequisites: ['MA2001'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'MA3801',
    name: 'Análisis',
    credits: 9,
    prerequisites: ['MA2002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'MA3711',
    name: 'Optimización Matemática',
    credits: 6,
    prerequisites: ['MA2002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: '_Electivo1',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 5,
    color: 'bg-elective'
  },
  {
    id: '_EH3',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 5,
    color: 'bg-holistic'
  },
  // Semestre VI
  {
    id: 'MA3402',
    name: 'Estadística',
    credits: 6,
    prerequisites: ['MA3401'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'MA3820',
    name: 'Teoría de la Medida',
    credits: 9,
    prerequisites: ['MA3801'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'MA3802',
    name: 'Algoritmos Combinatoriales',
    credits: 6,
    prerequisites: ['MA3711'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: '_Electivo2',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 6,
    color: 'bg-elective'
  },
  {
    id: '_EH4',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 6,
    color: 'bg-holistic'
  },
  // Semestre VII
  {
    id: 'MA4401',
    name: 'Procesos de Markov',
    credits: 6,
    prerequisites: ['MA3802','MA3401'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'MA4801',
    name: 'Análisis Funcional',
    credits: 9,
    prerequisites: ['MA3802'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'MA4702',
    name: 'Programación Lineal Mixta: Teoría y Laboratorio',
    credits: 6,
    prerequisites: ['MA3705'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: '_Electivo3',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 7,
    color: 'bg-elective'
  },
  {
    id: '_Electivo4',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 7,
    color: 'bg-elective'
  },
  {
    id: 'MA4902',
    name: 'Práctica Profesional I',
    credits: 7,
    prerequisites: [],
    semester: 7,
    color: 'bg-internship'
  },
  // Semestre VIII
  {
    id: 'MA4402',
    name: 'Simulación Estocástica: Teoría y Laboratorio',
    credits: 6,
    prerequisites: ['MA4401'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'MA4802',
    name: 'Ecuaciones en Derivadas Parciales',
    credits: 9,
    prerequisites: ['MA4801'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'MA4703',
    name: 'Control Óptimo: Teoría y Laboratorio',
    credits: 9,
    prerequisites: ['MA4801'] ,
    semester: 8,
    color: 'bg-common'
  },
  {
    id: '_Electivo5',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 8,
    color: 'bg-elective'
  },
  {
    id: 'EI1090',
    name: 'Examen de Suficiencia en Inglés I',
    credits: 6,
    prerequisites: [],
    semester: 8,
    color: 'bg-english'
  },
  // Semestre IX
  {
    id: 'MA5307',
    name: 'Análisis Numérico de EDPs: Teoría y Laboratorio',
    credits: 9,
    prerequisites: ['MA4802'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: '_Especialización1',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective_2'
  },
  {
    id: '_Especialización2',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective_2'
  },
  {
    id: '_Especialización3',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective_2'
  },
  {
    id: '_FormacionIntegral',
    name: 'Especialización',
    credits: 3,
    prerequisites: [],
    semester: 9,
    color: 'bg-holistic'
  },
  {
    id: 'MA5902 (Requiere MA4402 o MA4703)',
    name: 'Practica Profesional II ',
    credits: 7,
    prerequisites: ['MA4902','MA4402','MA4703'],
    semester: 9,
    color: 'bg-holistic'
  },
  // Semestre X
  {
    id: 'MA6906',
    name: 'Introducción al Trabajo de Título',
    credits: 6,
    prerequisites: ['MA5307'],
    semester: 10,
    color: 'bg-thesis'
  },
  {
    id: '_Especialización2',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  // Semestre XI
  {
    id: 'MA6909',
    name: 'Trabajo de Título',
    credits: 21,
    prerequisites: ['MA6906'],
    semester: 11,
    color: 'bg-thesis'
  },
  {
    id: '_Electivo_E1',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 11,
    color: 'bg-speciality_elective'
  },
  {
    id: 'EI2090',
    name: 'Examen de Suficiencia en Inglés II',
    credits: 0,
    prerequisites: [],
    semester: 11,
    color: 'bg-english'
  }
];