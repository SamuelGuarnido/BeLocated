export interface Establishment {
  id: number; // Identificador del nodo (ID)
  lat: number; // Latitud del establecimiento
  lon: number; // Longitud del establecimiento
  tags: {
    amenity: string; // Tipo de establecimiento (e.g., "restaurant")
    name: string; // Nombre del establecimiento
    brand?: string; // Marca del establecimiento (opcional)
    brand_wikidata?: string; // Identificador de Wikidata para la marca (opcional)
    brand_wikipedia?: string; // Enlace a Wikipedia para la marca (opcional)
    cuisine?: string; // Tipo de cocina (opcional)
    wheelchair?: string; // Accesibilidad para sillas de ruedas (opcional)
  };
}

