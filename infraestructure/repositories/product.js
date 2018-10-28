const { ProductModel } = require('../../domain/entities');

class ProductRepository {
	getProducts() {
		const products = ProductModel.find();
		return products;
	}

	getProduct(productId) {
		const product = ProductModel.findById(productId);
		return product;
	}

	createProduct(product) {
		return ProductModel.create(product);
	}

	editProduct(id, product) {
		return ProductModel.findByIdAndUpdate(id, product);
	}

	deleteProduct(productId) {
		return ProductModel.findByIdAndRemove(productId);
	}
}

module.exports = new ProductRepository();
