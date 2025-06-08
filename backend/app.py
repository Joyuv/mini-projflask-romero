from flask import *
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
usuarios = {}


@app.route("/usuarios", methods=["POST"])
def cadastrar_usuarios():
    data = request.get_json()

    email = data.get("email")
    nome = data.get("nome")
    senha = data.get("senha")

    usuarios[email] = [nome, senha]

    return jsonify({"mensagem": "Usuário cadastrado com sucesso!"}), 201


@app.route("/usuarios", methods=["GET"])
def lista_usuarios():
    return jsonify(usuarios)


@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        data = request.get_json()

        email = data.get("email")
        senha = data.get("senha")

        if email in usuarios:
            if usuarios[email][1] == senha:
                return jsonify({"mensagem": "Logado com sucesso!"}), 201
    else:
        return jsonify({"mensagem": "Nada para ver aqui"})


if __name__ == "__main__":
    app.run(debug=True)
