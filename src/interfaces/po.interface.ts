export default interface IPurchaseOrder {
    id: number;
    itemName: string;
    category: string;
    quantity: number;
    supplier: string;
    status: string;
}