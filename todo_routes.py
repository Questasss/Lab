from flask import Blueprint, request, jsonify
from models import db, TodoItem

todo_bp = Blueprint('todo_bp', __name__)

@todo_bp.route('/todos', methods=['GET'])
def get_todos():
    user_id = request.args.get('user_id')
    todos = TodoItem.query.filter_by(user_id=user_id).all()
    return jsonify([todo.to_dict() for todo in todos])
