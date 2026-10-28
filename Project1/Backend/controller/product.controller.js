import Product from "../model/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    if (products.length == 0) return res.status(200).json([]);

    res.status(200).json(products);
  } catch (error) {
    console.log(`Error in getAllProducts Controller ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { productname, productprice } = req.body;

    if(!productname || productprice == undefined) {
      return res.status(400).json({message: "Product Name and Price are Required!"})
    }

    if(isNaN(Number(productprice))) {
      return res.status(400).json({messsage: "Price must be  a Number"})
    }

    if(Number(productprice) < 0) {
      return res.status(400).json({messsage: "Enter a Original Price with Postive Values"})
    }

    const newProduct = new Product({
      productname,
      productprice: Number(productprice),
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(`Error in Create Product Controller: ${error}`);
    res.status(500).json({ message: "Internal Serverr Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Product.findOne({ _id: id });

    if (!item) {
      return res.status(404).json({ error: "Product Not Found!" });
    }

    await Product.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Product Deleted Successfully!" });
  } catch (error) {
    console.log(`Error in Delete Product Controller: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const {productname, productprice} = req.body;

    let item = await Product.findById( productId );

    if(!item) {
      return res.status(404).json({messsage: "Product Not Found!"})
    }

    item.productname = productname || item.productname
    item.productprice = productprice !== undefined ? productprice : item.productprice

    item = await item.save();

    return res.status(200).json(item);
  } catch (error) {
    console.error(`Error in Update Product Controller: ${error.message}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
