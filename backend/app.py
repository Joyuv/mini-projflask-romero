from flask import *
from flask_session import Session
from flask_cors import CORS

app = Flask(__name__)

app.config["SESSION_TYPE"] = "filesystem"

CORS(app)
carrinho = {}


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
    return render_template("usuarios.html", usuarios=usuarios)


@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        data = request.get_json()

        email = data.get("email")
        senha = data.get("senha")

        if email in usuarios:
            if usuarios[email][1] == senha:
                session["name"] = usuarios[email][0]
                return jsonify({"mensagem": "Logado com sucesso!"}), 201
            return jsonify({"mensagem": "Erro ao logar"})
        return jsonify({"mensagm": "Erro ao logar"})
    if request.method == "GET":
        return jsonify({"username": session["name"]})

@app.route("/carrinho", methods=["POST"])
def carrinho_cadastro():
    global carrinho
    carrinho = request.get_json()
    return jsonify({"mensagem": "Carrinho salvo"})
@app.route("/carrinho", methods=["GET"])
def carrinho_pegar():
    return jsonify({"carrinho": carrinho})



if __name__ == "__main__":
    app.run(debug=True)
