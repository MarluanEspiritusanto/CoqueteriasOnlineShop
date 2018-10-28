const { ProductRepository } = require('../infraestructure/repositories');

class ProductService {
	getProducts() {
		const products = ProductRepository.getProducts();
		return products;
	}

	getProduct(productId) {
		const product = ProductRepository.getProduct(productId);
		return product;
	}

	createProduct(product) {
		return ProductRepository.createProduct(product);
	}

	editProduct(id, product) {
		return ProductRepository.editProduct(id, product);
	}

	deleteProduct(productId) {
		return ProductRepository.deleteProduct(productId);
	}
}

module.exports = new ProductService();
