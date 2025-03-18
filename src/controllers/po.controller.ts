import { Request, Response, NextFunction } from 'express';

// CREATE new Purchase Order
function createPurchaseOrder(req: Request, res: Response, next: NextFunction) {
    try {
        const { itemName, category, quantity, supplier, status } = req.body;

        // Validasi sederhana
        if (!itemName || !category || !quantity || !supplier || !status) {
            res.status(400).send({ message: "All fields are required" });
        }

        res.status(200).json({ 
            message: "Purchase Order created successfully",
            purchaseOrder: {
                id: 1,
                itemName: itemName,
                category: category,
                quantity: quantity,
                supplier: supplier,
                status: status
            } 
        });
    } catch (error) {
        next(error); // Menggunakan next untuk penanganan kesalahan yang lebih baik
    }
}

// GET All Purchase Orders
function getAllPurchaseOrders(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).json({ 
            message: "Get all Purchase Orders",
            purchaseOrder: [
                {
                    id: 1,
                    itemName: "Laptop Dell XPS 13",
                    category: "Electronics",
                    quantity: 10,
                    supplier: "Tech Supplier Inc.",
                    status: "Pending"
                },
                {
                    id: 2,
                    itemName: "Laptop HP Pavillion Gaming 15",
                    category: "Electronics",
                    quantity: 7,
                    supplier: "Tech Supplier Inc.",
                    status: "Pending"
                },
            ]
        });
    } catch (error) {
        next(error);
    }
}

// GET Purchase Order by ID
function getPurchaseOrderById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = parseInt(req.params.id);

        res.status(200).json({ 
            message: "Get Purchase Order by ID",
            purchaseOrder: {
                id: id,
                itemName: "Laptop Dell XPS 13",
                category: "Electronics",
                quantity: 10,
                supplier: "Tech Supplier Inc.",
                status: "Pending"
            } 
        });
    } catch (error) {
        next(error);
    }
}

// UPDATE Purchase Order by ID
function updatePurchaseOrderById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = parseInt(req.params.id);
        const { itemName, category, quantity, supplier, status } = req.query;

        res.status(200).json({ 
            message: "Purchase Order updated successfully",
            purchaseOrder: {
                id: id,
                itemName: itemName || "Laptop Dell XPS 13",
                category: category || "Electronics",
                quantity: quantity || 10,
                supplier: supplier || "Tech Supplier Inc.",
                status: status || "Pending"
            } 
        });
    } catch (error) {
        next(error);
    }
}

// DELETE Purchase Order by ID
function deletePurchaseOrderById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = parseInt(req.params.id);

        res.status(200).json({ 
            message: "Purchase Order with ID: " + id + " deleted successfully",
        });
    } catch (error) {
        next(error);
    }
}


const Controller = {
    createPurchaseOrder,
    getAllPurchaseOrders,
    getPurchaseOrderById,
    updatePurchaseOrderById,
    deletePurchaseOrderById
};

export default Controller;