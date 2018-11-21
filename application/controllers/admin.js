const { ProductRepository } = require('../../infraestructure/repositories');
class AdminController {
	async getProducts(req, res) {
		const products = await ProductRepository.getProducts();
		return res.render('admin/products', {
			prods: products,
			pageTitle: 'Admin Products',
			path: '/admin/products',
			isAuthenticated: req.session.isLoggedIn
		});
	}

	getCreateProduct(req, res) {
		return res.render('admin/edit-product', {
			pageTitle: 'Add Product',
			path: '/admin/add-product',
			editing: false,
			isAuthenticated: req.session.isLoggedIn
		});
	}

	async postCreateProduct(req, res) {
		const product = req.body;
		product.userId = req.user;
		await ProductRepository.createProduct(product);
		return res.redirect('/');
	}

	async getEditProduct(req, res) {
		const { productId } = req.params;
		const product = await ProductRepository.getProduct(productId);
		const { edit } = req.query;
		if (!edit) {
			return res.redirect('/');
		}
		return res.render('admin/edit-product', {
			pageTitle: 'Edit Product',
			path: '/admin/edit-product',
			editing: edit,
			product: product,
			isAuthenticated: req.session.isLoggedIn
		});
	}

	async postEditProduct(req, res) {
		const product = req.body;
		await ProductRepository.editProduct(product.productId, product);
		return res.redirect('/admin/products');
	}

	async deleteProduct(req, res) {
		const { productId } = req.body;
		await ProductRepository.deleteProduct(productId);
		return res.redirect('/admin/products');
	}
}

module.exports = new AdminController();
