export type InventoryTracking = {
  id: number
  productoId: number
  tipo: string
  cantidad: number
  bodegaOrigenId: number
  bodegaDestinoId: number
  fecha: string
}

export type TrackingForm = Omit<InventoryTracking, 'id'>