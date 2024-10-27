import { Course } from '../types';

export const astronomyCourses: Course[] = [
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
  },  // Semestre V
  {
    id: 'MA3403',
    name: 'Probabilidades y Estadística',
    credits: 6,
    prerequisites: ['MA2001'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'FI3001',
    name: 'Vibraciones y Ondas',
    credits: 6,
    prerequisites: ['MA2002', 'FI2002', 'FI2001'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'FI3002',
    name: 'Métodos Matemáticos de la Física',
    credits: 6,
    prerequisites: ['MA2002', 'FI2002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'FI3104',
    name: 'Métodos Numéricos para Ciencias e Ingeniería',
    credits: 6,
    prerequisites: ['MA2002', 'FI2002', 'CC1002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'AS3021',
    name: 'Astronomía Experimental',
    credits: 6,
    prerequisites: ['MA2001','FI2002'],
    semester: 5,
    color: 'bg-common'
  },
  // Semestre VI
  {
    id: 'FI3111',
    name: 'Mecánica Clásica',
    credits: 6,
    prerequisites: ['FI3001'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'FI3102',
    name: 'Física Moderna',
    credits: 6,
    prerequisites: ['FI3001', 'MA3403'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'FI3106',
    name: 'Electrodinámica',
    credits: 6,
    prerequisites: ['FI3001', 'FI3002'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'AS3101',
    name: 'Astrofísica de Estrellas',
    credits: 6,
    prerequisites: ['FI2004/IQ2212'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: '_FormacionIntegral1',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 6,
    color: 'bg-holistic'
  },
  {
    id: '_FormacionIntegral2',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 6,
    color: 'bg-holistic'
  },
  // Semestre VII
  {
    id: 'F4001',
    name: 'Mecánica Cuántica',
    credits: 6,
    prerequisites: ['FI3002', 'FI3102', 'FI3111'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'AS4101',
    name: 'Astrofísica de Galaxias',
    credits: 6,
    prerequisites: ['AS3101'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'AS4501',
    name: 'Astroinformática',
    credits: 6,
    prerequisites: ['MA3403', 'FI3104'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: '_Electivo1',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 7,
    color: 'bg-elective'
  },
  {
    id: '_FormacionIntegral3',
    name: 'Formación Integral DR/EH/FG/EI/FT',	
    credits: 3,
    prerequisites: [],
    semester: 7,
    color: 'bg-elective'
  },
  {
    id: 'AS4901',
    name: 'Trabajo Tutorial Básico',	
    credits: 7,
    prerequisites: ['AS3101, AS3201'],
    semester: 7,
    color: 'bg-elective'
  },
  // Semestre VIII
  {
    id: 'F4104',
    name: 'Mecánica Estadística',
    credits: 6,
    prerequisites: ['F4001'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'AS4103',
    name: 'Proyecto Astronómico de Investigación',
    credits: 6,
    prerequisites: ['AS4901', 'AS4101'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: '_Electivo2',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 8,
    color: 'bg-elective'
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
    id: '_FormacionIntegral3',
    name: 'Formación Integral DR/EH/FG/EI/FT',
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: 'bg-holistic'
  },
  {
    id: 'EI1090',
    name: 'Examen de Suficiencia en Inglés I',
    credits: 0,
    prerequisites: [],
    semester: 8,
    color: 'bg-english'
  },
];