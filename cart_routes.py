from flask import Blueprint, request, jsonify
from models import db, CartItem

cart_bp = Blueprint('cart_bp', __name__)

@cart_bp.route('/cart', methods=['GET'])
def get_cart():
    user_id = request.args.get('user_id')
    items = CartItem.query.filter_by(user_id=user_id).all()
    return jsonify([item.to_dict() for item in items])
