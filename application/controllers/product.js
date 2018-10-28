const { ProductService } = require('../../services');

class ProductController {
	async getProduct(req, res) {
		const { productId } = req.params;
		const product = await ProductService.getProduct(productId);
		return res.render('shop/product-detail', {
			product: product,
			pageTitle: product.title,
			path: '/products'
		});
	}

	async getProducts(req, res) {
		const products = await ProductService.getProducts();
		return res.render('shop/product-list', {
			prods: products,
			pageTitle: 'All Products',
			path: '/products'
		});
	}

	getCreateProduct(req, res) {
		res.render('admin/edit-product', {
			pageTitle: 'Add Product',
			path: '/admin/add-product',
			editing: false
		});
	}

	postCreateProduct(req, res) {
		const { title, imageUrl, price, description } = req.body;
		return res.redirect('/');
	}

	getEditProduct(req, res) {
		const { edit } = req.query;
		if (!edit) {
			return res.redirect('/');
		}
		const { productId } = req.params;

		return res.render('admin/edit-product', {
			pageTitle: 'Edit Product',
			path: '/admin/edit-product',
			editing: edit,
			product: {}
		});
	}

	postEditProduct(req, res) {
		const { prodId, updatedTitle, updatedPrice, updatedImageUrl, updatedDesc, updatedProduct } = req.body;
		return res.redirect('/admin/products');
	}
}

module.exports = new ProductController();
