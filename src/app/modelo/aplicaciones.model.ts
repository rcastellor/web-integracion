import { SectorAplicacion } from './sector.model';

export interface ListaAplicacion {
    id: number;
    abreviatura: string;
    aplicacion: string;
}

export interface Aplicacion {
    id?: number;
    datosGenerales: {
        aplicacion: string;
        abreviatura: string;
        descripcion: string;
    };
    sectores: SectorAplicacion[];
    notificaciones: any[];
    broadcast: any[];
    peticiones: any[];
    servicios: any[];
}
