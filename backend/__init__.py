# routes/__init__.py

from flask import Blueprint
from .user_routes import user_bp
from .product_routes import product_bp
from .cart_routes import cart_bp
from .todo_routes import todo_bp
from .auth_routes import auth_bp  # ✅ 修正：添加 auth 路由蓝图

def register_blueprints(app):
    app.register_blueprint(user_bp)
    app.register_blueprint(product_bp)
    app.register_blueprint(cart_bp)
    app.register_blueprint(todo_bp)
    app.register_blueprint(auth_bp)  # ✅ 修正：注册 auth 蓝图
