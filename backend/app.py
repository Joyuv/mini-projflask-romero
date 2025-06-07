from flask import *
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
usuarios=[]

@app.route('/usuarios', methods=['POST'])
def cadastrar_usuarios():
    data = request.get_json()

    email = data.get('email')
    nome = data.get('nome')
    senha = data.get('senha')

    novo_usuario = {
        "nome": nome,
        "email": email,
        "senha": senha
    }
    usuarios.append(novo_usuario)

    return jsonify({"mensagem": "Usuário cadastrado com sucesso!"}), 201

@app.route('/usuarios', methods=['GET'])
def lista_usuarios():
    return jsonify(usuarios)
if __name__ == "__main__":
    app.run(debug=True)
