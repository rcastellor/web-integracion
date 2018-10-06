export interface Contacto {
  id: string;
  nombre: string;
  apellidos: string;
  emails: string[];
  telefonos: Telefono[];
  areas: string[];
  empresa: string;
  notas: string;
  ubicacion: string;
}

export interface Telefono {
  telefono: string;
  tipo: string;
}
