import { Course } from '../types';

export const industrialCourses: Course[] = [
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
    id: 'IN3171',
    name: 'Modelamiento y Optimización',
    credits: 6,
    prerequisites: ['MA2002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'IN3141',
    name: 'Probabilidades',
    credits: 6,
    prerequisites: ['MA2001'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'IN3101',
    name: 'Taller de Liderazgo e Innovación Social',
    credits: 6,
    prerequisites: ['MA1102'],
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
    id: 'IN3272',
    name: 'Decisiones bajo Incertidumbre',
    credits: 6,
    prerequisites: ['IN3171', 'IN3141'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'IN3221',
    name: 'Teoría de Juegos y Estrategia',
    credits: 6,
    prerequisites: ['IN2201', 'IN3141'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'IN3242',
    name: 'Estadística',
    credits: 6,
    prerequisites: ['IN3141'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'IN3301',
    name: 'Evaluación de Proyectos',
    credits: 6,
    prerequisites: ['IN2201','IN3141'],
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
  // Semestre VII
  {
    id: 'IN4102',
    name: 'Taller de Concepción y Diseño de Proyectos',
    credits: 6,
    prerequisites: ['IN3171', 'IN3101'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'IN4123',
    name: 'Macroeconomía',
    credits: 6,
    prerequisites: ['IN2201', 'IN3141'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'IN4143',
    name: 'Análisis de Datos e Inferencia Causal',
    credits: 6,
    prerequisites: ['IN3242'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'IN4151',
    name: 'Ingeniería de la Información',
    credits: 6,
    prerequisites: ['CC1002','IN3171','IN3242'],
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
    id: 'IN4191',
    name: 'Practica Profesional I',
    credits: 7,
    prerequisites: ['IN3272','IN4102','IN3301','IN4143','IN4151','FI2002','FI2004/IQ2212'],
    semester: 6,
    color: 'bg-internship'
  },
  // Semestre VIII
  {
    id: 'IN4273',
    name: 'Gestión de Operaciones',
    credits: 6,
    prerequisites: ['IN3171', 'IN3242'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'IN3261',
    name: 'Marketing',
    credits: 6,
    prerequisites: ['IN3171', 'IN3242', 'IN3301'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'IN4232',
    name: 'Finanzas',
    credits: 6,
    prerequisites: ['IN3301'],
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
    name: 'Examen de Suficiencia en Inglés',
    credits: 0,
    prerequisites: [],
    semester: 8,
    color: 'bg-english'
  },
  // Semestre IX
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
    id: 'IN5112',
    name: 'Dirección Estratégica',
    credits: 6,
    prerequisites: ['IN4273','IN4261','IN4232'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'IN5111',
    name: 'Comportamiento Organizacional',
    credits: 6,
    prerequisites: ['IN4191'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: '_ElectivoEspecialidad1',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  // Semestre X
  {
    id: '_Especialización3',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective_2'
  },
  {
    id: '_Especialización4',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective_2'
  },
  {
    id: '_ElectivoEspecialidad2',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  {
    id: '_ElectivoEspecialidad3',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  {
    id: '_ElectivoEspecialidad4',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  // Semestre XI
  {
    id: 'IN6193 CR300',
    name: 'Proyecto de Título',
    credits: 15,
    prerequisites: ['Autor', 'CR300'],
    semester: 11,
    color: 'bg-thesis'
  },
  {
    id: 'IN6192',
    name: 'Practica Profesional Extendida',
    credits: 15,
    prerequisites: ['IN4191','IN5112','IN5111'],
    semester: 11,
    color: 'bg-thesis'
  },
  {
    id: 'EI2090',
    name: 'Examen de Suficiencia en Inglés II',
    credits: 0,
    prerequisites: [],
    semester: 11,
    color: 'bg-thesis'
  }
];