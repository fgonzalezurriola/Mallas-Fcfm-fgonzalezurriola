import { Course } from '../types';

export const geologyCourses: Course[] = [
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
    prerequisites: ['MA2001'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'GL3103',
    name: 'Ciencias de los Minerales I',
    credits: 6,
    prerequisites: ['IQ2211'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'GF3001',
    name: 'Geofísica General',
    credits: 6,
    prerequisites: ['FI2002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'GL3101',
    name: 'Geología General',
    credits: 6,
    prerequisites: ['MA2002', 'FI2004/IQ2211'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: '_FormacionIntegral1',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 5,
    color: 'bg-holistic'
  },
  {
    id: '_FormacionIntegral2',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 5,
    color: 'bg-holistic'
  },
  // Semestre VI
  {
    id: 'IN3301',
    name: 'Evaluación de Proyectos',
    credits: 6,
    prerequisites: ['IN2201', 'MA3403'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'GL3203',
    name: 'Ciencias de los Minerales II',
    credits: 6,
    prerequisites: ['GL3103'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'GL3204',
    name: 'Ensamble de Procesos Geológicos',
    credits: 6,
    prerequisites: ['GL3101'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'GL3205',
    name: 'Sistemas de Información Geográfica para Geología',
    credits: 3,
    prerequisites: ['GL3101', 'GF3001'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'GL3201',
    name: 'Sedimentología',
    credits: 6,
    prerequisites: ['GL3101'],
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
    id: 'GL4101',
    name: 'Geología Estructural',
    credits: 6,
    prerequisites: ['GL3205'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'GL4202',
    name: 'Petrología Ígnea',
    credits: 6,
    prerequisites: ['GL3204', 'GL3203'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'GL4205',
    name: 'Geoquímica',
    credits: 6,
    prerequisites: ['GL3204'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'GL4203',
    name: 'Geomorfología Dinámica',
    credits: 6,
    prerequisites: ['GL3205'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'GL4204',
    name: 'Estatigrafía',
    credits: 3,
    prerequisites: ['GL3201'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'GL4206',
    name: 'Paleontología',
    credits: 3,
    prerequisites: ['GL3201'],
    semester: 7,
    color: 'bg-common'
  },
  // Semestre VIII
  {
    id: 'GL4402',
    name: 'Geología de Campo I',
    credits: 6,
    prerequisites: ['GL4101', 'GL4202', 'GL4203', 'GL4204'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'GL4304',
    name: 'Petrología Metamórfica',
    credits: 6,
    prerequisites: ['GL3204', 'GL3203'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'GL4401',
    name: 'Introducción a Yacimientos Minerales',
    credits: 6,
    prerequisites: ['IN3301', 'GL4205'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'GL4212',
    name: 'Volcanología Física',
    credits: 6,
    prerequisites: ['GL4203', 'GL4202'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: '_Electivo1',
    name: 'Electivo',
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: 'bg-elective'
  },
  {
    id: '_Electivo2',
    name: 'Electivo',
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: 'bg-elective'
  },
  {
    id: 'GL4901',
    name: 'Práctica Profesional I',
    credits: 7,
    prerequisites: ['GL3205'],
    semester: 8,
    color: 'bg-internship'
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
    id: 'GL5321',
    name: 'Geología Aplicada a la Ingeniería',
    credits: 6,
    prerequisites: ['GL4402'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'GL5213',
    name: 'Hidrogeología',
    credits: 6,
    prerequisites: ['GL4205', 'GL3201'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'GL5311',
    name: 'Metalogénesis',
    credits: 6,
    prerequisites: ['GL4401'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'GL5314',
    name: 'Geología Andina',
    credits: 6,
    prerequisites: ['GL4402', 'GL4212', 'GL4206'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'GL5301',
    name: 'Geotectónica',
    credits: 3,
    prerequisites: ['GL4402'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: '_Especialización1',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  // Semestre X
  {
    id: 'GL6908',
    name: 'Introducción al Trabajo de Título',
    credits: 3,
    prerequisites: ['GL4901'],
    semester: 10,
    color: 'bg-thesis'
  },
  {
    id: 'GL6301',
    name: 'Geología Económica',
    credits: 6,
    prerequisites: ['GL5321', 'GL5311'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: 'GL6101',
    name: 'Geología de Campo II',
    credits: 9,
    prerequisites: ['GL5314', 'GL5301'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: 'GL6302',
    name: 'Geología Ambiental',
    credits: 3,
    prerequisites: ['GL5213'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: '_Especialización2',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Especialización3',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  {
    id: 'GL5902',
    name: 'Práctica Profesional II',
    credits: 14,
    prerequisites: ['GL4901'],
    semester: 10,
    color: 'bg-internship'
  },
  // Semestre XI
  {
    id: 'GL6919',
    name: 'Trabajo de Título',
    credits: 24,
    prerequisites: ['GL6908', 'GL5902'],
    semester: 11,
    color: 'bg-thesis'
  },
  {
    id: '_Especialización4',
    name: 'Trabajo de Título',
    credits: 6,
    prerequisites: [],
    semester: 11,
    color: 'bg-thesis'
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