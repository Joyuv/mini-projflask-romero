from flask import *
from flask_cors import CORS
from flask_login import *
from modelos import User, usuarios

app = Flask(__name__)

CORS(app, supports_credentials=True)
carrinho = {}

login_manager = LoginManager() 
app.secret_key = 'guilherme'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id, usuarios)

@app.route("/usuarios", methods=["POST"])
def cadastrar_usuarios():
    data = request.get_json()

    email = data.get("email")
    nome = data.get("nome")
    senha = data.get("senha")
    if email not in usuarios.keys():
        usuarios[email] = [nome, senha]
        user = User(email, nome, senha)
        user.id = email
        login_user(user)
        return jsonify({"mensagem": "Usuário cadastrado com sucesso!"}), 201
    return jsonify({"mensagem": "Erro ao cadastrar"})


@app.route("/usuarios", methods=["GET"])
def lista_usuarios():
    return render_template("usuarios.html", usuarios=usuarios)


@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        data = request.get_json()

        email = data.get("email")
        senha = data.get("senha")

        if email in usuarios:
            if usuarios[email][1] == senha:
                user = User(email, usuarios[email][0], senha)
                user.id = email
                login_user(user)
                return jsonify({"mensagem": "Logado com sucesso!"}), 201
            return jsonify({"mensagem": "Erro ao logar"})
        return jsonify({"mensagm": "Erro ao logar"})

@app.route('/login', methods=["GET"])
@login_required
def get_user():
    return jsonify({"logado": "Usuário logado"})

@app.route("/carrinho", methods=["POST"])
def carrinho_cadastro():
    global carrinho
    carrinho = request.get_json()
    return jsonify({"mensagem": "Carrinho salvo"})
@app.route("/carrinho", methods=["GET"])
def carrinho_pegar():
    carrinholista = []
    for x in carrinho.keys():
        carrinholista.append([x, carrinho[x]])
    return jsonify({"carrinho": carrinho})

if __name__ == "__main__":
    app.run(debug=True)
