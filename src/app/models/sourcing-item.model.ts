export interface SourcingItem {
  id?: number;
  sapCode: string;
  description: string;
  drawingRevision: string;
  commodity: string;
  supplier: string;
  buyerCST: string;
  applicationProduct: string;
  customerCode: string;       // New
  costingSheet: boolean;      // New
  toolCostStatus: string;     // New
  dualSource: string;         // New
  saReleasedNumber: string;
  remarks: string;            // New
  isirDocuments: boolean;
  ppapDocument: boolean;
}