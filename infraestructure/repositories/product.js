const { ProductModel } = require('../../domain/entities');

class ProductRepository {
	getProducts() {
		const products = ProductModel.find().populate('userId');
		return products;
	}

	getProduct(productId) {
		const product = ProductModel.findById(productId);
		return product;
	}

	createProduct(product) {
		return ProductModel.create(product);
	}

	editProduct(productId, product) {
		return ProductModel.findByIdAndUpdate(productId, product);
	}

	deleteProduct(productId) {
		return ProductModel.findByIdAndRemove(productId);
	}
}

module.exports = new ProductRepository();
