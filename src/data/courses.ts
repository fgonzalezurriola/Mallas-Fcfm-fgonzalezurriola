import { Course } from '../types';

export const courses: Course[] = [
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
    color: 'bg-red-300'
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
    color: 'bg-red-300'
  },
  // Semestre V
  {
    id: 'MA3403',
    name: 'Probabilidades y Estadística',
    credits: 6,
    prerequisites: ['MA2001'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'CC3501',
    name: 'Modelación y Computación Gráfica',
    credits: 6,
    prerequisites: ['MA2001', 'MA2601', 'CC1002', 'FI2001'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'CC3001',
    name: 'Algoritmos y Estructuras de Datos',
    credits: 6,
    prerequisites: ['CC1002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'CC3101',
    name: 'Matemáticas Discretas para la Computación',
    credits: 6,
    prerequisites: ['MA1101', 'CC1002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: '_EH3',
    name: 'Formación Integral DR/EH/FG/EI/FT',
    credits: 3,
    prerequisites: [],
    semester: 5,
    color: 'bg-red-300'
  },
  {
    id: '_EH4',
    name: 'Formación Integral DR/EH/FG/EI/FT',
    credits: 3,
    prerequisites: [],
    semester: 5,
    color: 'bg-red-300'
  },
  // Semestre VI
  {
    id: 'CC3201',
    name: 'Bases de Datos',
    credits: 6,
    prerequisites: ['CC3001'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'CC3002',
    name: 'Metodologías de Diseño y Programación',
    credits: 6,
    prerequisites: ['CC3001'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'CC3102',
    name: 'Teoría de la Computación',
    credits: 6,
    prerequisites: ['CC3101'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'CC3301',
    name: 'Programación de Software de Sistemas',
    credits: 6,
    prerequisites: ['CC3001'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: '_Electivo1',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 6,
    color: 'bg-elective'
  },
  // Semestre VII
  {
    id: 'CC5205',
    name: 'Minería de Datos',
    credits: 6,
    prerequisites: ['CC3001'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'CC4401',
    name: 'Ingeniería de Software',
    credits: 6,
    prerequisites: ['CC3002','CC3201'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'CC4102',
    name: 'Diseño y Análisis de Algoritmos',
    credits: 6,
    prerequisites: ['MA3403', 'CC3001','CC3102'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'CC4302',
    name: 'Sistemas Operativos',
    credits: 6,
    prerequisites: ['CC3301'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: '_Electivo2',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 7,
    color: 'bg-elective'

  },
  {
    id: 'CC4901',
    name: 'Práctica Profesional I',
    credits: 7,
    prerequisites: ['CC3002','CC3201','CC3301'],
    semester: 7,
    color: 'bg-internship'
  },
  // Semestre VIII
  {
    id: 'CC4402',
    name: 'Formulación, Evaluación y Gestión de Proyectos',
    credits: 6,
    prerequisites: ['CC4401','IN2201','CD2201'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'CC4101',
    name: 'Lenguajes de Programación',
    credits: 6,
    prerequisites: ['CC3102'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'CC4303',
    name: 'Redes',
    credits: 6,
    prerequisites: ['CC4302'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: '_Electivo3',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 8,
    color: 'bg-elective'
  },
  {
    id: '_Electivo4',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 8,
    color: 'bg-elective'
  },
  {
    id: 'EI1090',
    name: 'Examen de Suficiencia en Inglés I',
    credits: 0,
    prerequisites: [],
    semester: 8,
    color: 'bg-english'
  },
  // Semestre IX
  {
    id: '_Electivo_E1',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Electivo_E2',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Electivo_E3',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Nucleo',
    name: 'Núcleo Gestión para Ingenieros',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: '(Dos cursos)',
    name: 'Formación Integral de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-red-300'
  },
  {
    id: 'CC5901',
    name: 'Práctica Profesional II',
    credits: 6,
    prerequisites: ['CC4901','CC4401','CC4101'],
    semester: 9,
    color: 'bg-internship'
  },
  // Semestre XI
  {
    id: 'CC6907',
    name: 'Introducción al Trabajo de Título',
    credits: 6,
    prerequisites: ['CC4402'],
    semester: 10,
    color: 'bg-thesis'
  },
  {
    id: '_Electivo_E4',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Electivo_E5',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  {
    id: 'CC5402',
    name: 'Proyecto de Software',
    credits: 12,
    prerequisites: ['CC5205','CC4402'],
    semester: 10,
    color: 'bg-common'
  },
  // Semestre XI
  {
    id: 'CC6919',
    name: 'Trabajo de Título',
    credits: 24,
    prerequisites: ['CC6907'],
    semester: 11,
    color: 'bg-thesis'
  },
  {
    id: '_Electivo_E6',
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
  },
];