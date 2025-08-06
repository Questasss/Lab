from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    cart_items = db.relationship('CartItem', backref='user', lazy=True)
    todo_items = db.relationship('TodoItem', backref='user', lazy=True)

    def to_dict(self):
        return {'id': self.id, 'username': self.username, 'email': self.email}

class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    cart_items = db.relationship('CartItem', backref='product', lazy=True)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "price": self.price}

class CartItem(db.Model):
    __tablename__ = 'cart_items'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer, default=1)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product': self.product.to_dict(),
            'quantity': self.quantity
        }

class TodoItem(db.Model):
    __tablename__ = 'todo_items'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    task = db.Column(db.String(200), nullable=False)
    done = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            'id': self.id,
            'task': self.task,
            'done': self.done
        }
