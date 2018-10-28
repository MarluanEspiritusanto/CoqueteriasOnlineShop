const { ProductRepository } = require('../../infraestructure/repositories');
class AdminController {
	async getProducts(req, res, next) {
		const products = await ProductRepository.getProducts();
		return res.render('admin/products', {
			prods: products,
			pageTitle: 'Admin Products',
			path: '/admin/products'
		});
	}

	getCreateProduct(req, res, next) {
		return res.render('admin/edit-product', {
			pageTitle: 'Add Product',
			path: '/admin/add-product',
			editing: false
		});
	}

	async postCreateProduct(req, res, next) {
		const product = req.body;
		await ProductRepository.createProduct(product);
		return res.redirect('/');
	}

	getEditProduct(req, res, next) {
		return res.render('admin/edit-product', {
			pageTitle: 'Edit Product',
			path: '/admin/edit-product',
			editing: editMode,
			product: product
		});
	}

	async postEditProduct(req, res, next) {
		const product = req.body;
		const { productId } = req.params;
		await ProductRepository.editProduct(productId, product);
		return res.redirect('/admin/products');
	}

	async deleteProduct(req, res, next) {
		const { productId } = req.params;
		await ProductRepository.deleteProduct(productId);
		return res.redirect('/admin/products');
	}
}

module.exports = new AdminController();
