import { Course } from '../types';

export const mechanicalCourses: Course[] = [
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
    id: 'MA3403',
    name: 'Probabilidades y Estadística',
    credits: 6,
    prerequisites: ['MA2001', 'MA2601'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'MA3701',
    name: 'Optimización y Modelamiento',
    credits: 6,
    prerequisites: ['MA2002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'ME3110',
    name: 'Ciencia de los Materiales',
    credits: 6,
    prerequisites: ['FI2004Q', 'FI2002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'ME3140',
    name: 'Mecánica de Fluidos',
    credits: 6,
    prerequisites: ['MA2601', 'FI2004Q'],
    semester: 5,
    color: 'bg-common'
  },
  // Semestre VI
  {
    id: 'ME3510',
    name: 'Termodinámica',
    credits: 6,
    prerequisites: ['FI2004Q'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'ME3120',
    name: 'Dibujo Mecánico',
    credits: 6,
    prerequisites: ['CD2201'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'ME3130',
    name: 'Mecánica Estática',
    credits: 6,
    prerequisites: ['FI2001'],
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
  // Semestre VII
  {
    id: 'ME4210',
    name: 'Gestión de Activos Físicos',
    credits: 6,
    prerequisites: ['MA3701', 'ME3130'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'ME3210',
    name: 'Materiales para la Manufactura',
    credits: 6,
    prerequisites: ['ME3110'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'ME4140',
    name: 'Transferencia de Calor',
    credits: 6,
    prerequisites: ['ME3510'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'ME3150',
    name: 'Mecánica de Sólidos',
    credits: 6,
    prerequisites: ['ME3130', 'MA2002'],
    semester: 7,
    color: 'bg-common'
  },
  // Semestre VIII
  {
    id: 'ME4220',
    name: 'Evaluación de Proyectos en Ingeniería',
    credits: 6,
    prerequisites: ['IN2201'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'ME4110',
    name: 'Procesos de Manufactura',
    credits: 6,
    prerequisites: ['ME3210'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'ME4250',
    name: 'Mecatrónica',
    credits: 6,
    prerequisites: ['FI2001', 'ME4110'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: '_Electivo1',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 8,
    color: 'bg-elective'
  },
  // Semestre IX
  {
    id: 'ME5210',
    name: 'Manufactura Avanzada',
    credits: 6,
    prerequisites: ['ME4110'],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Especialización1',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Especialización2',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  // Semestre X
  {
    id: 'ME6908',
    name: 'Introducción al Trabajo de Título',
    credits: 3,
    prerequisites: ['ME5210'],
    semester: 10,
    color: 'bg-thesis'
  },
  {
    id: '_Especialización3',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  // Semestre XI
  {
    id: 'ME6909',
    name: 'Trabajo de Título',
    credits: 21,
    prerequisites: ['ME6908'],
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
  }
];